// ********** GLOBAL VARIABLES ***********
let voteCount = 15
let goatArray = [];

// ********** DOM REFERENCES *************


let imgContainer = document.getElementById
('img-container');
let imgOne = document.getElementById('img-one')
let imgTwo = document.getElementById('img-two')

let resultsBtn = document.getElementById
('show-restults-btn');
let resultsContainer = document.getElementById ('results-container')


// ********** CONSTRUCTOR FUNCTION ***********
function Goat(name, img){
  return Math.floor(Math.random() * goatArray.length);
  this.name = name;
  this.img = img;
  this.views = 0;
  this.clicks = 0;
}

//if wanted to creat a new goat, will have a name
// new Goat(bunny-goat, 'img/bunny-goat.png');
// ---> ${name}.${fileExtension}`;

use file extension to build pathway 


// ********** HELPER FUNCTION / UTILITIES ***********
function randomIndex = randomIndex();
        randomIndex = randomIndex(); <-- invoking functions
renderImgs
- function renderImgs(){
  imgOne.src = goatArray[].img
  imgTwo.scr = goatArray[].img
}

//allows uniqueness = conditionals, booleans (strictly equals
       // make sre 
        // imgOne === imgTwo
        while(imgOneIndex === imgTwoIndex) {
          imgTwoIndex = randomIndex();

          imgOne.src = goatArray[imgOneIndex].img
          imgTwo.src = goatArray[imgTwoIndex].img
          goatArray[]
  imgOne.alt = goatArray[imgOneIndex].name;
  imgTwo.alt = goatArray[imgOneIndex].name;

// ********** EVENT HANDLERS ***********
}function handleClick(event){
  console.dir(event.target);
  let imgClicked = event.target.alt;

    
    //to-do: decrement the vote count
      voteCount--;
  //To-do: call the render the img to reload 
  //tTo-do: after voting 
  // target is the actually elements its happening to (2:29:00)


  //display results - once there are no more votes left
  if(votecount ===0){
    for(let i = 0;  < goatArray.length; i++){
      let liElm = document.createElement(li');
      liElm.textContent = `${goatArray[i].name}`
    }


  //needs to add clicks to images clicked
}
// ********** EXECUTABLE CODE  ***********
      // ! Object creation 

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');

renderImgs();

      // renderImgs(); <-- CALLING IT

  imgContainer.addEventListener('click');
  resultsBtn.addEventListener('click', handleShowResults);
