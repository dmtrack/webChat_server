import express from 'express';
import connection from './db/config';
import dotenv from 'dotenv';
dotenv.config();
import { urlencoded, json } from 'body-parser';
const cors = require('cors');
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(
    (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        res.status(500).json({ message: err.message });
    }
);
const port = process.env.PORT;
connection
    .sync()
    .then(() => {
        console.log('Database synced succesfully');
    })
    .catch((err) => {
        console.log('Err', err);
    });

app.listen(port, () => console.log(`server is started on port: ${port}`));
