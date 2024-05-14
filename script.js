<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo de Produtos</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Catálogo de Produtos</h1>
    </header>

    <!-- Seção do carrinho -->
    <section id="cart">
        <h2>Carrinho de Compras</h2>
        <ul id="cart-items"></ul>
        <p id="total-price">Total: R$ 0,00</p>
    </section>

    <main>
        <div class="product">
            <img src="path/to/image1.jpg" alt="Descrição da imagem do produto 1">
            <h2>Produto 1</h2>
            <p>Descrição do produto 1.</p>
            <p class="price">R$ 100,00</p>
            <button class="add-to-cart">Adicionar ao Carrinho</button>
        </div>

        <!-- Produto 2 -->
        <div class="product">
            <img src="path/to/image2.jpg" alt="Descrição da imagem do produto 2">
            <h2>Produto 2</h2>
            <p>Descrição do produto 2.</p>
            <p class="price">R$ 120,00</p>
            <button class="add-to-cart">Adicionar ao Carrinho</button>
        </div>

        <!-- Produto 3 -->
        <div class="product">
            <img src="path/to/image3.jpg" alt="Descrição da imagem do produto 3">
            <h2>Produto 3</h2>
            <p>Descrição do produto 3.</p>
            <p class="price">R$ 80,00</p>
            <button class="add-to-cart">Adicionar ao Carrinho</button>
        </div>
    </main>

    <script src="script.js"></script>
</body>
</html>
