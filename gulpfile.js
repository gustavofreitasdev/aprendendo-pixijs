/** Importação de dependências */
var gulp = require('gulp');
var pug = require('gulp-pug');
var clean = require('gulp-clean');

/** Tarefa responsável por compilar arquivos de PUG para HTML */
gulp.task('html', function(){
    return gulp.src("./src/*.pug")
        .pipe(pug())
        .pipe(gulp.dest('./dist/'));
});
/** Tarefa responsável por mover arquivos js da pasta de desenvolvimento para de produção/testes */
gulp.task('js', function(){
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js/'));
});
/** Tarefa responsável por limpar a pasta de produção/testes */
gulp.task('clean', function(){
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});
/** Tarefa padrão, compilar arquivos PUG para HTML e move arquivos JS */
gulp.task('default', ['html', 'js']);