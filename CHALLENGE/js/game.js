document.querySelector('#resetButtonId').style.display = "none";
var resultId = document.querySelector('#resultId');

function onPlayClicked(){
    document.querySelector('#playButtonId').style.display = "none";
    document.querySelector('#resetButtonId').style.display = "block";
    resultId.innerHTML = "Play";

}
function onResetClicked(){
    document.querySelector('#playButtonId').style.display = "block";
    document.querySelector('#resetButtonId').style.display = "none";
    resultId.innerHTML = "Clear";

}
const buttonPlay = document.querySelector('#playButtonId');
buttonPlay.addEventListener('click',onPlayClicked);

const buttonReset = document.querySelector('#resetButtonId');
buttonReset.addEventListener('click',onResetClicked);
