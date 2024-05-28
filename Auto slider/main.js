var i = 0;
var photos = [];
var time = 3000;

//image list
photos[0] = 'img1.jpg';
photos[1] = 'img2.jpg';
photos[2] = 'img3.jpg';
photos[3] = 'img5.jpg';

//change images
function changeImg(){
    document.slide.src = photos[i];
    if (i < photos.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()",time)
}
window.onload = changeImg;