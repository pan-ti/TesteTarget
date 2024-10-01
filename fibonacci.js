// Verifica se um número pertence a sequência de Fibonacci
function pertenceASequenciaFibonacci(numero) {
    let anterior = 0, atual = 1;
    while (anterior < numero)  {
        [anterior, atual] = [atual, anterior + atual];
} return anterior === numero;
}
