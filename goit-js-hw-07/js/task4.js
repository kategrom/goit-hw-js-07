let counterValue = 0;
const valueElement = document.querySelector('#value');

const btn1 = document.querySelector('button[data-action="decrement"]');
const btn2 = document.querySelector('button[data-action="increment"]');

function decrement(){
    counterValue--;
    showResult()
}
function increment(){
    counterValue++;
    showResult()
}

function showResult(){
    valueElement.textContent = counterValue;
}

btn1.addEventListener('click', function(){
    decrement();
});

btn2.addEventListener('click', function(){
    increment();
});