// Will only log once, then the module is cached
console.log("Hello from the module");

// Will run as many times as it is invoked
module.exports = () => console.log("This beautiful text 😆");
