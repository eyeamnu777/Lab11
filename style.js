// ********** GLOBAL VARIABLES ***********
let voteCount = 15
let prodArray = [];
let imgArray = ['']
// ********** DOM REFERENCES *************

let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let imgContainer = document.getElementById
('img-container');
let showResBtn = document.getElementById('show-res-btn');
let resContainer = document.getElementById('res-container');
//java views source as property




// ********** CONSTRUCTOR FUNCTION ***********
function Prod(name, fileExtension = 'jpg') {
  this.name = name;
  this.img = `.img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;
  
  prodArray.push(this);
}

//if wanted to creat a new goat, will have a name
// new Goat(bunny-goat, 'img/bunny-goat.png');
// ---> ${name}.${fileExtension}`;
//use file extension to build pathway 


// ********** HELPER FUNCTION / UTILITIES ***********
function randomIndex(){
  return Math.floor(Math.random() * productArray.length);
}

// randomIndex = randomIndex(); <-- invoking functions
renderImgs
- function renderImgs(){
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();
  let imgThreeIndex = randomIndex();
  
  while(imgOneIndex === imgTwoIndex || imgTwoindex === imgThreeIndex || imgOneIndex === imgThreeIndex){
    imgTwoIndex = randomIndex();
    imgTwoIndex = randomIndex();
    imgThreeIndex = randomIndex();
  }
  imgOne.src = prodArray[imgOneIndex].img;
  imgTwo.scr = prodrray[imgTwoIndex].img;
  imgthree.src = prodArray[imgThreeIndex].img;
  
  prodArray [imgOneIndex].views++;
  prodArray [imgTwoIndex].views++;
  prodArray [imgThreeIndex].views++;
  
  imgOne.alt = prodArray[imgOneIndex].name;
  imgTwo.alt = prodArray[imgTwoIndex].name;
  imgThree.alt = prodArray[imgThreeIndex].name;
}
//allows uniqueness = conditionals, booleans (strictly equals)

// ********** EVENT HANDLERS ***********
function handleClick(event) {
  console.dir(event.target);
  let imgClicked = event.target.alt;
  // To-do: add clicks to the image that was clicked
  
  for(let i = 0;  < prodArray.length; i++) {
    if (prodArray[i].name === imgClicked){
      prodArray[i].clicks++;
    }
  }
  
  // increase vote counts 
  //to-do: decrement the vote count
  voteCount--;
  
  //To-do: call the render the img to reload  after voting
  renderImgs();
  
  
  // target is the actually elements its happening to (2:29:00)
  //To-do: after voting rounds end, clicks end
  if(voteCount === 0){
    imgContainer.removeEventListener('click', handleClick); render
  }
  
  //display results - once there are no more votes left
  function handleShowRes() {
    if(votecount ===0){
      for(let i = 0; i < prodArray.length; i++) {
        let liElm = document.createElement('li');
        liElm.textContent = `${prodArray[i].name}. view numbers : ${prodArray[i].views}. click numbers : ${prodArray[i].clicks}`; resContainer.appendChild(liElement);
      } 
      showResBtn.removeEventListener('click', handleShowRes);
    }
  }
  
  
  //needs to add clicks to images clicked
  // ********** EXECUTABLE CODE  ***********
  // ! Object creation 
  
  new Prod('bag');
  new Prod('banana');
  new Prod('bathroom');
  new Prod('boots');
  new Prod('breakfast');
  new Prod('bubblegum');
  new Prod('chair');
  new Prod('cthulhu');
  new Prod('dog-duck');
  new Prod('dragon');
  new Prod('pen');
  new Prod('pet-sweep');
  new Prod('scissors');
  new Prod('shark');
  new Prod('sweep', 'png');
  new Prod('tauntaun');
  new Prod('unicorn');
  new Prod('water-can');
  new Prod('wine-glass');
  
  
  // renderImgs(); <-- CALLING IT
  
  renderImgs();
  imgContainer.addEventListener('click', handleClick);
  // *********** CHART DEMO - CHART OBJ **************
  // reference chart.js
  // const ctx = document.getElementById('myChart').getContext('2d');
  //   const myChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: prodNames,
  //       datasets: [{
  //         data: prodVotes,
  //         label: '# of Votes',
  //         backgroundColor: [
  //           'green',
  //           'brown',
  //           'white',
  //           'burlywood',
  //           'black',
  //         ],
  //         borderColor: [
  //           'black',
  //         ],
  //         borderWidth: 2
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
    //       }
    //     }
    //   }
    // });
  resultsBtn.addEventListener('click', handleShowRes);