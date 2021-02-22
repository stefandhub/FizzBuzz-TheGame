/*var startFizzBuzz = document.getElementById("start__fizzbuzz");
startFizzBuzz.addEventListener("click", fizzBuzz);

var container = document.getElementById("print__section");
var number = "";


function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      number = "FizzBuzz";
    } else if (i % 3 == 0) {
      number = "Fizz";
    } else if (i % 5 == 0) {
      number = "Buzz";
    } else {
      number = i;
    }
    var list = document.createElement("div");
    var text = document.createTextNode(number);
    list.appendChild(text);
    container.appendChild(list);
    startFizzBuzz.style.display = "none";
    container.style.display = "flex";
  }
}*/


var startFizzBuzz = document.getElementById("confirm__input");
startFizzBuzz.addEventListener("click", checkNumber);
startFizzBuzz.addEventListener("click", startCountdown);

var numberToCheck = "";
var i = 0;
function checkNumber() {
  i++;
  if (i % 3 == 0 && i % 5 == 0) {
    numberToCheck = "FIZZBUZZ";
  } else if (i % 3 == 0) {
    numberToCheck = "FIZZ";
  } else if (i % 5 == 0) {
    numberToCheck = "BUZZ";
  } else {
    numberToCheck = i;
  }
  fizzBuzz();
  console.log(numberToCheck);
}

var insertedNumber = document.getElementById("insert__num");

insertedNumber.addEventListener("keyup", function(event) {
  if (event.keyCode === 13){
    startFizzBuzz.click();
  }
});

var tryAgain = document.getElementById("try__again__btn")

function fizzBuzz() {
  if (insertedNumber.value == numberToCheck) {
    var nextNumber = document.createElement("div");
    var divText = document.createTextNode(numberToCheck);
    var gameZone = document.getElementById("print__section");
    gameZone.style.display = "block";
    gameZone.appendChild(nextNumber);
    nextNumber.appendChild(divText);
    insertedNumber.value = "";
  } else {
    var youLose = document.getElementById("you__lose");
    youLose.style.display = "block";
    insertedNumber.style.display = "none";
    startFizzBuzz.style.display = "none";
    tryAgain.style.display = "block";
    countdown.style.display = "none";
  }
}


//function to start timer
var startTimer = document.getElementById("start__fizzbuzz");
startTimer.addEventListener("click", startCountdown);

function startCountdown() {
  startTimer.style.display = "none";
  var timeleft = 20;
  var downloadTimer = setInterval(function function1() {
    document.getElementById("countdown").innerHTML =
      timeleft + " " + "seconds remaining";

    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Time is up!";
      var youLose = document.getElementById("you__lose");
      youLose.style.display = "block";
      insertedNumber.style.display = "none";
      startFizzBuzz.style.display = "none";
      tryAgain.style.display = "block";
    }
  }, 1000);

  console.log(countdown);
};

