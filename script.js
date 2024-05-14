// Função para adicionar um item ao carrinho
function addToCart(name, price) {
    const cart = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const cartCount = document.getElementById('cart-count');

    // Criar um novo item para o carrinho
    const li = document.createElement('li');
    li.textContent = `${name} - R$ ${price.toFixed(2)}`;

    // Adicionar o item ao carrinho
    cart.appendChild(li);

    // Atualizar o preço total
    let currentTotal = parseFloat(totalPrice.textContent.replace('Total:
