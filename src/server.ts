import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

const app = express();
dotenv.config();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
  res.json({ greeting: 'Hello world!' });
});

app.listen(port, () => {
  console.log(`🚀 server started at http://localhost:${port}`);
});
