var syntax        = 'scss'; // Syntax: sass or scss;

var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		imagemin         = require('gulp-imagemin' ),
		sass          = require('gulp-sass'),
		browsersync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require("gulp-notify"),
		rigger        = require("gulp-rigger"),
		rsync         = require('gulp-rsync');
const browserSync = require('browser-sync').create();

const config = {

	server: {

		baseDir: "./dist"

	},

	tunnel: false,

	host: 'localhost',

	port: 3333

};
gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'dist'
		},
		notify: false,
		// open: false,
		// tunnel: true,
		// tunnel: "projectname", //Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('styles', async function() {
	gulp.src('app/'+syntax+'/**/*.'+syntax+'')
	.pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	// .pipe(gulp.dest('app/css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.stream())
});

gulp.task('html', async function() {
	return gulp.src('app/*.html')
		.pipe(rigger()) // Прогоним через rigger
		.pipe(gulp.dest('dist/'))
		.pipe(browserSync.stream())
});
gulp.task('det', async function() {
	return gulp.src('app/details/*.html')
		.pipe(rigger()) // Прогоним через rigger
		.pipe(gulp.dest('dist/details'))
		.pipe(browserSync.stream())
});
gulp.task('img', async function () {
	gulp.src('app/img/**/*.*') // Выберем файлы по нужному пути
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 75, progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]))
		.pipe(gulp.dest('dist/img'))// Переместим их в папку build

		.pipe(browserSync.stream());
});
gulp.task('prevst', async function () {
	gulp.src('app/prevstyle/**/*.*') // Выберем файлы по нужному пути
		.pipe(gulp.dest('dist/prevstyle'))// Переместим их в папку build
		.pipe(browserSync.stream());
});

gulp.task('css', async function () {
	gulp.src('app/css/*.*') // Выберем файлы по нужному пути
		.pipe(gulp.dest('dist/css'))// Переместим их в папку build

		.pipe(browserSync.stream());
});

gulp.task('fonts', async function () {
	gulp.src('app/fonts/**/*.*') // Выберем файлы по нужному пути
		.pipe(gulp.dest('dist/fonts'))// Переместим их в папку build

		.pipe(browserSync.stream());
});

gulp.task('js', async function() {
	gulp.src([
		'app/js/*.*', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Mifify js (opt.)
	// .pipe(gulp.dest('app/js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.stream())
});
gulp.task('libs', async function() {
	gulp.src([
		'app/libs/*.*', // Always at the end
		])
	// .pipe(uglify()) // Mifify js (opt.)
	// .pipe(gulp.dest('app/js'))
	.pipe(gulp.dest('dist/libs'))
	.pipe(browserSync.stream())
});

gulp.task('rsync', function() {
	gulp.src('app/**')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

// gulp.task('watch', gulp.parallel('styles', 'html', 'img', 'fonts', 'js', 'browser-sync'), function() {
// 	gulp.watch('app/'+syntax+'/**/*.'+syntax+'', 'styles');
// 	gulp.watch('app/img/**/*.*', 'img');
// 	gulp.watch('app/fonts/*/**.*', 'fonts');
// 	gulp.watch(['libs/**/*.js', 'app/js/common.js'], 'js');
// 	gulp.watch('app/*.html', 'html')
// });

gulp.task('watch',function() {

	browserSync.init(config);

	gulp.watch('app/'+syntax+'/**/*.'+syntax+'', gulp.series('styles')).on('change', browserSync.reload);
	gulp.watch('app/img/**/*.*', gulp.series('img')).on('change', browserSync.reload);
	gulp.watch('app/prevstyle/**/*.*', gulp.series('prevst')).on('change', browserSync.reload);
	gulp.watch('app/fonts/*/**.*', gulp.series('fonts')).on('change', browserSync.reload);

	gulp.watch('app/js/*.js', gulp.series('js')).on('change', browserSync.reload);
	gulp.watch('app/libs/*.js', gulp.series('libs')).on('change', browserSync.reload);
	gulp.watch('app/css/*.scss', gulp.series('css')).on('change', browserSync.reload);
	gulp.watch('app/details/*.html',  gulp.series('det')).on('change', gulp.task('html'));
	gulp.watch('app/*.html',  gulp.series('html')).on('change', browserSync.reload);


});

gulp.task('default', gulp.parallel('watch'));
