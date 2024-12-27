// Select necessary elements
const menuItems = document.querySelectorAll('.menu-item');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

// Cart state
let cart = [];

// Add to cart functionality
menuItems.forEach(item => {
    const button = item.querySelector('.add-to-cart');
    button.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const name = item.querySelector('h3').textContent;
        const price = parseFloat(item.querySelector('p').textContent.replace('$', ''));

        // Check if item is already in cart
        const existingItem = cart.find(cartItem => cartItem.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
        updateCart();
    });
});

// Update cart UI and calculate total
function updateCart() {
    cartItems.innerHTML = ''; // Clear current items
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    totalPrice.textContent = total.toFixed(2);
}
