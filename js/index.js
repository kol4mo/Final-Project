var count = 0;
setInterval(slideShow, 1000);
function slideShow() {
    document.querySelector("#img");
    switch (count){
        case 0:
            document.querySelector("#img").src = "./images/me_irl.jpg";
            count++
            break;
        case 1:
            document.querySelector("#img").src = "./images/rickroll-roll.gif";
            count++
            break;
        case 2:
            document.querySelector("#img").src = "./images/me_irl.jpg";
            count++
            break;
        case 3:
            document.querySelector("#img").src = "./images/rickroll-roll.gif";
            count = 0;
            break;
    }
}