import Koa from 'koa';
import Router from 'koa-router';
import Axios from 'axios';

const ENDPOINT_URL = 'http://localhost:3000/fs';
const router = new Router();

async function replyOk(ctx: Koa.Context) {
    let timeNow = new Date();
    ctx.body = `Alive! It is ${timeNow} now`;
}

async function readFileProtostuff(ctx: Koa.Context){
    ctx.body = 'OK';
}

router
    .get('/', replyOk)
    .get('/psf', readFileProtostuff);

export default () => {
    return router.middleware();
};
