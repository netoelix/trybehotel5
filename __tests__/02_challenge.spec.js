const connection = require('./utils/connection');
const { runSchema, runQuery } = require('./utils/executeQuery');

describe('02 - Crie e popule a tabela `room_amenities` de acordo com as verificações abaixo', function () {
  it('A tabela `room_amenities` deve ser criada', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW TABLES LIKE "room_amenities";');
    expect(result.length).toBe(1);
  });

  it('A tabela `room_amenities` deve ter a coluna `room_id` como chave primária não nula', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM room_amenities;');
    expect(result).toContainEqual({
      Field: 'room_id',
      Type: 'int',
      Null: 'NO',
      Key: 'PRI',
      Default: null,
      Extra: '',
    });
  });

  it('A tabela `room_amenities` deve ter a coluna `amenity_id` como chave primária não nula', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM room_amenities;');
    expect(result).toContainEqual({
      Field: 'amenity_id',
      Type: 'int',
      Null: 'NO',
      Key: 'PRI',
      Default: null,
      Extra: '',
    });
  });

  it('A tabela `room_amenities` deve ter a coluna `room_id` como chave estrangeira da tabela `rooms`', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [[result]] = await connection.query('SHOW CREATE TABLE room_amenities');
    expect(result['Create Table']).toContain('FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`)');
  });

  it('A tabela `room_amenities` deve ter a coluna `amenity_id` como chave estrangeira da tabela `amenities`', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [[result]] = await connection.query('SHOW CREATE TABLE room_amenities');
    expect(result['Create Table']).toContain('FOREIGN KEY (`amenity_id`) REFERENCES `amenities` (`id`)');
  });

  it('A tabela `room_amenities` deve ser populada com os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SELECT * FROM room_amenities ORDER BY room_id;');
    expect(result).toStrictEqual([
      { 'room_id': 1, 'amenity_id': 3 },
      { 'room_id': 2, 'amenity_id': 4 },
      { 'room_id': 3, 'amenity_id': 6 },
      { 'room_id': 4, 'amenity_id': 8 },
      { 'room_id': 5, 'amenity_id': 9 },
      { 'room_id': 6, 'amenity_id': 10 },
      { 'room_id': 7, 'amenity_id': 11 },
      { 'room_id': 8, 'amenity_id': 12 },
      { 'room_id': 9, 'amenity_id': 2 },
      { 'room_id': 10, 'amenity_id': 5 },
      { 'room_id': 11, 'amenity_id': 7 },
      { 'room_id': 12, 'amenity_id': 1 },
      { 'room_id': 13, 'amenity_id': 3 },
      { 'room_id': 14, 'amenity_id': 6 },
      { 'room_id': 15, "amenity_id": 9 }
    ]);
  });
});
