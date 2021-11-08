
let text = document.querySelector('.innertext');
let backgroundImage = document.querySelector('.imageView');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');

prevButton.addEventListener("click", onPrev);
nextButton.addEventListener("click", onNext);

console.log(prevButton.style.color)


let data = [
    ["Maldives","hawaii ","egypt","paris", "rome", "kyiv"],
    ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg", "./img/6.jpg"]
];
let currentIndex = 0;
text.textContent = data[0][currentIndex];
backgroundImage.src = data[1][currentIndex];




function onNext(){
    if(currentIndex>=0 && currentIndex<data[0].length-1){
        currentIndex++;

    text.textContent = data[0][currentIndex];
    backgroundImage.src = data[1][currentIndex];
    nextButton.style.color = "white";
    prevButton.style.color = "white";

    if(currentIndex>data[0].length-2){
        nextButton.style.color = "rgb(40, 40, 40)";
    }
    }return;
};


function onPrev(){
    if(currentIndex>0){
        currentIndex = currentIndex-1;
        text.textContent = data[0][currentIndex];
    backgroundImage.src = data[1][currentIndex];
    prevButton.style.color = "white";
    nextButton.style.color = "white";

    if(currentIndex==0){
        prevButton.style.color = "rgb(40, 40, 40)";
    }
    }return;
};
