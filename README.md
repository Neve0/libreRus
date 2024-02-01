## libreRus
Projeto de uma página web estática que mostra informações sobre livros.

### Arquiterua
A página web faz uma requisição por dados a um servidor nodeJS, esse servidor, por sua vez, faz uma requisição a um servidor mySQL, que retorna uma tabela. O servidor nodeJS transforma a resposta do servidor mySQL em um JSON e manda para a página web que o transforma em HTML.

### Como usar
**Para rodar o projeto é necessário possuir o Docker instalado na sua máquina**
Baixe e através do terminal entre no diretório do projeto e execute o comando:



```
  docker compose build
  docker compose up
```
