const { runSchema, runQuery } = require('./utils/executeQuery');

describe('05 - Escreva uma query que retorna a quantidade de quartos que tenham pelo menos uma cama de solteiro e direito a café da manhã', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await runQuery('../../src/05_challenge.sql');
    expect(result).toStrictEqual([
      { 'COUNT(*)': 8 }
    ]);
  });
});
