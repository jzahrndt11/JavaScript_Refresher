//! CS4011 - Week 1

console.log('Hello, world')

//* Declaring Variables -----------------------------------------------------------------------------
    const SIZE = 1000 // stands for constant makes the variable immutable
    let myVar = 10 // is a mutable object and are allowed to change it
    // The difference between const and let is mutability 
    myVar = 11
    var c; // DONT USE: can lead to some weird issues when writing modern javaScript
    console.log(myVar)

//* Primitive Types ---------------------------------------------------------------------------------
    //~ Number - number includes integer, floats
    //~ BigInt - used for scientific programs 
    //~ String
    //~ undefined - no value whatsoever, it hasn't been allocated (Try to avoid)
    //~ null - has been allocated but simply means there is no value

//* Reference Types ----------------------------------------------------------------------------------
    //~ arrays
    const myArray = [
        0, 1, 2, 'string'
    ]
    console.log(myArray[0])
    console.log(myArray[10]) // no out of bounds exception: will just display undefined
    console.log(myArray.length) // length of array

    //~ json(JavaScript Object Notation) objects - like a dict in python 
    const myObject = {
        myKey: "myvalue",
        'myKey*': "myvalue2",
        nestedObject: {
            myKey: 'myNestedValue'
        }
    }
    console.log(myObject)
    console.log(myObject.myKey)
    console.log(myObject['myKey*'])
    console.log(myObject.myKey2) //if it doesn't exsists then it will display undefined
    console.log(myObject.nestedObject.myKey)

//* Truthy and falsy values (and a few javascript quirks) --------------------------------------------
    false
    0
    ''
    undefined // lack of value no memory allocated
    null // its in memory but there is nothing in the value

    console.log(Boolean(0))

    /*
        ~ try {
        ~    console.log(myObject.nestedObject.myKey)
        ~ } catch {
        ~    console.log('Not Found')
        ~ }

        or

        console.log(myObject.nestedObject?.myKey || 'Not Found')
        console.log(myObject.nestedObject.myKey || 'Not Found')
        console.log(myObject.nestedObject.myKey ?? 'Not Found')

    */


//* Function declarations -----------------------------------------------------------------------------
        //~ Old way
            function myFunc(myParam, myOtherParam) {
                console.log(myParam)
                console.log(myOtherParam)
                return myParam + 5
            }

            console.log(myFunc(5))


        //~ New way
            const add = (num1, num2) => {
                return num1 + num2
            }
            //or
                const add2 = (num1, num2) => num1 + num2
            console.log(add(1, 2))
            console.log(add2(1, 2))


        //~ Higher-Ordered Function
            const superAdd = (addFunction) => {
                const result = addFunction(1, 2)
                return result + 4
            }
            console.log(superAdd(add))

            const myAddFunction = () => add(1, 2)
            console.log(myAddFunction())


//* Comparing Value -----------------------------------------------------------------------------------
        // Comparing only value - Ingnores type (==)
            if (1 == 1) {
                console.log('Yay') // True
            }
            if ('1' == 1) {
                console.log('Yay') // True
            }

        // Comparing the value and type (===)
        if ('1' === 1) {
            console.log('Yay') // False - will not display
        }

        
        // Everywhere you do comparisons, use 3 equal signs(===) 
        

//* Ternaries -----------------------------------------------------------------------------------------
    /*
        - Shorthand for an if-else statement
    */

    const color = 'red'

    // Not a case for ternary
        if (color === 'red') {
            console.log('This is red')
        } else if (color === 'blue'){
            console.log('This is blue')
        } else {
            console.log('This is not red')
        }

    // Case for a ternary
        if (color === 'red') {
            console.log('This is red')
        } else {
            console.log('This is not red')
        }

    // Ternary Syntax:  comparator ? ifTrue : ifFalse
        color === 'red' ? console.log('This is red') : console.log('This is not red')

        const message = color === 'red' ? 'This is red' : 'This is not red'
        console.log(message)


//* Spread Operator (...) ------------------------------------------------------------------------------------
    /*
        You would use the spread operator to copy all the values that are in an 
        array or an object
    */

    const myArray2 = [ 1, 2, 3, 4 ]
    const myArray3 = [ 1, 2, 3, 4 ]

    // Could use push but mutation is bad
        myArray2.push(5) // shows how const is not perfect because it become mutable
        console.log(myArray2)

    // Make new array instead, so we dont have to do mutations
        const myNewArray = [
            ...myArray3,
            5,
            6
        ]
        console.log(myNewArray)

    // Works with objects as well
    const employee = {
        name: 'Mike',
        title: 'Professor'
    }
    
    // can mutate new key and value but better to create new dict with spread operator
        employee.location = 'St. Louis'
        console.log(employee)

    // new Dict with Spread Operator and new key and value
        const newEmployee = {
            ...employee,
            location: 'St. Louis'
        }
        console.log(newEmployee)
