const connection = require('./utils/connection');
const { runSchema, runQuery } = require('./utils/executeQuery');

describe('01 - Crie e popule a tabela `amenities` de acordo com as verificações abaixo', function () {
  it('A tabela `amenities` deve ser criada', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW TABLES LIKE "amenities";');
    expect(result.length).toBe(1);
  });

  it('A tabela `amenities` deve ter a coluna `id` como chave primária, não nula e auto incrementável', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM amenities;');
    expect(result).toContainEqual({ 
    Field: 'id',
    Type: 'int',
    Null: 'NO',
    Key: 'PRI',
    Default: null,
    Extra: 'auto_increment',
    });
  });

  it('A tabela `amenities` deve ter a coluna `single_bed` com tipo inteiro numérico não nulo', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM amenities;');
    expect(result).toContainEqual({
      Field: 'single_bed',
      Type: 'int',
      Null: 'NO',
      Key: '',
      Default: null,
      Extra: '',
    });
  });

  it('A tabela `amenities` deve ter a coluna `double_bed` com tipo inteiro numérico não nulo', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM amenities;');
    expect(result).toContainEqual({
      Field: 'double_bed',
      Type: 'int',
      Null: 'NO',
      Key: '',
      Default: null,
      Extra: '',
    });
  });

  it('A tabela `amenities` deve ter a coluna `minibar` com o tipo booleano e não nulo', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM amenities;');
    expect(result).toContainEqual({
      Field: 'minibar',
      Type: 'tinyint(1)',
      Null: 'NO',
      Key: '',
      Default: null,
      Extra: '',
    });
  });

  it('A tabela `amenities` deve ter a coluna `breakfast` com o tipo booleano e não nulo', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM amenities;');
    expect(result).toContainEqual({
      Field: 'breakfast',
      Type: 'tinyint(1)',
      Null: 'NO',
      Key: '',
      Default: null,
      Extra: '',
    });
  });

  it('A tabela `amenities` deve ser populada com os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SELECT * FROM amenities;');
    expect(result).toStrictEqual([
      { 'id': 1, 'single_bed': 1, 'double_bed': 0, 'breakfast': 0, 'minibar': 0 },
      { 'id': 2, 'single_bed': 1, 'double_bed': 0, 'breakfast': 1, 'minibar': 0 },
      { 'id': 3, 'single_bed': 1, 'double_bed': 0, 'breakfast': 1, 'minibar': 1 },
      { 'id': 4, 'single_bed': 2, 'double_bed': 0, 'breakfast': 0, 'minibar': 0 },
      { 'id': 5, 'single_bed': 2, 'double_bed': 0, 'breakfast': 1, 'minibar': 0 },
      { 'id': 6, 'single_bed': 2, 'double_bed': 0, 'breakfast': 1, 'minibar': 1 },
      { 'id': 7, 'single_bed': 0, 'double_bed': 1, 'breakfast': 0, 'minibar': 0 },
      { 'id': 8, 'single_bed': 0, 'double_bed': 1, 'breakfast': 1, 'minibar': 0 },
      { 'id': 9, 'single_bed': 0, 'double_bed': 1, 'breakfast': 1, 'minibar': 1 },
      { 'id': 10, 'single_bed': 1, 'double_bed': 1, 'breakfast': 0, 'minibar': 0 },
      { 'id': 11, 'single_bed': 1, 'double_bed': 1, 'breakfast': 1, 'minibar': 0 },
      { 'id': 12, 'single_bed': 1, 'double_bed': 1, 'breakfast': 1, 'minibar': 1 }
    ]);
  });
});
