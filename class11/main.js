import {Vehicule,Car, ElectricCar} from "./car.js"
import {Animal,Cat,Dog,AnimalClass,DogClass} from "./animal.js"
//Step 6- Display result in the Page 

const runBtn=document.getElementById("run-demo-btn");
const output=document.getElementById("output");

runBtn.addEventListener("click", ()=>{
    const car1=new Car("Toyota","Corolla");
    const car2=new Car("Honda","Civic",true);
    const car3=new ElectricCar("Tesla","Furious 1",90)
    const animal1=new Cat("Cookie","orange","persian")
    const animal2= new Dog("Slinky","brown","Hot-dog")
    //Creating animals
    


    output.innerHTML=`
    <h2>Testing Cars</h2>
    <p>${car1.describe()}</p>
    <p>${car1.showModel()}</p>
    <p>${car1.start()}</p>
    <hr>
    <p>${car2.describe()}</p>
    <p>${car2.showModel()}</p>
    <p>${car2.stop()}</p>
    
    <hr>
    <p>${car3.describe()}</p>
    <p>${car3.showModel()}</p>
    <p>${car3.stop()}</p>
    <p>${car3.charge()}</p>
    <hr>
    <h2>Testing Cat</h2>
    <p>${animal1.describe()}</p>
    <p>${animal1.meow()}</p>
    <hr>
    <h2>Testing dog</h2>
    <p>${animal2.describe()}</p>
    <p>${animal2.bark()}</p>

    `
});

//Task — Prove inheritance works
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);
console.log(Object.getPrototypeOf(Car.prototype) === Vehicule.prototype);
console.log(Object.getPrototypeOf(ElectricCar.prototype) === Car.prototype);

//TESTING USING CLASSES

const dog1=new DogClass("Puchi","gold","Golden Retriver")
console.log(dog1.describe());
console.log(dog1.bark())

export {Animal,Cat,Dog,AnimalClass};

//TESTING CHALLENGE OVERRITING DSESCRIBE METHOD   INSIDE DOG

const dog2=new Dog("Mimi","black","Pug");
console.log(dog2.describe())
