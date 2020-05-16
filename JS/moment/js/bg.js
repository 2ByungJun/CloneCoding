const body = document.querySelector("body");

const IMG_Number = 3;

/** 이미지 화면 출력 */
function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

/** 랜덤 숫자 생성 */
function genRandom(){
    const number = Math.floor(Math.random() * IMG_Number);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();