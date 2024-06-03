

// Simple Inheretance and access aboject from other class and super() method work
class Pet {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`
    }
}

class Cat extends Pet{
    constructor(name , age , liveLeft){
        super(name , age);
        this.liveLeft = liveLeft
    }
    meow(){
        return "MEOWWWW!!"
    }
}

class Dog extends Pet{
    bark(){
        return "WOOOF!!"
    }
}

const monty = new Cat('monty',12,8)
const kin = new Dog('kin',8)
