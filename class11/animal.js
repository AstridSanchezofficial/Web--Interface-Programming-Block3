//CREATING ANIMAL PARENT - For this execercise we are working with just domestic animals
//Note: I modified a little bit this excercise but still I am creating Cat constructor that inherits from Animal
function Animal(name,color){
    this.name=name
    this.color=color
}
    
Animal.prototype.describe=function(){
    return `This is a domestic animal`
}

//Creating the child Cat

function Cat(name,color,cat_breed,type="cat"){
    Animal.call(this,name,color)
    this.cat_breed=cat_breed
    this.type=type
}

//Conecting the prototypes -->?? Por que si lo paso casi al final se rompe el codigo??
Cat.prototype=Object.create(Animal.prototype);
Cat.prototype.constructor=Cat;

//Addig its own method to cat
Cat.prototype.meow=function(){
    return `${this.name} the ${this.type} meows`
};

function Dog(name,color,dog_breed,type="dog"){
    Animal.call(this,name,color)
    this.dog_breed=dog_breed
    this.type=type
}

Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;

Dog.prototype.bark=function(){
    return `${this.name} the ${this.type} barks`
}
//Challenge 1
Dog.prototype.describe=function(){
    return `${this.name} is a domestic anamal, ${this.color} and a ${this.dog_breed}`
}
// Example using classes 

class AnimalClass{
    constructor(name,color){
        this.animal_name=name
        this.animal_color=color
    }

    describe(){
        return `${this.animal_name} is a domestic animal`
    }
}

//DogClass (child class of animal)
class DogClass extends AnimalClass{
    constructor(name,color,breed){
        super(name,color);
        this.breed=breed;
    }
    bark(){
    return `${this.animal_name} barkss`;
}
};

export{Animal,Cat,Dog,AnimalClass,DogClass}


    