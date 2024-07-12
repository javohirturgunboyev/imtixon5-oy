const params = new URLSearchParams(window.location.search);
let data = {}
const productId = params.get("id");
if (productId) {
  fetch('https://cars-pagination.onrender.com/products/${productId}')
    .then((res) => res.json())
    .then((product) => {
        data = product
      document.getElementById("Wrapper").innerHTML = `
                      <div id='hero-single' class="hero-single container">
        <div class="hero-img">
            <img src="${product?.image}" alt="">
        </div>
        <div class="hero-single-content">
            <div class="hero-text">
                <h3 class="hero-single-name">${product?.name}
                </h3>
    
            </div>
            <div class="hero-single-price">
                <p>Цена</p>
                <div class="single-price">
                    <h3>${product?.newPrice}₽</h3>
                    <h4>${product?.oldPrice}₽</h3>
                </div>
            </div>
            <button id="nexBtn" onclick="showAlert()">КОРЗИНКА</button>
        </div>
    </div> `;
});
} else {
  document.getElementById("product-details-container").innerHTML =
    "<p>Product not found</p>";
}
function goToCart(){
    window.location.href = 'http://127.0.0.1:5500/pages/cart.html'
}
function showAlert() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const isProductInCart = cart.some(el => el.id === data.id);
    if (!isProductInCart) {
        cart.push(data);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        Swal.fire({
            title: 'haridingiz amalga oshdi!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000
        });
        
        setTimeout(() => {
            window.location.assign('http://127.0.0.1:5500/pages/cart.html');
        }, 1500);
    } else {
        Swal.fire({
            title: 'Mahsulot allaqachon savatda mavjud!',
            icon: 'info',
            showConfirmButton: false,
            timer: 1000
        });
        setTimeout(() => {
            window.location.assign('http://127.0.0.1:5500/pages/cart.html');
        }, 1500);
    }
}