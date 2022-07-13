function getUsertype(obj) {
    return obj.type;
}
var person1 = {
    type: 'user',
    name: "masai",
    age: 5,
    occupation: "skills"
};
var person2 = {
    type: 'admin',
    name: "admin",
    age: 5,
    role: "head"
};
console.log(getUsertype(person1));
console.log(getUsertype(person2));
