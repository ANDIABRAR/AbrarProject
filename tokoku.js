document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        alert('Produk telah ditambahkan ke keranjang!');
    });
});

document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function() {
        const cartItem = button.parentElement;
        cartItem.remove();
        updateTotal();
    });
});

function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseInt(item.querySelector('.price').innerText.replace('Rp ', '').replace('.', ''));
        const quantity = item.querySelector('.quantity').value;
        total += price * quantity;
    });
    document.getElementById('totalPrice').innerText = 'Rp ' + total.toLocaleString();
}