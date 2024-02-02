## libreRus
Projeto de uma página web estática que mostra informações sobre livros.

### Arquitetura
A página web faz uma requisição por dados a um servidor nodeJS, esse servidor, por sua vez, faz uma requisição a um servidor mySQL, que retorna uma tabela. O servidor nodeJS transforma a resposta do servidor mySQL em um JSON e manda para a página web que o transforma em HTML.

### Como usar
**Para rodar o projeto é necessário possuir o Docker instalado na sua máquina**

**Passo 1:**
Baixe e entre na raiz do projeto, apos isso crie um arquivo .env e defina uma variável de nome **DB_PASSWORD**, escolha qualquer valor que desejar.

**Passo 2:**
Entre com o terminal na raiz do projeto e execute o comando:

```
  docker compose up --build
```
Caso o terminal não reconheça o comando tente:

```
  docker-compose up --build
```

Caso o servidor esteja funcionando o terminal irá imprimir a mensagem **CONNECTED ON PORT 3000 NODE SERVER IS RUNNING**, após a criação dos containers.

### Vizualizar o projeto
Para vizualiar a página php do projeto abra um navegador e entre no servidor:

```
  localhost:8080
```

Para vizualizar o resultado da requisição do servidor node ao banco de dados, entre no servidor:
```
  localhost:3000
```

