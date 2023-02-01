var count = 0;
document.querySelector("#img").src = "./images/Pic_1.jfif";
var desc = document.querySelector("#img-Desc")
desc.textContent = "Our most recent design, the NerveGear X"
setInterval(slideShow, 10000);
function slideShow() {
    switch (count){
        case 0:
            document.querySelector("#img").src = "./images/NerveGear.png";
            desc.textContent = "Our original prototype"
            count++
            break;
        case 1:
            document.querySelector("#img").src = "./images/pic_3.jpg";
            desc.textContent = "Our Design at E3"
            count++
            break;
        case 2:
            document.querySelector("#img").src = "./images/rickroll-roll.gif";
            desc.textContent = ""
            desc.textContent = "Get RickRolled!"
            count++
            break;
        case 3:
            document.querySelector("#img").src = "./images/Pic_1.jfif";
            desc.textContent = "Our most recent design, the NerveGear X"
            count = 0;
            break;
    }
}