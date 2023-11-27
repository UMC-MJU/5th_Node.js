import express from 'express';
import { response } from './config/response.js';
import { tempRouter } from './src/routes/temp.route.js';
import { BaseError } from './config/error.js';
import { status } from './config/response.status.js';

const app = express();
const port = 3000;

app.set('port', 3000)
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/temp', tempRouter);

app.use((req, res, next) => {
    const err = new BaseError(status.NOT_FOUND);
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err.data.status);
    console.log(err.data.message);
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.data.status).send(response(err.data));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});