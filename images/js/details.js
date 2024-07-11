const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
if (productId) {
  fetch(`https://cars-pagination.onrender.com/products/${productId}`)
    .then((res) => res.json())
    .then((product) => {
      console.log(product);
      document.getElementById("Wrapper").innerHTML = `
                      <div class="hero-single container">
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
const nexBtn = document.getElementById('nextBtn');
nexBtn.addEventListener('click', function(){
    window.location.assign('http://127.0.0.1:5500/pages/cart.html')
})

function showAlert() {
    Swal.fire({
      title: 'Qo`shildi!',
      icon: 'success',
      showConfirmButton: false,
      timer: 3000
    });
    alert("savatchaustiga bosib harid qilgan maxsulotingizni ko'rishingiz mumkin")
}