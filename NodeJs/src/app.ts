import Koa from 'koa';
import mount from 'koa-mount';

import files from './controllers/files';

let  app = new Koa();

app.use(mount('/fs', files()));

export default app;
