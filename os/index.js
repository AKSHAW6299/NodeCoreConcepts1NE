const os = require('os')


console.log('OS type: ',os.type());
console.log('OS arch: ',os.arch());
console.log("Home Dir: ", os.homedir());
console.log("OS Platform: ", os.platform());
console.log("CPU Cores: ", os.cpus().length);
console.log("Free Memory: ", os.freemem());
console.log("hostname: ", os.hostname());
