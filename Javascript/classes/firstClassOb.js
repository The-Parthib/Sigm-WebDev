let obj = {
    a: 1,
    b: 'parthib',
}
console.log(obj);

let animal={
    eats : true,
    canSpeak : false
}

let rabbit={
    jumps : true,
}

rabbit.__proto__ = animal;

class Animal{
    constructor(name){
        this.name = name;
        console.log('Animal object created created');
    }
    eat(){
        console.log('Animal eats');
    }
    jump(){
        console.log('Animal jumps');
    }
}

class Lion extends Animal{
    constructor(name){
        super(name);
        console.log('Animal object created created');
    }
    roar(){
        console.log('Lion roars');
    }
    eat(){
        console.log('Animal eats ROAR');
    }
}
let a = new Animal("Bunny");
let l = new Lion("Simba");
console.log(l);