/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  let media;
  let sum = 0;

  for (let number of array) {
    if (typeof(number) !== 'number') {
      console.log('não é numero:', number);
      return media;
      break;
    } else if (typeof(number) === 'number') {
      for (let number of array) {
        sum += Math.round(number);
      }
      media = Math.round(sum / array.length);
      return media;
    }
  }
};

console.log( average([1, 2, 3, '4', 5]) );

module.exports = average;
