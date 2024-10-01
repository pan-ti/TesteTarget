// Verifica se um número pertence a sequência de Fibonacci
function pertenceASequenciaFibonacci(numero) {
    let anterior = 0, atual = 1;
    while (anterior < numero)  {
        [anterior, atual] = [atual, anterior + atual];
} return anterior === numero;
}
// Teste para verificar
const numeroInformado = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"), 10);
if (pertenceASequenciaFibonacci(numeroInformado)) {
    console.log(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numeroInformado} não pertence à sequência de Fibonacci.`);
}
