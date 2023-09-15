let campo = document.getElementById('campo');
let input_text = document.getElementById('lista');
let nomes_lista = document.querySelectorAll('#lista > li');

campo.addEventListener("keyup", () => {
    let letra = campo.value;
    //console.log(letra);
    if(letra != ''){
        for(let i = 0; i < nomes_lista.length; i++){
            if(nomes_lista[i].textContent.includes(letra)){
                nomes_lista[i].classList.add('negrito');
            }else{
                nomes_lista[i].classList.remove('negrito');
            }
    
        }
    } 
})