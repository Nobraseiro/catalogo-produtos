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
    let currentTotal = parseFloat(totalPrice.textContent.replace('Total: R$ ', ''));
    if (isNaN(currentTotal)) {
        currentTotal = 0;
    }
    const newTotal = currentTotal + price;
    totalPrice.textContent = `Total: R$ ${newTotal.toFixed(2)}`;

    // Atualizar o contador do carrinho
    let itemCount = parseInt(cartCount.textContent);
    itemCount++;
    cartCount.textContent = itemCount;
}

// Adicionar evento de clique para os botões "Adicionar ao Carrinho"
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentNode;
            const name = product.querySelector('h2').textContent;
            const price = parseFloat(product.querySelector('.price').textContent.replace('R$ ', '').replace(',', '.'));
            addToCart(name, price);
        });
    });

    // Mostrar/ocultar o menu do carrinho ao clicar no ícone do carrinho
    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');

    cartIcon.addEventListener('click', () => {
        cartDropdown.classList.toggle('show');
    });

    // Fechar o menu do carrinho ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (!cartIcon.contains(event.target) && !cartDropdown.contains(event.target)) {
            cartDropdown.classList.remove('show');
        }
    });
});
