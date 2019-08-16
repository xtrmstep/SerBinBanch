import Koa from 'koa';
import Router from 'koa-router';
import Axios from 'axios';
import { flatbuffers } from 'flatbuffers';
import {FlatBuffersSample} from "../data/flatBuffers/schema_generated";

const ENDPOINT_URL = 'http://localhost:3000/fs';
const router = new Router();

async function readFileFlatBuffers(ctx: Koa.Context){
    ctx.body = 'OK';

    const url = `${ENDPOINT_URL}/fbs`;

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

router
    .get('/fbs', readFileFlatBuffers);

export default () => {
    return router.middleware();
};
