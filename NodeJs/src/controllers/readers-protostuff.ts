import Koa from 'koa';
import Router from 'koa-router';
import Axios from 'axios';

const ENDPOINT_URL = 'http://localhost:3000/fs';
const router = new Router();

async function readFileProtostuff(ctx: Koa.Context){
    ctx.body = 'OK';
}

router
    .get('/psf', readFileProtostuff);

export default () => {
    return router.middleware();
};
