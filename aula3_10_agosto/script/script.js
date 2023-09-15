document.getElementsByTagName('h1')[0].textContent = "Meu Cabeçalho";

document.getElementById('link').href = 'http://www.youtube.com';

var class_dm = document.getElementsByClassName('dm');

class_dm[0].style.color = "red";
class_dm[1].style.color = "green";

var link_a = document.querySelector('a#link');
link_a.remove();

var tag_body = document.querySelector('body');
var tag_p = document.createElement('p');
var text_p = document.createTextNode('Curso Javascript');
var attr_p = document.createAttribute('class');
tag_p.appendChild(text_p);
tag_p.setAttributeNode(attr_p);
tag_p.setAttribute('class', 'dm');
tag_body.appendChild(tag_p);

// function click_botao(){
//     alert('Clicou!');
// }

var botao = document.querySelector('#botao');
botao.addEventListener('click', 
    //function(){
    () => {
        alert('Clicou!');
    }
);