var numero = document.querySelector('#input');
var botao = document.querySelector('#botao');
var tabuada = document.querySelector('#tabuada');

botao.addEventListener('click', () => {
    let input;
    input = numero.value;

    for(let i = 1; i <= 10; i++){
        let tag_li = document.createElement('li');
        tabuada.appendChild(tag_li);
        tag_li.textContent = input + ' X '+ i + ' = ' + input*i;
    }

})