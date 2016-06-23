Markdown
=====

Markdown é um sistema de formatação _text-to-html_ criado em 2004 por John Gruber. Com ele você consegue escrever documentos, com uma estrura limpa e simples, que podem ser convertidos para um html válido. O Markdown é bastante utilizado para escrever artigos, livros, posts e documentações.

Para começar a escrever em Markdown, basta criar um arquivo com a extenção `.md`, por exemplo: `readme.md`.

> **Nota:**    
> Esse resumo é apenas uma documentação pessoal dos meus estudos. Para mais informações sobre o Markdown, acesse a [documentação oficial](https://daringfireball.net/projects/markdown/).



## Títulos

```
# Título de nível 1, representa um <h1>
## Título de nível 2, representa um <h2>
### Título de nível 3, representa um <h3>
#### Título de nível 4, representa um <h4>
##### Título de nível 5, representa um <h5>
###### Título de nível 6, representa um <h6>

Título de nível 1, representa um <h1>
=====
Título de nível 2, representa um <h2>
-----
```

## Parágrafos

Este é um parágrafo.

Para criar outro parágrafo, basta pular uma linha.

## Quebra de linha

Esta é uma linha.  
Para criar uma quebra de linha, basta deixar dois espaços "  " no fim da linha anterior.

## Enfase

Você pode _enfatizar_ algo utilizando `_texto_`, isso representa um `<em>`.  
Você também pode dar **importancia** a algo utilizando `**texto**`, isso representa um `<strong>`.

## Links

Você pode criar links utilizando `[texto](url)`, por exemplo: `[Google](http://www.google.com/)` - [Google](http://www.google.com/)

- Caso queira colocar algum texto no atributo _title_ do link, use a sintaxe `[texto](url "title")`, por exemplo: `[Google](http://www.google.com/ "Clique aqui!")` - [Google](http://www.google.com/ "Clique aqui!")
- Caso queira usar o próprio link como texto, use a sintaxe `<link>`, por exemplo: `<http://www.google.com/>` - [Google](http://www.google.com/ "Clique aqui!")

## Citações

Utilize `>` para citações. Isso representa um `<blockquote>`.

> Esse é um exemplo de citação!

## Listas

Para usar listas **não ordenadas**, basta utilizar `*`, `+` ou `-` antes de cada item.

```
- Item 1
- Item 2
- Item 3

* Item 4
* Item 5
* Item 6

+ Item 7
+ Item 8
+ Item 9
```

- Item 1
- Item 2
- Item 3

----

* Item 4
* Item 5
* Item 6

----

+ Item 7
+ Item 8
+ Item 9

Para listas **ordenadas**, basta utilizar a numeração antes de cada item.

```
1. Item 1
2. Item 2
3. Item 3
```

1. Item 1
2. Item 2
3. Item 3

## Imagens

A sintaxe para inserir imagens é bem semelhante da dos links: `![text_do_alt](url_da_imagem)`.

```
![Google](img/google.jpg)
```
![Google](img/google.jpg)

- Também podemos colocar um tittle na imagem seguindo a sintaxe: `![text_do_alt](url_da_imagem "text_do_title")`


## Códigos

Para inserir códigos no seu documento, você tem duas opções: **Bloco** ou **Inline**.

Para códigos em **bloco**, basta colocar _três crases_ (```) antes e depois do bloco de código.

Para códigos **inline**, basta colocar _uma crase_ (`) antes e depois do código.

## Scapes

Para escapar caracteres que são interpretados pelo Markdown, basta utilizar um `\` antes.

> **Nota:**    
> Esse resumo é apenas uma documentação pessoal dos meus estudos. Para mais informações sobre o Markdown, acesse a [documentação oficial](https://daringfireball.net/projects/markdown/).