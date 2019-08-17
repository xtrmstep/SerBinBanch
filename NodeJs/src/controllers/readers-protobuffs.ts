import Koa from 'koa';
import Router from 'koa-router';
import Axios from 'axios';

const ENDPOINT_URL = 'http://localhost:3000/fs';
const router = new Router();

async function readFileProtocolBuffers(ctx: Koa.Context){
    ctx.body = 'OK';
}

router
    .get('/pbf', readFileProtocolBuffers);

export default () => {
    return router.middleware();
};
