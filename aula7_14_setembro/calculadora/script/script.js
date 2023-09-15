var visor = document.querySelector('#visor');

var botoes = document.querySelectorAll('.numeros');

var operadores = document.querySelectorAll('.operacao');

var ponto = document.querySelector('#ponto');

var valor1, valor2, sinal;

//NodeList
botoes.forEach(function(botao){

    botao.addEventListener('click', () => {

        //console.log(botao.textContent);
        visor.value += botao.textContent;
    })
})

ponto.onclick = () => {
    visor.value += ponto.textContent;
}

operadores.forEach((operadores) => {

    operadores.onclick = function() {

        valor1 = parseFloat(visor.value);
        sinal = operadores.textContent;
        visor.value = '';
    }
})

var calculo = document.querySelector('#calcular');

calculo.onclick = () => {

    valor2 = parseFloat(visor.value);

    switch (sinal) {
        case '+':
            visor.value = valor1 + valor2;    

            break;
    
        case '-':
            visor.value = valor1 - valor2;    

            break;
        case '*':
            visor.value = valor1 * valor2;    

            break;
        case '÷':
            visor.value = valor1 / valor2;    

            break;
        
    }
}

var raiz = document.querySelector('.raiz');

raiz.onclick = () => {
    valor1 = parseFloat(visor.value);
    visor.value = Math.sqrt(valor1) ;    
}

var clear = document.querySelector('.clear');

clear.onclick = () => {
    valor1 = 0;
    valor2 = 0;
    visor.value = '';
}

var off = document.querySelector('.off');

off.onclick = () => {
    valor1 = 0;
    valor2 = 0;
    visor.value = '';
}