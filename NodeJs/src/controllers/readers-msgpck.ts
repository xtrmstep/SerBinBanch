import Koa from 'koa';
import Router from 'koa-router';
import Axios from 'axios';
import msgpack from 'msgpack-lite';

const ENDPOINT_URL = 'http://localhost:3000/fs';
const router = new Router();

async function readFileMessagePack(ctx: Koa.Context){
    const url = `${ENDPOINT_URL}/mpk`;

    let response = await Axios.get(url);
    console.log(response.data);
    let buffer = Buffer.from(response.data);
    let json = msgpack.decode(buffer);

    // console.log(json);
    ctx.body = json;
    ctx.set('Content-Type', 'application/json');
}

router
    .get('/mpk', readFileMessagePack);

export default () => {
    return router.middleware();
};
