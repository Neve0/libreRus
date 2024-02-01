#comandos responsáveis sobre a estrutura da tabela

CREATE TABLE libre (
    isbn   VARCHAR(30) NOT NULL PRIMARY KEY,
    titulo VARCHAR(80),
    autor  VARCHAR(200),
    preco  DECIMAL(10,2),
    imagem VARCHAR(2000)
);
