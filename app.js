alert('Boas vindas ao jogo do Número Secreto. Boa sorte!');
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

//Se o chute for igual ao número secreto, executa a ação
if (numeroSecreto == chute) { //caso a condição seja verdadeira, a mensagem irá aparecer no console
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Que pena, você errou!')
}