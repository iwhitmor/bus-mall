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
function Product(name, imageURL) {
  this.name = name;
  this.imageURL = imageURL;
  this.timesClicked = 0;
  this.timesShown = 0;
  allProducts.push(this);
}

console.log(allProducts);

// Populate chart with object data //

function getProductArray(nameOfThePropertyIWant) {
  let answer = [];
  for (let i = 0; i < allProducts.length; i++) {
    answer[i] = allProducts[i][nameOfThePropertyIWant];
  }
  console.log(answer);
  return answer;
}

new Product('Bag', 'images/bag.jpg');
new Product('Banana', 'images/banana.jpg');
new Product('Bathroom', 'images/bathroom.jpg');
new Product('Boots', 'images/boots.jpg');
new Product('Breakfast', 'images/breakfast.jpg');
new Product('Bubblegum', 'images/bubblegum.jpg');
new Product('Chair', 'images/chair.jpg');
new Product('Cthulhu', 'images/cthulhu.jpg');
new Product('Dog-Dug', 'images/dog-duck.jpg');
new Product('Dragon', 'images/dragon.jpg');
new Product('Pen', 'images/pen.jpg');
new Product('Pet-sweep', 'images/pet-sweep.jpg');
new Product('Scissors', 'images/scissors.jpg');
new Product('Shark', 'images/shark.jpg');
new Product('Sweep', 'images/sweep.png');
new Product('Tauntaun', 'images/tauntaun.jpg');
new Product('Unicorn', 'images/unicorn.jpg');
new Product('Water-can', 'images/water-can.jpg');
new Product('Wine-Glass', 'images/wine-glass.jpg');

let totalClicks = 0;

function imageWasClicked(event) {
  // count total clicks //
  totalClicks++;

  // what was clicked on and lets increment the count for clicked on //
  if (event.srcElement.id === '1') {
    allProducts[productIndex1].timesClicked++;
  } else if (event.srcElement.id === '2') {
    allProducts[productIndex2].timesClicked++;
  } else if (event.srcElement.id === '3') {
    allProducts[productIndex3].timesClicked++;
  }

  // choose new images to render from click to click //
  let nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  let nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  let nextProductIndex3 = Math.floor(Math.random() * allProducts.length);

  while ((nextProductIndex1 === nextProductIndex2) || (nextProductIndex2 === nextProductIndex3) || (nextProductIndex3 === nextProductIndex1)) {
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

  if (totalClicks >= rounds) {
    let footerElement = document.getElementById('footer');
    // remove the fires child the h2 //
    if (footerElement.firstChildElement) {
      footerElement.firstChildElement.remove();
    }
    footerElement.textContent = 'You picked a lot of products.';

    let asideUL = document.getElementById('voteResults');

    // count total clicks vs rounds //
    // create li items to show image info on clicks and siplay the percentages //

    for (let i = 0; i < allProducts.length; i++) {
      let voteResultsListItem = document.createElement('li');
      voteResultsListItem.textContent = `${allProducts[i].name} was clicked on ${allProducts[i].timesClicked} times and was shown ${allProducts.timesShown} times `;
      asideUL.appendChild(voteResultsListItem);

      let percentageListItem = document.createElement('li');
      let math;
      if (allProducts[i].timesClicked === 0) {
        math = `Zero click and shown ${allProducts[i].timesShown} times. Must be a bad product`;
      } else {
        math = Math.round(((allProducts[i]['timesClicked'] / allProducts[i]['timesShown']).toFixed(2) * 100)) + '%';
      }
      percentageListItem.textContent = `${allProducts[i].name} percentage of times clicked on VS. times shown is ` + math;
      asideUL.appendChild(percentageListItem);
    }

    // remove event listener //
    for (let i = 0; i < imageElements.length; i++) {
      imageElements[i].removeEventListener('click', imageWasClicked);
      console.log('is this thing working?');
    }
    runMyChartsNow();
  }
}

function runMyChartsNow() {
  let ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getProductArray('name'),
      datasets: [{
        label: '# of Votes',
        data: getProductArray('timesClicked'),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

for(let i = 0; i < imageElements.length; i++){
  imageElements[i].addEventListener('click', imageWasClicked);
  console.log('is this thing working?');
}