const PLAYDELAY = 2000;
const IMAGE_FILD = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png",];

document.querySelector('#resetButtonId').style.display = "none";

function setHtml(text) {
    var recipt = document.querySelector("#resultId");
    recipt.innerHTML = text;
}

//get image
function getimage() {
    var arr = [];
    var results = "";

    for (var i = 0; i < 3; i++) {
        var rand = Math.floor(Math.random() * 6);
        arr.push(rand);
        var result = IMAGE_FILD[(arr[i])];
        results += `
<img src="images/${result}" width="100">
`;
    }
    return results;
}

function visability(element, isVisible) {
    var result = isVisible ? "block" : "none";
    document.querySelector("#" + element).style.display = result;

}
function onPlayClicked() {
    setHtml("WAIT!");
    setTimeout(() => {
        visability('playButtonId', false);
        visability('resetButtonId', true);
        setHtml(getimage());
    }, PLAYDELAY);
}

function onResetClicked() {
    visability('playButtonId', true);
    visability('resetButtonId', false);
    //setHtml("you can play");
}

const buttonPlay = document.querySelector('#playButtonId');
buttonPlay.addEventListener('click', onPlayClicked);

const buttonReset = document.querySelector('#resetButtonId');
buttonReset.addEventListener('click', onResetClicked);