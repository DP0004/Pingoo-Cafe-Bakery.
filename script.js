<script>
  const cart = [];
  
  function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({ name, price, qty: 1 });
    }
    updateCart();
  }

  function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const total = document.getElementById('total');

    cartList.innerHTML = '';
    let totalPrice = 0;
    let itemCount = 0;

    cart.forEach((item, index) => {
      totalPrice += item.price * item.qty;
      itemCount += item.qty;

      const li = document.createElement('li');
      li.innerHTML = `
        ${item.name} - ₹${item.price} × ${item.qty}
        <button onclick="changeQty(${index}, 1)">+</button>
        <button onclick="changeQty(${index}, -1)">−</button>
        <button onclick="removeItem(${index})">❌</button>
      `;
      cartList.appendChild(li);
    });

    cartCount.textContent = itemCount;
    total.textContent = totalPrice;
  }

  function toggleCart() {
    document.getElementById('cart-panel').classList.toggle('show');
  }

  function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    updateCart();
  }

  function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
  }

  function checkout() {
    alert("Checkout feature coming soon!");
  }
</script>
