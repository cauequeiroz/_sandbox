Terminal
=====

O Terminal (console, prompt ou linha de comando) é uma interface de texto usada para se comunicar com o sistema operacional. Nele conseguimos desde navegar por pastas e criar arquivos, até executar scripts complexos que automatizam tarefas do dia-a-dia.

> **Nota**  
> Este resumo é apenas uma documentação pessoal dos meus estudos. Para conhecer mais a fundo esses e outros comandos, utilize o comando `$ help` no seu terminal.

## Básico

Comando 	| O que faz?
-----------	| ----------
`clear` 	| Limpa o console.
`pwd` 		| Mostra qual o diretório atual.
`ls` 		| Mostra o conteúdo desse diretório.

O comando `$ ls` possui alguns modificadores interessantes:

`$ ls -a` Exibe os arquivos ocultos (_.arquivo_)  
`$ ls -l` Exibição detalhada.  
`$ ls -t` Ordena a exibição por _data de modificação_.

## Navegar pelo sistema

Comando 		| O que faz?
--------------- | ----------
`cd [caminho]`	| Vai para determinada pasta.

## Criar pastas e arquivos

Comando 		| O que faz?
---------------	| ----------
`mkdir [nome]`	| Cria uma pasta.
`touch [nome]`	| Cria um arquivo.

## Copiar, mover, renomear e deletar

Comando 				| O que faz?
-----------------------	| ----------
`cp [origem][destino]`	| Copia um arquivo ou pasta.
`mv [origem][destino]`	| Move um arquivo ou pasta.
`mv [n_atual][n_novo]`	| Renomeia um arquivo ou pasta.
`rm [nome]`				| Deleta um arquivo ou pasta.


Você pode utilizar um `*` para se referir a todos, por exemplo:

`$ cp *.txt cauequeiroz/estudos/textos/` Copiar todo arquivo do tipo texto.  
`$ mv p*.avi cauequeiroz/videos/` Mover todos os videos (.avi) que começam com p.

Para deletar, mover ou copiar uma **pasta**, você precisa utilizar o modificador `-r` no comando.

> **Nota**  
> Este resumo é apenas uma documentação pessoal dos meus estudos. Para conhecer mais a fundo esses e outros comandos, utilize o comando `$ help` no seu terminal.