const os = require("os");

console.log(`The architecture of the OS is ${os.arch()}`);

console.log(`The free memory is ${os.freemem() / 1024 / 1024 / 1024}`);

console.log(`The total memory is ${os.totalmem() / 1024 / 1024 / 1024}`);

console.log(`Name of the host is ${os.hostname()}`);
