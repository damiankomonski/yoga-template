const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-clean-css');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

/* 
    Compile SCSS
    Compile SCSS to CSS, Minify, Rename file, Create sourcemap
*/
function compileSass() {
    return src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(minify({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('./css/'));
}

//Compile Javascript
function compileJS(){
    return src('./js/main.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename({
            suffix: "-compiled"
        }))
        .pipe(dest('./js/'))
}

exports.default = function(){
    watch('./scss/*.scss', compileSass);
    watch('./js/main.js', compileJS);
};