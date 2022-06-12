const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-clean-css');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

//Compile SCSS
function compileSass() {
    return src('./scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(dest('./css/'));
}

//Compile Javascript
function compileJS(){
    return src('./js/main.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename({
            suffix: "-es5"
        }))
        .pipe(dest('./js/'))
}

exports.default = function(){
    watch('./scss/*.scss', compileSass);
    watch('./js/main.js', compileJS)
};