var difficulty = document.getElementById("select__difficulty");
var inputName = document.getElementsByClassName("input__name");
var buttonConfirm = document.getElementById("confirm");
buttonConfirm.addEventListener("click", chooseDifficulty);
buttonConfirm.addEventListener("click", benvenutoUtente);


//function to choose the difficulty level
function chooseDifficulty(){
    difficulty.style.display = "flex";
    inputName[0].style.display = "none";
}


//show welcome message after user put his name in the field

var ciaoUtente = document.getElementById("welcome__message");
function benvenutoUtente() {
    ciaoUtente.innerHTML = "Welcome" + " " + document.getElementById("insert__name").value + "," + " " + "<br>" + "Please Choose a difficulty"
}

