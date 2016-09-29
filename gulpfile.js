var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require("gulp-rename");
var htmlmin = require('gulp-htmlmin');

gulp.task('default', ['browser-sync', 'watch', 'compress']);

// Static Server + watching scss/html files
gulp.task('watch', ['sass'], function() {
    gulp.watch("_/c/**/*.scss", ['sass']);
    gulp.watch(['index.html', '_/*', '*.html', 'src/index.html']);
});

gulp.task('browser-sync', ['sass', 'compress'], function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

var sassOptions = {
  errLogToConsole: true,
  // outputStyle: 'expanded'
  outputStyle: 'compressed'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 1%', 'Firefox ESR']
};
var input = 'src/i.scss';
var output = '_/c';

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('src/i.js')
            .pipe(rename({ suffix: '.min' })),
        uglify(),
        gulp.dest('_/j')
    ],
    cb
  );
});

gulp.task('html', function () {
  return gulp
    .src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true, collapseBooleanAttributes: true}))
    .pipe(gulp.dest(''));
});

