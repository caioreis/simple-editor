# Simple Editor

Este repositório é um projeto teste de um editor que deve conter as seguintes funcionalidades no momento:

Usuário deve poder conseguir formatar o texto, aplicando NEGRITO (cmd + b), ITALICO (cmd +i) e SUBLINHADO (cmd +u). As teclas de atalho já funcionam no Chrome, mas não no Firefox e Safari. Ao arrastar uma imagem local, o editor deve inserir o elemento <img> com src para o arquivo local. 

O projeto foi desenvolvido utilizando as seguintes tecnologias

  * Grunt e grunt plugins
  * Bootstrap 3 (Somente o css foi necessário)
  * jQuery
  
Para rodar o projeto basta clonar o repositório, entrar no projeto e digitar:

    npm install

Depois de instaladas as dependências, digite

    grunt

Com esses passos você já estará rodando o Simple Editor na sua porta 9000, e pode acessá-lo por ```http://localhost:9000/_public/index.html```.
