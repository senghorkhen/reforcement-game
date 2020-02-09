visability('resetButtonId', false);

function setHtml(text){
    var recipt= document.querySelector("#resultId");
     recipt.innerHTML= text;
 }

function visability( element , visable){
var result = visable ? "block": "none";
document.querySelector("#" + element).style.display = result;

}
function onPlayClicked(){
    visability('playButtonId',false);
    visability('resetButtonId',true);
    setHtml("Play");
}

function onResetClicked(){
    visability('playButtonId',true);
    visability('resetButtonId',false);
    setHtml("Clear");
}

const buttonPlay = document.querySelector('#playButtonId');
buttonPlay.addEventListener('click',onPlayClicked);

const buttonReset = document.querySelector('#resetButtonId');
buttonReset.addEventListener('click',onResetClicked);