let text = document.querySelector('.innertext');
document.querySelector('.prev').addEventListener("click", onPrev);
document.querySelector('.next').addEventListener("click", onNext);


// text.innerHTML =  "bla bla bla";
let data = ["Anjelika","ya","tebe","lublu"];
let currentIndex = 0;
text.textContent = data[currentIndex];

function onNext(){
    if(currentIndex>=0 && currentIndex<data.length-1){
        currentIndex++;
return text.textContent = data[currentIndex];
    }
    return;
}
function onPrev(){
    if(currentIndex>0){
        currentIndex = currentIndex-1;
        text.textContent = data[currentIndex];
        console.log(currentIndex)
    }
    return;

}
