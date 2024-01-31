console.log('Hello, world')

// Declaring Variables
    const SIZE = 1000 // stands for constant makes the variable immutable
    let myVar = 10 // is a mutable object and are allowed to change it
    // The difference between const and let is mutability 
    myVar = 11
    var c; // DONT USE: can lead to some weird issues when writing modern javaScript
    console.log(myVar)

// Primitive Types
    //Number // number includes integer, floats
    //BigInt // used for scientific programs 
    //String
    //undefined // no value whatsoever, it hasn't been allocated (Try to avoid)
    //null // has been allocated but simply means there is no value

// Reference Types
    //arrays
    const myArray = [
        0, 1, 2, 'string'
    ]
    console.log(myArray[0])
    console.log(myArray[10]) // no out of bounds exception: will just display undefined
    console.log(myArray.length) // length of array

    // json(JavaScript Object Notation) objects 
    const myObject = {
        myKey: "myvalue",
        'myKey*': "myvalue2"
    }
    console.log(myObject.myKey)
    console.log(myObject['myKey*'])
    console.log(myObject.myKey2) //if it doesn't exsists then it will display undefined

// Truthy and falsy values (and a few javascript quirks)



// Function declarations