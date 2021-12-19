const slide =Array.from(document.querySelectorAll('.slide'));
const bawah =document.querySelector('.bawah');
const konten=Array.from(document.querySelectorAll('.content'));
let bawahHeight=getComputedStyle(bawah);

let jumlahSlide=slide.length;
let nowSlide;
slide.forEach(function(a,b){
    if(a.getAttribute('class')== 'slide active'){
        nowSlide=b;
    }
})

const kiri =Array.from(bawah.querySelectorAll('i'))[0];
const kanan=Array.from(bawah.querySelectorAll('i'))[1];

function kekanan(){
    slide[nowSlide].style.animationName="geser";
    setTimeout(function(){
        slide[nowSlide].classList.remove('active');
        nowSlide++;
        if(nowSlide == jumlahSlide){
        nowSlide=0;
        }
        slide[nowSlide].classList.add('active');
        slide[nowSlide].style.animationName="move";
    },500);
}
kanan.addEventListener('click',kekanan);
function kekiri(){
    slide[nowSlide].style.animationName="geser";
    slide[nowSlide].style.animationPlayState="running";

    setTimeout(function(){
        if(nowSlide ==0){
            nowSlide=2;
            slide[0].classList.remove('active');
            slide[nowSlide].classList.add('active');
            slide[nowSlide].style.animationName="move";
            return false;
        }
        slide[nowSlide].classList.remove('active');
        nowSlide--;
        slide[nowSlide].classList.add('active');
        slide[nowSlide].style.animationName="move";
    },500);
}
kiri.addEventListener('click',kekiri);


let gambar;
gambar =document.querySelectorAll('.bg img');

gambar.forEach(a => {

    a.parentElement.parentElement.style.backgroundImage="url(" +a.getAttribute('src') +")";
});

konten.forEach(function(a){
    a.style.bottom = bawahHeight.height;
})
let startingX,movingX;
slide.forEach(function(s,b){
    s.addEventListener("touchstart",function(event){
        startingX =event.touches[0].clientX;
    })
    s.addEventListener("touchmove",function(event){
        movingX =event.touches[0].clientX;
    })
    s.addEventListener("touchend",function(event){
        if(startingX+100<movingX){
            kekiri();
            startingX=undefined;
            movingX=undefined;
        }else if(startingX-100 >movingX){
            kekanan();
            startingX=undefined;
            movingX=undefined;
        } 
    })
})


