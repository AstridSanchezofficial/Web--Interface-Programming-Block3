// PROTOTYPES AND SHARES BEHAVIOR 
//Create these files:
    // index.html
    // app.js
    // Your final page should display the output in the browser.

//1. Building constructor function called Book
    //Each Book should store : title, author, available

function Book (title,author,available=true){
    this.title=title;
    this.author=author;
    this.available=available;
}

//2. Add prototype methods: Add these share methods on Book.prototype
    // borrow () , returnBook(), displayInfo()

Book.prototype.borrow= function(){
    if (this.available){
        this.available = false;
        return `${this.title} has been borrowed;`
    }
    return `Sorry you cannot borrowed ${this.title}, this book is not available now `
};

Book.prototype.returnBook= function(){
    this.available=true
    return `You have returned ${this.title} `;
}

Book.prototype.displayInfo= function (){
    if (this.available === true){
          return `${this.title} by ${this.author} is Available`;
    }

    return  `${this.title} by ${this.author} is NOT Available`;
  
}



//5.Display the results in the Page

const runDemoBtn= document.getElementById("run-demo-btn")
const outputContainer=document.getElementById("output")

runDemoBtn.addEventListener("click",()=>{
    //4. Create objects 

    const book1=new Book("Design Patterns","Don Norman");
    const book2=new Book("Le design","Stephan Vial", false);

    outputContainer.innerHTML=`
    <p>${book1.displayInfo()}</p>
    <p>${book1.borrow()}</p>
    <p>${book1.displayInfo()}</p>
    <hr>
    <p>${book2.displayInfo()}</p>
    <p>${book2.returnBook()}</p>
    <p>${book2.displayInfo()}</p>
    `;

});

//6.Inspect Behavior


const book1=new Book("Design Patterns","Don Norman");
const book2=new Book("Le design","Stephan Vial", false);

console.log(Object.getPrototypeOf(book1) === Book.prototype);
console.log(book1.hasOwnProperty("title"));
console.log(book1.hasOwnProperty("displayInfo"));

//7. Add another toggle method

Book.prototype.toggleAvailability =function (){
    this.available = !this.available;
    return `${this.title} is now ${this.available}`;
}
book1.toggleAvailability();
console.log(book1.toggleAvailability());
//8.Prove the method is shared
console.log(book1.displayInfo===book2.displayInfo);
console.log(book1.borrow===book2.borrow);

//9. Add a prototype property
Book.prototype.genre="Design Ux";
console.log(book2.genre);
//10. Override the sahare property
Book.prototype.genre="General";
console.log(book1.genre);

//CHALLENGES TASK
    //Challenge 1:
    //Create an Author constructor with:name,country
function Author(name,country){
    this.name=author;
    this.country=country;
}

//Add a prototype method

Author.prototype.describe= function(){
    return `${this.author} is from ${this.country}`
};

//Challenge 2 — Compare with class 
    //Rewrite your Book example using class syntax and compare the behavior.
class Boook{
    constructor (title,author,available=true){
        this.title=title;
        this.author=author;
        this.available=available;
    }

    displayInfo(){
        return `${this.title} by ${this.author} is avaliable:${this.available}`;
    }
}

const book3= new Boook("Architecture","Frida Ledezma")
const book4=new Boook("The Senior designer","Diego Cornelle")
console.log(book3.hasOwnProperty("title"));
console.log(book3.hasOwnProperty("author"));
console.log(book3.hasOwnProperty("displayInfo"));
   
//Assigning a property just to book3

Boook.prototype.category="Construction"
book3.category="Architecture"
console.log(book3.category)
console.log(book4.category)



