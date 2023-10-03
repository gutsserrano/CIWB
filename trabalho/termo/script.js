/* var botao = document.querySelector('#botao');
var tabela = document.querySelector('#tabela'); */
var numero = document.querySelector('#entrada');
var palavras = document.querySelector('#palavras');
var input = document.createElement("input");
const b2 = document.createElement('button');

var p = "jogos"

input.type = "text";
input.className = "palavras";
palavras.appendChild(input);

b2.textContent = 'Teste';
palavras.appendChild(b2);

/* for(let j = 0; j < 5; j++){
    var tag_tr = document.createElement('tr');
    tag_tr.className = 'tr';
    tabela.appendChild(tag_tr);

    for(let i = 0; i < 5; i++){
        var tag_td = document.createElement('td');
        tag_td.className = 'td';
        tag_tr.appendChild(tag_td);
    }
} */

var linha = 0;

b2.addEventListener('click', () => {
    let count = 0;
    let letra = input.value;
    let tag_p = document.createElement('p');
    tag_p.textContent = letra;
    palavras.appendChild(tag_p);
    //console.log(letra);
    if(letra != ''){
        for(let i = 0; i < letra.length; i++){
            if(letra[i] == p[i]){
                count++;
                letra[i].classList.add('negrito');
                //tag_p.className = 'negrito';
            }
    
            //tag_p.textContent += letra[i];
        }
    } 

    if(count == letra.length){
        console.log("existe");
    }
    console.log(letra);
})
