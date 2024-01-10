const { runSchema, runQuery } = require('./utils/executeQuery');

describe('04 - Escreva uma query que retorna o nome do hotel, o valor da diária da terceira e quarta acomodação mais barata, dentre as disponíveis e as ordene pelo valor crescente', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await runQuery('../../src/04_challenge.sql');
    expect(result).toStrictEqual([
      { 'name': 'Hettinger-Raynor', 'price': 150.05 },
      { 'name': 'Dickinson, Mayer and Boyer', 'price': 199.99 },
    ]);
  });
});
