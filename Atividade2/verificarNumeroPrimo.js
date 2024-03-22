// Função para verificar se um número é primo
function verificarNumeroPrimo(n) {
  if (n <= 1) {
    return false; // Números menores ou iguais a 1 não são primos
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // Se o número for divisível por algum número entre 2 e a raiz quadrada de n, não é primo
    }
  }
  return true; // Se o número não foi divisível por nenhum outro número, é primo
}

// Chamada da função para os casos de teste
console.log(verificarNumeroPrimo(0)); // false
console.log(verificarNumeroPrimo(1)); // false
console.log(verificarNumeroPrimo(2)); // true
console.log(verificarNumeroPrimo(3)); // true
console.log(verificarNumeroPrimo(7)); // true
console.log(verificarNumeroPrimo(83)); // true
console.log(verificarNumeroPrimo(100)); // false
console.log(verificarNumeroPrimo(991)); // true
console.log(verificarNumeroPrimo(104729)); // true
console.log(verificarNumeroPrimo(14348907)); // false