alert('Boas vindas ao jogo do Número Secreto. Boa sorte!');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute; 
let tentativa = 1;

//enquanto o chute não for igual ao número secreto, o jogo continua até o jogador acertar
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    //Se o chute for igual ao número secreto, executa a ação
    if (chute == numeroSecreto) { //caso a condição seja verdadeira, a mensagem irá aparecer no console
        break;
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativa++; //toda vez que for atribuir um valor à uma variavel e somar +1, a sintaxe é: variavel++
    }
}

 let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'; //operador ternário
 alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}`);

// if (tentativa > 1) {
//     alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativas`);
// } else {
//     alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativa`);
// }
