import Koa from 'koa';
import Router from 'koa-router';
import Axios from 'axios';
import { flatbuffers } from 'flatbuffers';
import {FlatBuffersSample} from "../data/flatBuffers/schema_generated";

const ENDPOINT_URL = 'http://localhost:3000/fs';
const router = new Router();

async function replyOk(ctx: Koa.Context) {
    let timeNow = new Date();
    ctx.body = `Alive! It is ${timeNow} now`;
}

async function readFileFlatBuffers(ctx: Koa.Context){
    ctx.body = 'OK';

    const url = `${ENDPOINT_URL}/flb`;

    let response = await Axios.get(url);
    let binary = Uint8Array.from(response.data);
    let buffer = new flatbuffers.ByteBuffer(binary);
    let message : FlatBuffersSample.Message = FlatBuffersSample.Message.getRootAsMessage(buffer);
    let json : FlatBuffersSample.Person | null = message.people(0);
    if (json)
    {
        let obj : FlatBuffersSample.Person = json;
        console.log(obj.about());
    }

}

async function readFileMessagePack(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function readFileProtocolBuffers(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function readFileThrift(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function readFileAvro(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function readFileColfer(ctx: Koa.Context){
    ctx.body = 'OK';
}

async function readFileProtostuff(ctx: Koa.Context){
    ctx.body = 'OK';
}


router
    .get('/', replyOk)
    .get('/flb', readFileFlatBuffers)
    .get('/mpk', readFileMessagePack)
    .get('/pbf', readFileProtocolBuffers)
    .get('/thf', readFileThrift)
    .get('/avr', readFileAvro)
    .get('/col', readFileColfer)
    .get('/psf', readFileProtostuff);

export default () => {
    return router.middleware();
};
