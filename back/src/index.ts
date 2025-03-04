import express, { Application, json, urlencoded } from 'express';
import router from './routes/router';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './db/mongoDB';

class Index {
  app: Application;

  constructor() {
    console.log(process.env.NODE_ENV);
    const port = Number(process.env.PORT) || 3000;
    this.app = express();
    this.app.use(json());
    this.app.use(cors());
    this.app.use(urlencoded({ extended: true }));
    connectDB();

    this.app.use(router);

    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
export default new Index();
