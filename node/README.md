## Comando para criar um container com a imagem do node v15 criando um volume e pasando o comando bash para entrar no container e segurar o processo
docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash
