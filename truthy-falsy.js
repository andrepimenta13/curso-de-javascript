//Truthy & Falsy

const x = '';
console.log(!!x); //verificar se uma variável é true ou false. Uma string vazia é sempre false.

const y = 0;
console.log(!!y); //verificar se uma variável é true ou false. 0 (zero) é sempre false.

const a = null;
console.log(!!a); //verificar se uma variável é true ou false. null é sempre false.

const b = undefined;
console.log(!!b); //verificar se uma variável é true ou false. Undefined é sempre false.

const list = [];
console.log(!!list); //Um array vazio é true!

const object = {};
console.log(!!object); //Um objeto vazio é true!


//Podemos inverter o booleano da resposta. Exemplo:

console.log(!object); //Com o !, retorna false em vez do true habitual.

console.log(!list); //Com o !, retorna false em vez do true habitual.

console.log(!false); // retorna true.