import express from 'express';
import './database/connect';

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log('Server is running...');
});
