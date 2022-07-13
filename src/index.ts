interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

function getUsertype (obj:User | Admin):string {
    return obj.type
}

const person1 : User = {
    type: 'user',
    name: "masai",
    age: 5,
    occupation: "skills"
}

const person2 : Admin = {
    type: 'admin',
    name: "admin",
    age: 5,
    role: "head"
}

console.log(getUsertype(person1));
console.log(getUsertype(person2));