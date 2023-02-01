var count = 0;
document.querySelector("#img").src = "./images/Pic_1.jfif";
setInterval(slideShow, 10000);
function slideShow() {
    switch (count){
        case 0:
            document.querySelector("#img").src = "./images/NerveGear.png";
            count++
            break;
        case 1:
            document.querySelector("#img").src = "./images/pic_3.jpg";
            count++
            break;
        case 2:
            document.querySelector("#img").src = "./images/rickroll-roll.gif";
            count++
            break;
        case 3:
            document.querySelector("#img").src = "./images/Pic_1.jfif";
            count = 0;
            break;
    }
}