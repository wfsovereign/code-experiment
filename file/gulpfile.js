var uglify = require('gulp-uglify');
var gulp = require('gulp');

gulp.task('ug', function () {
    return gulp.src('./data/standard_city.js')
        .pipe(uglify())
        .pipe(gulp.dest('./handle_data/'));
});

gulp.task('default', ['ug']);