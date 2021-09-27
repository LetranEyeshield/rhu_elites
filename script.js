var i=0;
var images =[];
var time=2000;

images[0]='images/banner/doc.jpg';
images[1]='images/banner/mam_jackie.jpg';
images[2]='images/banner/mam_alice.jpg';
images[3]='images/banner/mam_elaine.jpg';
images[4]='images/banner/sir_manny.jpg';
images[5]='images/banner/mam_emma.jpg';
images[6]='images/banner/mam_josie.jpg';
images[7]='images/banner/mam_marionnete.jpg';
images[8]='images/banner/brod.jpg';
images[9]='images/banner/adrian.jpg';
images[10]='images/banner/pfizer.jpg';
images[11]='images/banner/eyeshield_7.jpg';
images[12]='images/banner/honey.jpg';
images[13]='images/banner/mam_leona.jpg';
images[14]='images/banner/mam_shiela.jpg';
images[15]='images/banner/mam_monica.jpg';
images[16]='images/banner/mam_jenet.jpg';
images[17]='images/banner/mam_xtine.jpg';

function welcome_msg(){
    var msg = 'Magandang araw po sa inyo!'+'\n'
                +'Ang website po na ito ay ginawa para makatulong'+'\n'
                +'sa impormasyon tungkol sa ilang health services ng RHU-Manaoag'+'\n'
                +'Bagaman hindi pa po kumpleto ang ilang mga content pero sana makatulong ito'+'\n'
                +'sa mga kababayan natin sa ilang mga katanungan'+'\n'
                +'Maraming Salamat Po!';
    alert(msg);
    changeImg();

    
}

function changeImg(){

    document.slide.src=images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i=0;
    }

    setTimeout("changeImg()",time);

    
}

// window.onload=changeImg;
window.onload=welcome_msg;
