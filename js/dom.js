document.addEventListener("DOMContentLoaded", documentReady);

function documentReady(){
    console.log('Document has fully loaded!');
    const buttonElement = document.getElementById('button');
    buttonElement.addEventListener('click', sayHello);
}

function sayHello(){

    const nameElement = document.getElementById('name');
    const resultElement = document.getElementById('result');
    resultElement.style.color = '';
    if(!nameElement.value) {
        resultElement.style.color = '#FF0000';
        resultElement.innerHTML = 'No name entered, try again!';
        return;
    }
    resultElement.innerHTML = `Hello, ${nameElement.value}!`;
}




