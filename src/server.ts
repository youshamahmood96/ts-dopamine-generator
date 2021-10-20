import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            email: "prisma@prisma.com",
            firstname: "John",
            lastname: "Doe",
            password: "123456",
        },
    });
    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
        },
    });
    console.dir(allUsers, { depth: null });
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

//   await prisma.user.create({
//     data:{
//         email: 'prisma@prisma.com',
//         firstname:'John',
//         lastname:'Smith',
//         password: '12345',
//         nickname:'John',
//         dob:new Date(12,2000),
//         bio:'dsd'
//     }
// })

//    const allUsers = await prisma.user.findMany({
//      include: {
//        posts: true
//      },
//    })
//    console.dir(allUsers, { depth: null })
