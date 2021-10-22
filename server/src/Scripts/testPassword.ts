const bcrypt = require("bcrypt");

console.log(bcrypt.compareSync("123456", "$2b$10$t8D6B1OXq29aXZS8uBiideC5L6Zvnwn4qHjHWPWo9m0evm.JTMUU."));
