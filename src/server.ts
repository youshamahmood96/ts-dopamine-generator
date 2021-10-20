import * as dotenv from 'dotenv';
import path from 'path';
import init from './init';

dotenv.config({
    path:path.resolve(__dirname, '../.env')
})

init()



