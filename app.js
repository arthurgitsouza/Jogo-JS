alert('Boas Vindas ao Jogo do Número Secreto!');

let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

console.log(numeroSecreto);

while(chute != numeroSecreto){
    chute = prompt('Digite um número entre 1 e 100:') // a variável chute receberá o input através da func Prompt()

    if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto){
            alert(`O número ${chute} é maior que o número secreto!`)
        } else {
            alert(`O número ${chute} é menor que o número secreto!`)
        }
        tentativas+=1 // Ou tentativas++ 
    }
}

let palavraTentativa =  tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com o total de ${tentativas} ${palavraTentativa}!`)