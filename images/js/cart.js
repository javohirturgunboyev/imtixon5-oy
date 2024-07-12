function createCard(product) {
    if (!product,  !product.id,  !product.image,  !product.name , !product.price) {
    return `
      <div class="hero-card" id="hero-card-${!product.id}"> 
        <div class="hero-cart-details">
          <h4>Корзина</h4>
          <img src="../img/close.png" alt="">
        </div>
        <div class="line1"></div>
        <div class="cart-item">
          <img src="${product.image}" width="200" height="200" alt="" class="item-image">
          <div class="item-details">
            <p class="item-title" style="margin-bottom: 10px;">${product.name}</p>
            <div class="item-quantity" style="margin-top: 30px;">
              <button class="minus" id="minus-${product.id}">-</button>
              <span id="value-${product.id}">0</span>
              <button class="plus" id="plus-${product.id}">+</button>
            </div>
          </div>
          <div class="price-del" style="margin-top: -10px;">
            <button id="delBtn-${product.id}" class="delete-button" style="align-items: center;">
              <img src="../img/delete.svg" alt="">
              <h6>Удалить</h6>
            </button>
            <div class="item-p    rice" style="margin-top: 20px;">${product.price}Р</div>
          </div>
        </div>
        <div class="cart-footer">
          <p class="total-price" style="margin-left: -325px; margin-bottom: 10px;">Итого: ${product.price}Р</p>
          <div class="cart-buttons" style="justify-content: space-between;">
            <button class="checkout-button">Оформить заказ</button>
            <button class="continue-button">Продолжить покупки</button>
          </div>
        </div>
      </div>
    `;
  }
  }
//   const cardContainer = document.getElementById('cardContainer');
//   const cardHTML = createCard(cardContainer);
//   document.getElementById("cardContainer").innerHTML += cardHTML;

document.addEventListener('DOMContentLoaded', () => {
    const valueElement = document.querySelector('.value');
    let value = 0;
  
    document.querySelector('.plus').addEventListener('click', () => {
      value++;
      valueElement.textContent = value;
    });
  
    document.querySelector('.minus').addEventListener('click', () => {
      value--;
      valueElement.textContent = value;
      return value = 1;
    });
  });