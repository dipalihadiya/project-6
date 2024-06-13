
class Person {
    constructor(age) {
        this.age = age;
    }

    Father() {
       return new Person(60);
    }
    Child() {
        return new Person(20);
    }
}

let person = new Person();

let father = person.Father();
let child = person.Child();

document.getElementById("parent").innerHTML = ("Father Age:"+ father.age);
document.getElementById("child").innerHTML = ("Children Age:"+ child.age);