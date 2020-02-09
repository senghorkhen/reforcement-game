const PLAY_DELAY = 2000;
document.querySelector('click',onResetClicked);

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
    setHtml("WAIT!");
   setTimeout(() => {
    visability('playButtonId',false);
    visability('resetButtonId',true);
    // setHtml(getimage());
   }, PLAY_DELAY); 
}

function onResetClicked(){
    visability('playButtonId',true);
    visability('resetButtonId',false);
}

const buttonPlay = document.querySelector('#playButtonId');
buttonPlay.addEventListener('click',onPlayClicked);

const buttonReset = document.querySelector('#resetButtonId');
buttonReset.addEventListener('click',onResetClicked);