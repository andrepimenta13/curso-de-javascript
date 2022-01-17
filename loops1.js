//Loops - while

let index = 0;

while (index < 10) {
    console.log('Index é menor do que 10!');
    //index = index + 1;
    //index += 1;

    //Mesma coisa que acima.
    index++;
};

const person = {
    name: 'Jane',
    age: 21,
    country: 'Portugal',
};

for (const property in person) {
    console.log(property); //para aceder ás propriedades do objeto
    console.log(person[property]); //para aceder aos valores das propriedades
};