module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;

module.exports.setName = (user, fullname) => {
    let name = fullname.split(' ');
    user.firstName = name[0];
    user.lastName = name[1];
    return user;
}