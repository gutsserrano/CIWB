var tag_header = document.getElementById('header');

tag_header.textContent = "My Header"
tag_header.style.color = "blue";

var tag_li = document.getElementsByTagName('li');
tag_li[1].textContent = "Item N";

var tag_p = document.createElement('p');
tag_p.textContent = 'Texto 2'
/* var texto_p = document.createTextNode('Texto 2');
tag_p.appendChild(texto_p); */

document.body.appendChild(tag_p);