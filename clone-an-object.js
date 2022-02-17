//Original object

let obj1 = {
    name: "David"
};

//Method one

let obj2 = Object.assign({}, obj1);

//Method Two

let obj3 = {
    ...obj1
};

console.log(obj1);
console.log(obj2);
console.log(obj3);