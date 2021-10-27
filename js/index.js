let text = document.querySelector('.innertext');
document.querySelector('.prev').addEventListener("click", onNext);
document.querySelector('.next').addEventListener("click", onNext);


// text.innerHTML =  "bla bla bla";
let data = ["a","b","c"];
text.textContent = data[0];

function onNext(){
    data.length
    text.textContent = data[0];
}
