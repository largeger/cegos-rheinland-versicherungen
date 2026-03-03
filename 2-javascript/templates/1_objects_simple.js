// Try this in your browsers dev-tools console

// let creates a variable, but has no type

// Objects without a class
let myObject = {
    sth: 42,
    sthElse: "Hello!"
};

// Two ways of accessing it
console.log(myObject.sth);
console.log(myObject["sthElse"]);

// Can be changed during runtime (also new field added)
myObject.newStuff = 1234.567;
console.log(myObject.newStuff);

// and deleted
delete myObject.newStuff;
// Access propertiy which does not exist
console.log(myObject.newStuff); //undefined - no error!

// Error only occurs if you want to do something with that property
// Think: Every object has all attributes, but most of them are undefined
// myObject.newStuff.sth;  // now there's an error!

// You can nest objects
let joker = {
    name: "Joker",
    adress: {
        city: "Queens",
        postcode: 83362
    }
};
// And chain property access
console.log(joker.adress.postcode);
