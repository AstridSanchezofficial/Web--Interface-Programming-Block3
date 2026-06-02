import {Vehicule,Car} from "./car.js"
import {Animal,Cat} from "./animal.js"
//Step 6- Display result in the Page 

const runBtn=document.getElementById("run-demo-btn");
const output=document.getElementById("output");

runBtn.addEventListener("click", ()=>{
    const car1=new Car("Toyota","Corolla");
    const car2=new Car("Honda","Civic",true);
    const animal1=new Cat("Cookie","orange","persian")
    //Creating animals
    


    output.innerHTML=`
    <p>${car1.describe()}</p>
    <p>${car1.showModel()}</p>
    <p>${car1.start()}</p>
    <hr>
    <p>${car2.describe()}</p>
    <p>${car2.showModel()}</p>
    <p>${car2.stop()}</p>
    <hr>
    <h2>Testing Animal</h2>
    <p>${animal1.describe()}</p>
    <p>${animal1.meow()}</p>

    `
});
