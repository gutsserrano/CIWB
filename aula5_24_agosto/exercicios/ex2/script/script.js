let min = document.getElementById('min');
let max = document.getElementById('max');
let botao = document.getElementById('botao');
var tag_p = document.createElement('p');

botao.addEventListener('click', () => {
    let inp_min = min.value;
    let inp_max = max.value;
    let contador = 0;

    if(inp_min < inp_max){
        for(let i = inp_min; i < inp_max; i++){
            if(i % 2 == 0 || i % 3 == 0){
                contador++;
            }
        }
    }
    tag_p.textContent = contador;
    document.body.appendChild(tag_p)

})