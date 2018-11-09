var gulp = require('gulp'), //Подключение Gulp
		sass = require('gulp-sass'); // Подключение SASS

gulp.task('sass', function() { //Создание таска SASS
	return gulp.src(['sass/**/*.sass','sass/**/*.scss']) //Берем источник
		.pipe(sass({outputStyle:'expanded'}).on('error',sass.logError)) //Преобразование SASS в СSS
		.pipe(gulp.dest('css')) // Выгружаем результат в папку CSS
});

gulp.task('watch', function() { //Создание таска Watch
	gulp.watch(['sass/**/*.sass','sass/**/*.scss'],['sass']); //Наблюдение за SASS файлами в папке SASS	
});

gulp.task('default',['watch']);