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
const ProductPicture = function(name, imageSrc){
  this.name = name;
  this.url = imageSrc;
  // COUNT OUR PRODUCT VOTES //
  this.click = 0;
  this.timesShown = 0;
  // PUSH OBJECT INTO OUR ARRAY TO STORE THE PRODUCT OBJECT //
  ProductPicture.allImages.push(this);
};

ProductPicture.allImages = [];

// PREVENT LAST PRODUCTS FROM BEING PICKED //

const renderNewProducts = function(leftIndex, middleIndex, rightIndex){
  // console.log('create the image src="X" for left, middle, and right images', leftIndex);
  // console.log('ProductPicture.allImages[leftIndex].url;', ProductPicture.allImages[leftIndex].url);
  leftProductImageTag.src = ProductPicture.allImages[leftIndex].url;
  middleProductImageTag.src= ProductPicture.allImages[middleIndex].url;
  rightProductImageTag.src = ProductPicture.allImages[rightIndex].url;
};

const pickNewProducts = function(){
  const leftIndex = Math.floor(Math.random() * ProductPicture.allImages.length);
  console.log('leftIndex', leftIndex);
  let rightIndex;
  do{
    rightIndex = Math.floor(Math.random() * ProductPicture.allImages.length);
} while(leftIndex === rightIndex || rightIndex === middleIndex || leftIndex === middleIndex);
console.log(ProductPicture.allImages[leftIndex].name + ' and ' + ProductPicture.allimages[rightIndex].name);
leftProductOnPage = ProductPicture.allImages[leftIndex];
middleProdcutOnPage = ProductPicture.allImages[middleIndex];
rightProductOnPage = ProductPicture.allImages[rightIndex];
renderNewProducts(leftIndex,rightIndex);
};

