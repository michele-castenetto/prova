/// <reference path="bower_components/jquery/dist/jquery.min.js" />

var gulp = require('gulp');
// var del = require('del');
// var sass = require('gulp-sass');
// var plumber = require('gulp-plumber');

gulp.task('default', function() {
    // console.log('default');
});

var paths = {
    npm: "./node_modules/",
    bower: "./bower_components/",
    sass: "./sass/",
    libs: "./libs/",
    css: "./css/",
    js: "./js/"
};

var toMove = [
    {
        name: "jquery",
        source: paths.bower + "jquery/dist/jquery.js",
        destination: paths.libs + "jquery/"
    }
];

gulp.task('buildlibs', function () {
    console.log('Moving libraries task ...');
    toMove.forEach(function(item) {
        console.log('Moving ' + item.name + ' library ...');
        gulp.src(item.source).pipe(gulp.dest(item.destination)); 
        console.log('Done!');
    });
    return;
});

// var libsToMove = [
//     paths.bowerSrc + '/jquery/dist/jquery.js'
// ];

// gulp.task('buildlibs', function () {
//     console.log('Moving libraries to /libs path ...');
//     gulp.src(libsToMove).pipe(gulp.dest(paths.libs));
//     console.log('Done!');
//     return;
// });

// gulp.task('clean_vendor', function () {
//     return del([paths.css, paths.libs]);
// });

// gulp.task('css_vendor', function () {
//     return gulp.src(paths.bowerSrc + '/bootstrap/dist/css/bootstrap.min.css')
//         .pipe(gulp.dest(paths.libTargetStyles));
// });

// gulp.task('scripts_vendor', function () {
//     return gulp.src(npm_libsToMove).pipe(gulp.dest(paths.libTargetScripts));
// });

// gulp.task('vendor', ['clean_vendor', 'css_vendor', 'scripts_vendor']);

// gulp.task('sass-compile', function () {
//     gulp.src(paths.sassSrc + '*.scss')
//         .pipe(plumber())
//         .pipe(sass())
//         .pipe(gulp.dest(paths.libTargetStyles));
//     gulp.src();
// });

// gulp.task('move-html', function () {
//     gulp.src(paths.clientScripts + '*.html')
//         .pipe(plumber())
//         .pipe(gulp.dest(paths.appScripts));
// });

// gulp.task('watch-html', function () {
//     gulp.watch(paths.clientScripts + '*.html', ['move-html']);
// });

// gulp.task('watch-sass', function () {
//     gulp.watch(paths.sassSrc + '*.scss', ['sass-compile']);
// });