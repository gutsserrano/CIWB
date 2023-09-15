var botao_acender = document.querySelector('#acender');
var botao_apagar = document.querySelector('#apagar');

botao_acender.addEventListener('click', () => {
    document.querySelector('#imagem').src = 'imagens/SL-021622-48580-22(1).jpg';
});

botao_apagar.addEventListener('click', () => {
    document.querySelector('#imagem').src = 'imagens/SL-021622-48580-22 .jpg';

});
