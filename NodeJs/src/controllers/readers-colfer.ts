import Koa from 'koa';
import Router from 'koa-router';
import Axios from 'axios';

const ENDPOINT_URL = 'http://localhost:3000/fs';
const router = new Router();

async function readFileColfer(ctx: Koa.Context){
    ctx.body = 'OK';
}

router
    .get('/col', readFileColfer);

export default () => {
    return router.middleware();
};
