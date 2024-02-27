//here just obtain the values from btn and div called box

const boxesvar = document.getElementById('boxes');
const btnvar = document.getElementById('btn');

// what is happening here, when you push btn click add the class big but if the class big is in the btnvar id then toggle delete the class 
// and this affect directly the dom.

btnvar.addEventListener('click', () => boxesvar.classList.toggle('big'))
