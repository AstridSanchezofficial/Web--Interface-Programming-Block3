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
    this.bread=cat_breed
    this.type=type
}

//Conecting the prototypes -->?? Por que si lo paso casi al final se rompe el codigo??
Cat.prototype=Object.create(Animal.prototype);
Cat.prototype.constructor=Cat;

//Addig its own method to cat
Cat.prototype.meow=function(){
    return `${this.name} the ${this.type} meows`
};



export {Animal,Cat};
    