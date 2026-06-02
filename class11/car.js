//Inheritance in JavaScript

//1. CREATE A PARENT CONSTRUCTOR
function Vehicule(brand){
    this.brand=brand;
}

Vehicule.prototype.describe=function(){
    return `Vehicule brand ${this.brand}`;
};

//2. Child constructor Car

function Car(brand,model,running=false){
    //CALLING brand from Vehicule parent
    Vehicule.call(this, brand);
    this.model=model;
    this.running=running;

}

//3. SET UP INHERITANCE

//Here we are that acar can use the methods in Vehicule prototype if we cannot find it inside Car
Car.prototype=Object.create(Vehicule.prototype);
Car.prototype.constructor=Car; // Se arregla el constructor para que apunte hacia car y no hacia vehicule

//4.Add Child specific Methods
//start, stop and showmodel

Car.prototype.start=function(){
    this.running=true;
    return `${this.model} is running`;

};

Car.prototype.stop=function(){
    this.running=false;
    return `${this.model} has stopped`;
};

Car.prototype.showModel=function(){
    return `Model: ${this.model}`;
};

//7. Adding another child to Vehicule

function ElectricCar(brand,model,batteryLevel){
    Car.call(this,brand,model)
    this.battery_level=batteryLevel
}

//!!!!8.Adding its own method to ElectricCar(we do not use prototype cause is not sharing?)

ElectricCar.prototype.charge=function(){
    return `Car Charging...`
}

//9.Conecting the prototype

ElectricCar.prototype=Object.create(Car.prototype);
ElectricCar.prototype.constructor=ElectricCar;

export{Vehicule,Car,ElectricCar};
