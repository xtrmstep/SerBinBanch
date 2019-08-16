import Koa from 'koa';
import Router from 'koa-router';
import Axios from 'axios';
import msgpack from 'msgpack-lite';
import Bson from "bson";

const ENDPOINT_URL = 'http://localhost:3000/fs';
const router = new Router();

async function readFileMessagePack(ctx: Koa.Context){
    ctx.body = 'OK';
    const url = `${ENDPOINT_URL}/mpk`;

    let response = await Axios.get(url);
    let binary = Uint8Array.from(response.data);
    let buffer = Buffer.from(binary);
    let json = msgpack.decode(buffer);

    console.log(json);
}

router
    .get('/mpk', readFileMessagePack);

export default () => {
    return router.middleware();
};
