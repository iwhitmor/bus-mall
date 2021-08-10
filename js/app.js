'use strict';
console.log('js file is connected');

// GLOBAL VARIABLES //
let imageElements = document.getElementById('img');
console.log('imageElements ', imageElements);

let productIndex1 = 0;
let productIndex2 = 1;
let productIndex3 = 2;
let rounds = 5;
let allProducts = [];

// CONSTRUCTOR FUNCTION //
function Product(name, imageURL){
  this.name = name;
  this.imageURL = imageURL;
  this.timesClicked = 0;
  this.timesShown = 0;
  allProducts.push(this);
}

console.log(allProducts);

// Populate chart with object data //

function getProductArray(nameOfThePropertyIWant){
  let answer = [];
  for(let i = 0; i < allProducts.length; i++){
    answer[i] = allProducts[i][nameOfThePropertyIWant];
  }
  console.log(answer);
  return answer;
}

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
new ProductPicture('Sweep', 'images/sweep.png');
new ProductPicture('Tauntaun', 'images/tauntaun.jpg');
new ProductPicture('Unicorn', 'images/unicorn.jpg');
new ProductPicture('Water-can', 'images/water-can.jpg');
new ProductPicture('Wine-Glass', 'images/wine-glass.jpg');

let totalClicks = 0;

function imageWasClicked(event){
  // count total clicks //
  totalClicks++;

  // what was clicked on and lets increment the count for clicked on //
  if(event.srcElement.id === '1'){
    allProducts[productIndex1].timesClicked++;
  } else if(event.srcElement.id === '2'){
    allProducts[productIndex2].timesClicked++;
  } else if(event.srcElement.id === '3'){
    allProducts[productIndex3].timesClicked++;
  }

  // choose new images to render from click to click //
  let nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  let nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  let nextProductIndex3 = Math.floor(Math.random() * allProducts.length);

  while((nextProductIndex1 === nextProductIndex2) || (nextProductIndex2 === nextProductIndex3) || (nextProductIndex3 === nextProductIndex1)){
    nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  }
  // set up a ref to the pizza index array //
  productIndex1 = nextProductIndex1;
  productIndex2 = nextProductIndex2;
  productIndex3 = nextProductIndex3;

  // update the image array positions 0 and 1 with the new pictures url //
  imageElements[0].src = allProducts[productIndex1].imageURL;
  allProducts[productIndex1].timesShown++;

  imageElements[1].src = allProducts[productIndex2].imageURL;
  allProducts[productIndex2].timesShown++;

  imageElements[2].src = allProducts[productIndex3].imageURL;
  allProducts[productIndex3].timesShown++;

  if(totalClicks >= rounds){
    let footerElement = document.getElementById('footer');
    // remove the fires child the h2 //
    if(footerElement.firstChildElement){
      footerElement.firstChildElement.remove();
    }
    footerElement.textContent = 'You picked a lot of products.';

    let asideUL = document.getElementById('voteResults');

    // count total clicks vs rounds //
    // create li items to show image info on clicks and siplay the percentages //

  
  }


}
