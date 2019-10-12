module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;

module.exports.setName = (user, fullname) => {
    let name = fullname.split(' ');
    user.firstName = name[0];
    user.lastName = name[1];
    return user;
}

module.exports.asynAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000)
}

module.exports.asynSqure = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 500)
}