var gulp = require('gulp');
var concat = require('gulp-concat');
var transpiler = require('gulp-es6-module-transpiler');

gulp.task('default', function() {
    return gulp.src("app/*.js")
        .pipe(transpiler({
            type: "amd",
            prefix: "example"
        }))
        .pipe(concat('build.js'))
        .pipe(gulp.dest('build'));
});
