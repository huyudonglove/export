function hello() {
    console.log('Hello, world!');
}

function world(name) {
    console.log('Hello, ' + name);
}

exports.hello = hello;
exports.world= world;
exports.default=world('222');
