"use strict";
const nav = document.querySelector(".nav");
const btnNavEl = document.querySelector(".icon-menu");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const operationOutput = document.querySelector(".operation__output");
const addToCart = document.querySelector(".btn");
const divider = document.querySelector(".third-p");
const totalPrice = document.querySelector(".total-price");
const productQuantity = document.querySelector(".cart__item");
const cardBox = document.querySelector(".cart__info");
const cartIcon = document.querySelector(".cart-icon");
const emptyCart = document.querySelector(".empty-cart");
const trash = document.querySelector(".align-price-trash");
const imgThumbnails = document.querySelector(".main__banner--imageThumnails");
const bannerImage = document.querySelector(".main__banner--image");
const overlay = document.querySelector(".overlay");

//////// Phone Navigaton
btnNavEl.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
});

let num = 0;
plusBtn.addEventListener("click", function () {
  num++;
  operationOutput.textContent = num;
  productQuantity.textContent = num;
  productQuantity.style.backgroundColor = "orangered";
});

minusBtn.addEventListener("click", function () {
  if (num > 0) num--;
  productQuantity.textContent = num;
  operationOutput.textContent = num;
});

addToCart.addEventListener("click", function () {
  if (num > 0) {
    divider.textContent = num;
    const total = 125.0 * num;
    totalPrice.textContent = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total);

    cardBox.classList.remove("block");
    // emptyCart.classList
  }
});

cartIcon.addEventListener("click", function () {
  cardBox.classList.toggle("hidden");
  emptyCart.classList.toggle("hidden");
});

trash.addEventListener("click", function (e) {
  if (e.target.classList.contains("trash-icon")) {
    if (num > 0) {
      num--;
      productQuantity.textContent = num;
      divider.textContent = num;
      const total = 125.0 * num;
      totalPrice.textContent = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(total);
      if (num < 1) {
        cardBox.classList.toggle("block");
        operationOutput.textContent = num;
        productQuantity.textContent = "";
        productQuantity.style.backgroundColor = "";
      }
    }
  }
});

imgThumbnails.addEventListener("click", function (e) {
  // console.log(e.target.dataset.image);

  const curImage = e.target.dataset.src;
  const image2 = e.target;

  if (curImage) {
    bannerImage.src = curImage;
    bannerImage.style.width = "34.5rem";
    bannerImage.style.height = "34.5rem";
  }
});
