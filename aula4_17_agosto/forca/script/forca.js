var banco = ["Morango", "Biciclo", "Correr", "Cadeira", "Pular", "Estrela", "Alegre", "Gaveta", "Papel", "Igreja",
"Porta", "Lanche", "Lua", "Pera", "Neve", "Mar", "Desenho", "Frio", "Rato", "Sol", "Prato", "Sapato",
"Vento", "Copo", "Zebra", "Travesseiro", "Refrigerante", "Cesto", "Rir", "Escola", "Fogueira", "Cachorro",
"Hora", "Parque", "Jogo", "Arte", "Lapis", "Montanha", "Dia", "Oculos", "Piscina", "Cama", "Rua", "Bola",
"Tartaruga", "Vento", "Xadrez", "Ziper", "Anel"]



var palavra = banco [parseInt(Math.random() * 50)];
palavra = palavra.toUpperCase();
console.log(palavra);
var mensagem = [];

var ierradas = 5;
var erradas = [];
var achou = false;
var letra = document.querySelector('#campo')
var botao = document.querySelector('#botao');
var j = 0;
var img = document.querySelector('#img');
var ganhou  = 0;

for(let i=0; i<palavra.length; i++){
    mensagem[i] = '_ ';
    erradas[i] = ' ';
}

botao.addEventListener('click', () => {
    let input;

    input = letra.value;
    input = input.toUpperCase();

    //console.log(input);
    
   for(let i = 0; i < palavra.length; i++){
        if(input == palavra[i]){
            mensagem[i] = input;
            achou = true;
            document.querySelector('#letras').textContent = mensagem.join(' ');
            ganhou++;
        }
    }

    if(ganhou == palavra.length){
        alert(`Você ganhou!! A palavra certa era ${palavra}`);
        window.location.reload();
    }

    if(!achou && ierradas >= 0){
        img.setAttribute('src', `img/forca${ierradas}.png`);
        erradas[j] = input;
        j++;
        ierradas--;
        document.querySelector('#erradas').textContent = erradas.join(' ')
    }
    if(ierradas < 0){
        alert(`PERDEU!! A palavra certa era ${palavra}`);
        window.location.reload();
    }
    achou = false



    //console.log(mensagem);
    //console.log(erradas);
})

for(let i = 0; i<palavra.length;i++){
    document.querySelector('#letras').textContent += mensagem[i];
    document.querySelector('#erradas').textContent += erradas[i];
}