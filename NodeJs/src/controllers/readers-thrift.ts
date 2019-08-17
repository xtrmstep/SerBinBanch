import Koa from 'koa';
import Router from 'koa-router';
import Axios from 'axios';

const ENDPOINT_URL = 'http://localhost:3000/fs';
const router = new Router();

async function readFileThrift(ctx: Koa.Context){
    ctx.body = 'OK';
}

router
    .get('/thf', readFileThrift);

export default () => {
    return router.middleware();
};
