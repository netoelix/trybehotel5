const { runSchema, runQuery } = require('./utils/executeQuery');

describe('03 - Escreva uma query que retorna o email, nome e sobrenome das pessoas usuárias abaixo de 30 anos, ordenando-as pelo nome em ordem alfabética', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await runQuery('../../src/03_challenge.sql');
    expect(result).toStrictEqual([
      { 'email': 'ggude7@dotmail.com', 'first_name': 'Ewell', 'last_name': 'Mueller' },
      { 'email': 'rshawe2@dotmail.com', 'first_name': 'Miles', 'last_name': 'Hills' },
      { 'email': 'dpettegre6@email.com', 'first_name': 'Oleta', 'last_name': 'Schultz' },
      { 'email': 'num41@email.com', 'first_name': 'Sheldon', 'last_name': 'Hills' },
    ]);
  });
});
