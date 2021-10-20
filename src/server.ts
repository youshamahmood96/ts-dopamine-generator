// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

import * as dotenv from 'dotenv';
import path from 'path';
import init from './init';

dotenv.config({
    path:path.resolve(__dirname, '../.env')
})

init()


// async function main() {
//        const allUsers = await prisma.user.findMany({
//          include: {
//            posts: true
//          },
//        })
//        console.dir(allUsers, { depth: null })
// }

// main()
//     .catch((e) => {
//         throw e;
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });


