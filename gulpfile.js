const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const gulpif = require('gulp-if');
const sass = require('gulp-sass');


const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
var gulp = require('gulp');
gulp.task('copia', ['limpa'] ,() => {
    return gulp.src('src/**/*').pipe(gulp.dest('build'));
});

gulp.task('limpa', () => {
    return del('build');
});

gulp.task('prefixa', ['sass'], () => {
    return gulp.src('build/css/*.css')
        .pipe(autoprefixer({browsers:['Firefox>=29', 'Chrome>=42', 'IE>=10']}))
        .pipe(gulp.dest('build/css'));
});

gulp.task('minifica',['prefixa'],() => {
    return gulp.src('build/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cssnano()))
        .pipe(gulp.dest('build'));
});

gulp.task('sass', ['copia'], () => {
    return gulp.src('build/scss/*.scss').pipe(sass()).pipe(gulp.dest('build/css'));
});