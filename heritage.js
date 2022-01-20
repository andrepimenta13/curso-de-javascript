//Heranças

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noise!`);
    }
}

class Dog extends Animal { //criar uma classe Dog dentro da classe Animal
    constructor(name) { //temos de passar os mesmos parametros que a classe Animal
        super(name); //usamos o super para chamar o constructor para chamar o constructor da class Animal
    }

    speak() {
        console.log(`${this.name} barked!`); //Este método vai sobrepôr o método na classe Animal.
    }

}
//Quando extendemos uma classe, ela tem acesso a todos os métodos que a classe Pai tem.

const animal = new Animal('Simba');

const dog = new Dog('Bob');

animal.speak();
dog.speak();