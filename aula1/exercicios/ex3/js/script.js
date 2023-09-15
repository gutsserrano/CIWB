var download = prompt("Digite o tamanho do arquivo em MB:");
var mb = download*8;
var velocidade = prompt("Digite a velocidade da internet (Mbps):");

var tempo = (mb/velocidade)/60;

console.log("Velocidade do Download em minutos: ", tempo);