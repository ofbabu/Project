
var photos = ["./img/img1.jpg","./img/img2.jpg","./img/img3.jpg","./img/img5.jpg"]
 var imgTag = document.querySelector("img");
 count = 0;

 function next() {
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
 }
 function preview(){
    count--;
    if(count < 0){
        count = photos.length - 1;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }

 }