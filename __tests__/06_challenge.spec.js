const { runSchema, runQuery } = require('./utils/executeQuery');

describe('06 - Escreva uma query que retorna o nome e a diária dos quartos mais caro e mais barato dentre os hotéis cadastrados, ordene pelo nome do hotel em ordem decrescente', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await runQuery('../../src/06_challenge.sql');
    expect(result).toStrictEqual([
      { 'barato': 150.05, 'caro': 699.99, 'name': 'Hettinger-Raynor' },
      { 'barato': 118.01, 'caro': 500.00, 'name': 'Ernser Inc' },
      { 'barato': 199.99, 'caro': 399.99, 'name': 'Dickinson, Mayer and Boyer' },
      { 'barato': 99.99, 'caro': 929.99, 'name': 'Brown, Kihn and Bergnaum' },
    ]);
  });
});
