var input = document.querySelector('#input');
var botao = document.querySelector('#botao');
var tag_p = document.createElement('p');
//var resultado = document.createElement('p');
//var carregando = 1;

botao.onclick = () => {

    var name = input.value;

    tag_p.textContent = 'Carregando...';
    document.body.appendChild(tag_p)
    

    fetch('https://api.agify.io?name='+name)

    .then(function(respostaJson) {
        
        return respostaJson.json();
    })

    .then (function(respostaDados) {
        tag_p.remove();
        //console.log(respostaDados);
        document.write('O nome ' + respostaDados['name'] + ' tem a idade igual a ' + respostaDados['age']);
        //resultado.textContent = 'O nome ' + respostaDados['name'] + ' tem a idade igual a ' + respostaDados['age'];
        //document.body.appendChild(tag_p)
    })
    }