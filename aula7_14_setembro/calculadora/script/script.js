var visor = document.querySelector('#visor');

var botoes = document.querySelectorAll('.numeros');

var operadores = document.querySelectorAll('.operacao');

var valor1, valor2, sinal;

//NodeList
botoes.forEach(function(botao){

    botao.addEventListener('click', () => {

        //console.log(botao.textContent);
        visor.value += botao.textContent;
    })
})

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
        case '/':
            visor.value = valor1 / valor2;    

            break;
    }
}