
let text = document.querySelector('.innertext');
let backgroundImage = document.querySelector('.imageView');

document.querySelector('.prev').addEventListener("click", onPrev);
document.querySelector('.next').addEventListener("click", onNext);




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

    }
    return;
}
function onPrev(){
    if(currentIndex>0){
        currentIndex = currentIndex-1;
        text.textContent = data[0][currentIndex];
    backgroundImage.src = data[1][currentIndex];
    }
    return;

}
