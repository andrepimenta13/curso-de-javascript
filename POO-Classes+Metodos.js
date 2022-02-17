//POO - Programação Orientada a Objetos

//instanciar uma classe
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //criar método dentro da classe para retornar o nome inteiro
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    static speak() {
        console.log('Hello World!');
    }
}

const person = new Person('Jane', 'Doe', 40);
const person2 = new Person('Andre', 'Pimenta', 31);
console.log(person);
console.log(person2);

person.getFullName(); //chamar o método para a person
person2.getFullName(); //chamar o método para a person2

//person.speak(); chamar o método speak (depois de passar a static isto não funciona, pois deixa de estar instanciado)
//person2.speak(); chamar o método speak (depois de passar a static isto não funciona, pois deixa de estar instanciado)



//Métodos estáticos (métodos que não necessitam que a classe seja instanciada)

//colocamos a palavra static antes do nome do método (ver exemplo do speak acima)

Person.speak(); //como é um método static, só podemos executar pela classe Person!