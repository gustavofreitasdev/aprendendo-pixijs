/** Importação de dependências */
var gulp = require('gulp');
var gutil = require('gulp-util')
var pug = require('gulp-pug');
var clean = require('gulp-clean');

/** Tarefa responsável por compilar arquivos de PUG para HTML */
gulp.task('html', function(){
    gutil.log('Compilando arquivos HTML');

    return gulp.src("./src/*.pug")
        .pipe(pug())
        .pipe(gulp.dest('./dist/'));
});
/** Tarefa responsável por mover arquivos js da pasta de desenvolvimento para de produção/testes */
gulp.task('js', function(){
    gutil.log('Movendo arquivos JS');


    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js/'));
});
/** Tarefa responsável por mover arquivos de imagens da pasta de desenvolvimento para de produção/testes */
gulp.task('img', function(){
    gutil.log('Movendo imagens');


    return gulp.src('./src/img/*.js')
        .pipe(gulp.dest('./dist/img/'));
});

/** Tarefa responsável por limpar a pasta de produção/testes */
gulp.task('clean', function(){
    gutil.log('Removendo pasta de produção/testes');

    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

/** Tarefa responsável por verificar mudanças na pasta src, caso houver mudanças compila ou/e move os arquivos modificados */
gulp.task('watch', function(){
    gutil.log('Esperando por mudanças na pasta src...');

    gulp.watch('./src/**/*', ['html', 'js', 'img']);
});
/** Tarefa padrão, compilar arquivos PUG para HTML e move arquivos JS */
gulp.task('default', ['html', 'js', 'img', 'watch']);