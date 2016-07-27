var gulp = require('gulp');
var phpcs = require('gulp-phpcs');

gulp.task('default', function() {
	return gulp.src(['application/controllers/Welcome.php', '!application/third_party/**/*.*'])
		// Validate files using PHP Code Sniffer
		.pipe(phpcs({
			bin: 'vendor/bin/phpcs',
			standard: '',
			warningSeverity: 0
		}))
		// Log all problems that was found
		.pipe(phpcs.reporter('file', { path: "code_sniffer.txt" }));
});
