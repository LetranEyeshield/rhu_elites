var i=0;
var images =[];
var time=1500;

images[0]='adrian.jpg';
images[1]='pfizer.jpg';
images[2]='eyeshield_7.jpg';


function changeImg(){
    document.hasChildNodes.src=images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i=0;
    }

    setTimeout("changeImg()",time);
}

window.onload=changeImg;