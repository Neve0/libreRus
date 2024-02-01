<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href="styles.css">
    <title>libreRus</title>
</head>
<body>
    <?php
        $result = file_get_contents("http://node:3000");
        $products = json_decode($result);
    ?>

    <header>BOOKS</header>
    <div class=wrapper>
        <div class=products>
            <?php foreach($products[0] as $book): ?>
                <div class=book>
                    <img src=<?php echo $book->imagem?> width="100" height="100">
                    <div class=text>
                        <p style="font-size: 10px"><?php echo $book->isbn?></p>
                        <p><?php echo $book->titulo?></p>
                        <p><?php echo $book->autor?></p>
                        <p><?php echo "R$ " . $book->preco?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</body>
</html>