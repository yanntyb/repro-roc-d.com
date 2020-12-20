let global = document.getElementById("global");
let img = document.getElementsByTagName("img");
let time = 0;
let imgUrl = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg"]

function modifGlobalBackground(global){
    if(time === 0){
        img[0].src = imgUrl[0]
    }
    else if(time === 300){
        img[0].src = imgUrl[1]
    }
    else if(time === 600){
        img[0].src = imgUrl[2]
    }
    else if(time === 900){
        img[0].src = imgUrl[3]
    }
    else if(time === 1200){
        img[0].src = imgUrl[4]
    }
    else if(time === 1500){
        img[0].src = imgUrl[5]
        time = 0;
    }
    time++;
}

let timer = setInterval(function(){
    modifGlobalBackground(global)
},10);