var num = prompt("Digite um valor de 3 dígitos:");
var n1 = num % 10;
var n2 = num % 100/10;
n2 = parseInt(n2);
var n3 = num % 1000/100;
n3 = parseInt(n3);

console.log("Normal: " + num);
console.log("Invertido: " + n1 + n2 + n3);
