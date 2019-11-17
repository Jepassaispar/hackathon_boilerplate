const buttonConvertToCouch = document.getElementById("buttonConvertToCouch");

const buttonConvertToBed = document.getElementById("buttonConvertToBed");

const buttonColor1 = document.getElementById("buttonColor1");
const buttonColor2 = document.getElementById("buttonColor2");
const buttonColor3 = document.getElementById("buttonColor3");

const imgButtonColor1 = document.getElementById("imgButtonColor1")
const imgButtonColor2 = document.getElementById("imgButtonColor2")
const imgButtonColor3 = document.getElementById("imgButtonColor3")


const couchPicture = document.getElementById("couchPicture");
const couchPictureSource = couchPicture.src;

const furniturePicture = document.getElementById("furniturePicture");
const furniturePictureSource = furniturePicture.src;

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
    buttonConvertToCouch.classList.toggle("btnCouchSelected")
    buttonConvertToCouch.classList.toggle("btnCouch")
}

function changeImageButtonBed() {
    buttonConvertToBed.classList.toggle("btnBedSelected")
    buttonConvertToBed.classList.toggle("btnBed")

}

function activeButtonCouch() {
    couchPictureToTheLeft();
    if (buttonConvertToCouch.className != "btnCouchSelected") {
        changeImageButtonCouch();
    }
    if (buttonConvertToBed.className = "btnBedSelected") {
        changeImageButtonBed();
    }
}

function activeButtonBed() {
    couchPictureToTheRight();
    if (buttonConvertToBed.className != "btnBedSelected") {
        changeImageButtonBed();
    }
    if (buttonConvertToCouch.className = "btnCouchSelected") {
        changeImageButtonCouch()
    }
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

function changeFurniture(source) {
    furniturePicture.src = source;
}

function addBoxShadow(button) {
    button.classList.add('boxShadow');
}

function removeBoxShadow(button) {
    button.classList.remove('boxShadow')
}

function changePageToRed() {
    changeBackgroundColor('backgroundRedPage', 'backgroundBluePage', 'backgroundYellowPage');
    changeCouchColor('styles/img/RedPage/canapé_rouges_large_2.png');
    changeFurniture('styles/img/RedPage/cactus_canapé_rouge.png');
    addBoxShadow(imgButtonColor2);
    removeBoxShadow(imgButtonColor1);
    removeBoxShadow(imgButtonColor3);
}

function changePageToBlue() {
    changeBackgroundColor('backgroundBluePage', 'backgroundRedPage', 'backgroundYellowPage');
    changeCouchColor('styles/img/BluePage/canapé_bleus_large.png');
    changeFurniture('styles/img/BluePage/lampe_canap_bleu.png');
    addBoxShadow(imgButtonColor1);
    removeBoxShadow(imgButtonColor2);
    removeBoxShadow(imgButtonColor3);
}

function changePageToYellow() {
    changeBackgroundColor('backgroundYellowPage', 'backgroundBluePage', 'backgroundRedPage');
    changeCouchColor('styles/img/YellowPage/canapé_jaunes_large.png');
    changeFurniture('styles/img/YellowPage/plante_canap_jaune.png')
    addBoxShadow(imgButtonColor3);
    removeBoxShadow(imgButtonColor2);
    removeBoxShadow(imgButtonColor1);
}



buttonColor1.onclick = changePageToBlue;
buttonColor2.onclick = changePageToRed;
buttonColor3.onclick = changePageToYellow;