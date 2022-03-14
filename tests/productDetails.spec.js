const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
    // // Teste se o array retornado pela função contém dois itens dentro.
    // expect(toMatchObject(productDetails([0, 1]))).toBe(true);
    // // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails()[0, 1] === 'object').toBe(true);
    // // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const products = productDetails('Álcool gel', 'Máscara');
    expect(Object.values(products[0])).not.toEqual(Object.values(products[1]));
    // // Teste se os dois productIds terminam com 123.
    expect(productDetails()[0, 1].details.productId.endsWith('123')).toBe(true);
  });
});
