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
        this.available =false;
        return `${this.title} has been borrowed;`
    }
    return `Sorry you cannot borrowed ${this.title}, this book is not available `
};

Book.prortotype.returnBook= function(){
    this.available=True
    return `You have returned ${this.title} `;
}

Book.prototype.displayInfo= function (){
    if (this.available= true){
          return `${this.title} by ${this.author} is Available`;
    }

    return  `${this.title} by ${this.author} is NOT Available`;
  
}

//Create objects 

book1=new Book("Design Patterns","Don Norman",true);
book2=new Book("Le design","Stephan Vial", true);









