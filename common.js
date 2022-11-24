let randomClick = document.querySelector("#randomClick");
let result = document.querySelector('h1');
let users = ['1', '2', '3', '4', '5', '6', '7', '8','9'];


function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;

}

randomClick.addEventListener("click", () => {
    let index = getRandomNumber(0, users.length-1);
      result.innerText = users[index];
  
  });
  
  function hideElement(elementId) {
    let element = document.getElementById (elementId);
    element.style.visibility = 'hidden';
  }
  
  function showElement(elementId) {
    let element = document.getElementById (elementId);
    element.style.visibility = 'visible';
  }
    
    function myFunction(){
    alert("Apocalypse just started! You have to get to the bunker in order to save yourself! For surviving the apocalypse you have to be prepared. Get some beans quickly!");
  }
// The following 37 lines of code was adapted from https://www.youtube.com/watch?v=LQGTb112N_c&t=290s
function loadRSR() {
  var questions = [
    {
          prompt: "How many students are in NMD?\n(a) 87\n\ (b) 60\n(c) 100",
          answer: "a"
    },
    {
         prompt: "What color is NMDs ovve?\n(a) Teal\n\ (b) Magenta\n(c) Yellow",
         answer: "c"
    },
    {
         prompt: "What fictional character represents NMD?\n(a) Donald Duck\n\ (b) Minion\n(c) SpongeBob",
         answer: "b"
    }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("WRONG!");
    }
}
alert("you got " + score + "/" + questions.length);

let line = document.getElementById("text");
function popup(){
} if (score == 0 || score == 1) {
    document.getElementById("text").innerHTML="Bad job";
} else if (score == 2) {
    document.getElementById("text").innerHTML="Good job";}
else if (score == 3) {
    document.getElementById("text").innerHTML="Great job";}

}

// The following 9 lines of code was adapted from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_localstorage2
clickCounter();
function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("demo").innerHTML = localStorage.clickcount;
}