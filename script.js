document.addEventListener('DOMContentLoaded', function() {
    const cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.closest('.product');
            const productName = productElement.querySelector('h2').textContent;
            const productPrice = parseFloat(productElement.querySelector('.price').textContent.replace('R$', '').replace(',', '.'));

            const product = {
                name: productName,
                price: productPrice
            };

            cart.push(product);
            alert(`${productName} foi adicionado ao carrinho!`);

            updateCart();
        });
    });

    function updateCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total-price');

        // Limpar itens anteriores
        cartItemsContainer.innerHTML = '';

        let total = 0;

        cart.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - R$ ${product.price.toFixed(2).replace('.', ',')}`;
            cartItemsContainer.appendChild(li);
            total += product.price;
        });

        totalPriceElement.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    }
});
