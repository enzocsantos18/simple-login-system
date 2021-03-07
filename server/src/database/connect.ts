import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('Connected to database'))
  .catch(e => {
    console.log(e);
    console.error('Erro ao conectar ao banco');
  });
