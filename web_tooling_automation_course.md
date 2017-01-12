# Web Tooling & Automation

Notas pessoais feitas durante o curso oferecido pela Udacity.

---

## Productive Editing

- Usar um editor no lugar de uma IDE.
- Recomendação de editores: Sublime Text 3 e Atom.
- Se forçar a conhecer e usar os atalhos do editor
- Usar plugins!
	- Emmet
	- SidebarEnchancements
	- Color Picker
	- Color Highlighter

---

## Powerful Builds

- Usar um automatizador de tarefas
- Os recomendados: Grunt e Gulp

### Gulp

1. Tarefa padrão

```
var gulp = require('gulp');

gulp.task('default', function() {
	// do some stuff here...
});
```

2. Compilar o Sass e aplicar Autoprefixer

```
var sass = require('gulp-sass');
var auto = require('gulp-autoprefixer');

gulp.src('sass/**/*.scss')
	.pipe(sass())
	.pipe(auto({
		browsers: ['last 2 versions']
	}))
	.pipe(gulp.dest('./css'))
```

3. Monitorar mudanças

```
gulp.watch('sass/**/*.scss', ['styles']);

---

## Expressive Live Editing

- Usar o BrowserSync para fazer live reloding.