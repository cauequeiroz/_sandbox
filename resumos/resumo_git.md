Git
=====

Git é um sistema de controle de versão, ou seja, através dele conseguimos controlar as diferentes versões do nosso projeto. Com o Git é possível varios desenvolvedores trabalharem simultaneamente no mesmo projeto, criando e editando arquivos, sem a preocupação de que algo seja indesejadamente sobrescrito.

Para instalar o Git, basta executar no seu terminal:
```
$ sudo apt-get install git
```

> **Nota:**    
> Esse resumo é apenas uma documentação pessoal dos meus estudos. Para mais informações sobre o Git, acesse a [documentação oficial](https://git-scm.com/documentation).

## Configurações iniciais

Assim que instalar o git, você precisa realizar algumas configurações.

```
$ git config --global user.name "Seu nome"
$ git config --global user.email "Seu email"
$ git config --global core.editor "Editor de texto"
``` 

## Básico

O git possui alguns status para classificar os arquivos que estão sendo versionados no teu projeto.  
- **untracked**: Arquivo novo, ainda não monitorado pelo Git.  
- **unmodified**: Arquivo monitorado, sem alterações.  
- **modified**: Arquivo com alterações.  
- **staged**: Arquivo pronto para ser versionado.

Comando 					| O que faz?
---------------------------	| ----------
`git init` 					| Inicializa um repositório 
`git status`				| Verifica o status do repositorio  
`git add [file]`			| Adiciona arquivos para serem monitorados
`git commit -m "mensagem"`	| Cria um commit
`git commit -am "mensagem"` | Cria um commit ja adicionando os arquivos modificados

## Visualizando commits e diferenças

Comando 					| O que faz?
---------------------------	| ----------
`git log`					| Exibe historico de commits
`git log --decorate`		| Exibe historico de commits com detalhes
`git log --author="nome"`	| Filtra pelo nome do autor
`git log --graph`			| Exibição grafica dos branchs
`git shortlog`				| Exibe apenas autor e nome dos commits
`git shortlog -sn`			| Exibe apenas autor e quantidade de commits
`git show [hash]`			| Exibe detalhes de um commit específico
`git diff`					| Mostra o que foi modificado
`git diff --name-only`		| Mostra apenas o nome dos arquivos modificados

## Revertendo alterações e commits

Comando 					| O que faz?
---------------------------	| ----------
`git checkout [file]`		| Desfaz a ultima modificação do arquivo
`git reset HEAD [file]`		| Retira arquivo da area de stage
`git reset --soft [hash]`	| Volta um commit, porém os arquivos ficam em stage
`git reset --mixed [hash]`	| Volta um commit, porém os arquivos ficam em modified
`git reset --hard [hash]`	| Volta um commit completamente
`git revert [hash]`			| Cria um novo commit com o projeto no exato estado do commit citado

## Ramificações

Comando 					| O que faz?
---------------------------	| ----------
`git branch`				| Visualiza os branchs
`git checkout -b [name]`	| Cria um novo branch
`git checkout [name]`		| Navega entre branchs
`git branch -D [name]`		| Deleta um branch
`git merge [name]`			| Mescla um branch ao master
`git rebase [name`			| Mescla um branch ao master

O método de junção de ramificações `merge` cria um novo commit representando a união entre os ultimos commits de cada branch, enquanto o `rebase` coloca os commits do branch citado na frente dos ultimos commits do branch principal.

## Work in Progress

Comando 					| O que faz?
---------------------------	| ----------
`git stash`					| Guardar mudanças
`git stash apply`			| Traz mudanças guardadas anteriormente para o seu diretório
`git stash list`			| Lista tudo que esta guardado no stash
`git stash clear`			| Limpa o stash

## Criando uma TAG

Comando 					| O que faz?
---------------------------	| ----------
`git tag`					| Lista as tags do projeto
`git tag -a [version] -m "mensagem"`	| Cria uma nova tag
`git tag -d [version]`		| Apaga uma tag

## Repositório remoto

Comando 					| O que faz?
---------------------------	| ----------
`git push origin master`	| Envia alterações para repositorio remoto
`git clone [rep]`			| Clona um repositorio remoto
`git push origin :[tag ou branch]` | Apaga uma tag ou branch no repositorio remoto
`git push origin master --tags`	   | Envia as tags para repositorio remoto

> **Nota:**    
> Esse resumo é apenas uma documentação pessoal dos meus estudos. Para mais informações sobre o Git, acesse a [documentação oficial](https://git-scm.com/documentation).



