const buttonConvertToCouch = document.getElementById("buttonConvertToCouch");

const buttonConvertToBed = document.getElementById("buttonConvertToBed");

const buttonColor1 = document.getElementById("buttonColor1");
const buttonColor2 = document.getElementById("buttonColor2");
const buttonColor3 = document.getElementById("buttonColor3");

const couchPicture = document.getElementById("couchPicture");
const couchPictureSource = couchPicture.src


const body = document.querySelector('body')

function couchPictureToTheRight() {
    couchPicture.classList.remove("couchToTheLeft");
    couchPicture.classList.add("couchToTheRight");
}

function couchPictureToTheLeft() {
    couchPicture.classList.remove("couchToTheRight");
    couchPicture.classList.add("couchToTheLeft");
}

function changeImageButtonCouch() {
    buttonConverToCouch.classList.toggle("btnCouchSelected")
    if (buttonConverToCouch.classList("btnCouchSelected")) {
        buttonConverToCouch.classList.
    }
}

function changeImageButtonBed() {
    buttonConverToCouch.classList.toggle("btnBedSelected")
    buttonConverToCouch.classList.toggle("btnBedUnselected")
}

function activeButtonCouch() {
    changeImageButtonCouch();
    couchPictureToTheLeft();
}

function activeButtonBed() {
    changeImageButtonBed();
    couchPictureToTheRight();
}

buttonConvertToCouch.onclick = activeButtonCouch;
buttonConvertToBed.onclick = activeButtonBed;

function changeBackgroundColor(classAdded, removeClass1, removeClass2) {
    body.classList.add(classAdded);
    body.classList.remove(removeClass1);
    body.classList.remove(removeClass2)
}

function changeCouchColor(source) {
    couchPicture.src = source;
}

function toggleBoxShadow(button) {
    button.classList.toggle('boxShadow');
}

function removeBoxShadow(button) {
    button.classList.remove('boxShadow')
}

function changePageToRed() {
    changeBackgroundColor('backgroundRedPage', 'backgroundBluePage', 'backgroundYellowPage');
    changeCouchColor('/styles/img/RedPage/canapé_rouges_large_2.png')
}

function changePageToBlue() {
    changeBackgroundColor('backgroundBluePage', 'backgroundRedPage', 'backgroundYellowPage');
    changeCouchColor('/styles/img/BluePage/canapé_bleus_large.png')
}

function changePageToYellow() {
    changeBackgroundColor('backgroundYellowPage', 'backgroundBluePage', 'backgroundRedPage');
    changeCouchColor('/styles/img/YellowPage/canapé_jaunes_large.png')
}



buttonColor1.onclick = changePageToRed;
buttonColor2.onclick = changePageToBlue;
buttonColor3.onclick = changePageToYellow;