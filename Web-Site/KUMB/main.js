var i = 0;
var images =[];
var time = 5000;
// var imgTag = document.getElementById("#img");
var imgTag = document.querySelector("#img");
count = 0;

//images import list
images[0]="./image/slider-1.jpg";
images[1]="./image/slider-2.jpg";
images[2]="./image/slider-3.jpg";
images[3]="./image/slider-4.jpg";
images[4]="./image/slider-5.jpg";
images[5]="./image/slider-6.jpg";
images[6]="./image/slider-7.jpg";

// auto change
function changeImg(){
    document.slider.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time)
}
window.onload = changeImg;



//next button
function next() {
    count++;
    if(count >= images.length){
        count = 0;
        imgTag.src = images[count];
    }else{
        imgTag.src = images[count];
    }
 }

 //preview button
 function preview(){
    count--;
    if(count < 0){
        count = images.length - 1;
        imgTag.src = images[count];
    }else{
        imgTag.src = images[count];
    }
 }
