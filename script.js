// Função para adicionar um item ao carrinho
function addToCart(name, price) {
    const cart = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    // Criar um novo item para o carrinho
    const li = document.createElement('li');
    li.textContent = `${name} - R$ ${price.toFixed(2)}`;

    // Adicionar o item ao carrinho
    cart.appendChild(li);

    // Atualizar o preço total
    const currentTotal = parseFloat(totalPrice.textContent.replace('Total: R$ ', ''));
    const newTotal = currentTotal + price;
    totalPrice.textContent = `Total: R$ ${newTotal.toFixed(2)}`;
}

// Adicionar evento de clique para os botões "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const name = product.querySelector('h2').textContent;
        const price = parseFloat(product.querySelector('.price').textContent.replace('R$ ', ''));
        addToCart(name, price);
    });
});
