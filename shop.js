document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const button = event.target;
            const itemName = button.getAttribute('data-name');
            const itemPrice = button.getAttribute('data-price');
            const itemImage = button.getAttribute('data-image');

            const item = {
                name: itemName,
                price: itemPrice,
                image: itemImage
            };

            addToCart(item);
        });
    });

    function addToCart(item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});
