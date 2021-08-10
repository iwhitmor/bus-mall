'use strict';
console.log('js file is connected');

// GLOBAL VARIABLES //
const productImageSectionTag = document.getElementById('all_products');
const leftProductImageTag = document.getElementById('left_product_img');
const middleProductImageTag = document.getElementById('middle_product_img');
const rightProductImageTag = document.getElementById('right_product_img');

let totalClicks = 0;

// VARIABLES TO STORE THE PIZZAS ALREADY ON THE PAGE //
let leftProductOnPage = null;
let middleProductOnPage = null;
let rightProductOnPage = null;

// CONSTRUCTOR FUNCTION //
const ProductPicture = function(name, imageSrc) {
  this.name = name;
  this.url = imageSrc;
  // COUNT OUR PRODUCT VOTES //
  this.click = 0;
  this.timesShown = 0;
  // PUSH OBJECT INTO OUR ARRAY TO STORE THE PRODUCT OBJECT //
  ProductPicture.allImages.push(this);
};

ProductPicture.allImages = [];
console.log(ProductPicture.allImages);
// PREVENT LAST PRODUCTS FROM BEING PICKED //

const renderNewProducts = function(leftIndex, middleIndex, rightIndex) {
  // console.log('create the image src="X" for left, middle, and right images', leftIndex);
  // console.log('ProductPicture.allImages[leftIndex].url;', ProductPicture.allImages[leftIndex].url);
  leftProductImageTag.src = ProductPicture.allImages[leftIndex].url;
  middleProductImageTag.src = ProductPicture.allImages[middleIndex].url;
  rightProductImageTag.src = ProductPicture.allImages[rightIndex].url;
};

const pickNewProducts = function () {
  const leftIndex = Math.floor(Math.random() * ProductPicture.allImages.length);
  console.log('leftIndex', leftIndex);
  let rightIndex;
  let middleIndex;
  do {
    middleIndex = Math.floor(Math.random() * ProductPicture.allImages.length);
    console.log('middleIndex', middleIndex);
    rightIndex = Math.floor(Math.random() * ProductPicture.allImages.length);
    console.log('rightIndex', rightIndex);

  } while (leftIndex === rightIndex || rightIndex === middleIndex || leftIndex === middleIndex);

  console.log(ProductPicture.allImages[leftIndex].name, ProductPicture.allImages[middleIndex].name, ProductPicture.allImages[rightIndex].name);

  leftProductOnPage = ProductPicture.allImages[leftIndex];
  middleProductOnPage = ProductPicture.allImages[middleIndex];
  rightProductOnPage = ProductPicture.allImages[rightIndex];
  //function call to give the render new image src's
  renderNewProducts(leftIndex, middleIndex, rightIndex);
};

const handleClickonProduct = function (event) {
  // console.log('Lets handle the click now');
  // console.log('left product on the page. ', leftProductOnPage);

  if (totalClicks < 5) {

    const thingWeClickOn = event.target;

    // console.log('event target', event.target);
    const id = thingWeClickOn.id;
    // console.log('thingWeClickOn', thingWeClickOn);
    // console.log('this is the id', id);

    if (id === 'left_product_img') {
      console.log('left product on the page.', leftProductOnPage);
      leftProductOnPage.clicks++;
      if (id === 'middle_product_img') {
        console.log('middle product on the page.', middleProductOnPage);
        middleProductOnPage.clicks++;
      }
      if (id === 'right_product_img') {
        console.log('right prodcut on the page.', rightProductOnPage);
        rightProductOnPage.clicks++;
      }
      console.log('left product on the page. ', leftProductOnPage);
      leftProductOnPage.timesShown++;
      middleProductOnPage.timesShown++;
      rightProductOnPage.timesShown++;
      pickNewProducts();
    }
    // console.log('is this running ', event.target.id);
  }

  totalClicks++;
  // if (totalClicks === 5) {
  //   productImageSectionTag.removeEventListener('click', handleClickonProduct);
  //   // console.log('the vote has ended. and remove listener works. ');
  // }

};

productImageSectionTag.addEventListener('click', handleClickonProduct);

new ProductPicture('Bag', 'images/bag.jpg');
new ProductPicture('Banana', 'images/banana.jpg');
new ProductPicture('Bathroom', 'images/bathroom.jpg');
new ProductPicture('Boots', 'images/boots.jpg');
new ProductPicture('Breakfast', 'images/breakfast.jpg');
new ProductPicture('Bubblegum', 'images/bubblegum.jpg');
new ProductPicture('Chair', 'images/chair.jpg');
new ProductPicture('Cthulhu', 'images/cthulhu.jpg');
new ProductPicture('Dog-Dug', 'images/dog-duck.jpg');
new ProductPicture('Dragon', 'images/dragon.jpg');
new ProductPicture('Pen', 'images/pen.jpg');
new ProductPicture('Pet-sweep', 'images/pet-sweep.jpg');
new ProductPicture('Scissors', 'images/scissors.jpg');
new ProductPicture('Shark', 'images/shark.jpg');
new ProductPicture('Sweep', 'images/sweep.jpg');
new ProductPicture('Tauntaun', 'images/tauntaun.jpg');
new ProductPicture('Unicorn', 'images/unicorn.jpg');
new ProductPicture('Water-can', 'images/water-can.jpg');
new ProductPicture('Wine-Glass', 'images/wine-glass.jpg');

leftProductOnPage = ProductPicture.allimages;
middleProductOnPage = ProductPicture.allImages;
rightProductOnPage = ProductPicture.allImages;

pickNewProducts();




