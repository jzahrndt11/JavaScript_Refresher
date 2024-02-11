//! CS4011: Week 2
const uniq = require('lodash/uniq')

//? Higher Order Functions: Map -------------------------------------------------------------------------------------------------------
    
    //* for ------------------------------------------------------------------------------------------
        const numbers = [ 2, 4, 5, 7, 1, 4, 52, 26 ]
        let numbersX2 = []
        
        for (let x = 0; x < numbers.length; x++) {
            const currentNum = numbers[x]
            const x2 = currentNum * 2
            numbersX2.push(x2)
        }
        
        console.log(numbersX2)

    //* forEach --------------------------------------------------------------------------------------
        let numberX3 = []
        let numberX4 = []

        const multiplyBy2AndPush = (number) => {
            numberX3.push(number * 2)
        }

        //? or 

        const multiplyBy2AndPush2 = (number) => numberX4.push(number * 2)

        numbers.forEach(multiplyBy2AndPush)
        numbers.forEach(multiplyBy2AndPush2)

        console.log(numberX3)
        console.log(numberX4)




    //* map ------------------------------------------------------------------------------------------
        /*
         ?   The difference between map and for each is map has a return type
         ?   While for each has no return type 
        */

         //? Mapping without index
         const multiplyBy3 = (number) => {
            return number * 3
         }
            //~  const multiplyBy3 = (number) => number * 3

            const numberX5 = numbers.map(multiplyBy3)
            console.log(numberX5)

        //? Mapping with index
         const multiplyBy4 = (number, index) => {
            console.log(index)
            return number * 4
         }
        

            const numberX6 = numbers.map(multiplyBy4)
            console.log(numberX6)

        //* Mapping with Objects
            const employees = [
                {
                    name: 'Mike',
                    title: 'Professor',
                    salary: 1000000,
                    department: ['Comp Science'],
                    yearsExperience: 7
                }, 
                {
                    name: 'Jer',
                    title: 'Chair',
                    salary: 2000000,
                    department: ['Computer Science'],
                    yearsExperience: 5
                },
                {
                    name: 'Nate',
                    title: 'Professor',
                    salary: 100000,
                    department: ['Computer', 'Sci'],
                    yearsExperience: 10
                },
                {
                    name: 'Trump',
                    title: 'President',
                    salary: 1000000000000,
                    department: ['Computer', 'Sci'],
                    yearsExperience: 4
                }
            ]

            const getTitle = (employee) => employee.title
            

            const titles = employees.map(getTitle)
            console.log(titles)

            const getDepartment = (employee) => {
                return employee.department
            }

            //~ Flat Map use with arrays
            const departments = employees.flatMap(getDepartment)
            console.log(departments)


    //* filter ---------------------------------------------------------------------------------------
        /*
         ?  filter:
         ?      If results of input function is true:
         ?          it will include it it in the final array
         ?      If it is false:
         ?          it will not include it
        */

         const isChair = (employee) => {
            return employee.title === 'Chair'
         }

         const getName = (employee) => employee.name

         const chairs = employees.filter(isChair)
         const chairName = employees.filter(isChair).map(getName)
         console.log(chairs)
         console.log(chairName)

    //* find -----------------------------------------------------------------------------------------

        /*
         ?  find: 
         ?      - will always return either one item or 
         ?          it will return undefinded if it can't find anything
        */

         const isProfessor = (employee) => {
            return employee.title === 'Professor'
         }

        /*
         ~  Since there is 2 professors in array, the order matters. The first
         ~      one will pass the test. Therefore, that is the only one its going 
         ~      to return.
        */
         const aProfessor = employees.find(isProfessor)
         console.log(aProfessor)

    //* findIndex ------------------------------------------------------------------------------------
         /*
         ?  findIndex: 
         ?      - Is similar to find except instead of returning the actual value, it
         ?          returns the index of the value that is found
        */
        
        const bProfessor = employees.findIndex(isProfessor)
        console.log(bProfessor) //! -1 if false; if true it will return the index

    //* some -----------------------------------------------------------------------------------------
         /*
         ?  some and every:
         ?      - In both of them, they are going to take functions that return a Boolean,
         ?          just like filter and find
         ?  some:
         ?      - If at least one of them is true, it will return true 
         ?      - If all of them are false, it will return false        
         */

         const nums1 = [ 1, 3, 5, 7 ]
         const nums2 = [ 2, 4, 6, 8 ]
         const nums3 = [ 1, 4, 5, 8 ]

         const isOdd = (number) => {
            return number % 2 !== 0
         }

         const hasOddNumber = nums1.some(isOdd)
         console.log(hasOddNumber) //~ return true because all odd

         const hasOddNumber2 = nums2.some(isOdd)
         console.log(hasOddNumber2) //~ return false because all even

         const hasOddNumber3 = nums3.some(isOdd)
         console.log(hasOddNumber3) //~ return true because at least one is odd

    //* every ----------------------------------------------------------------------------------------
        /*
         ?  every:
         ?      - If all of them are true, it will return true 
         ?      - If one of them is false, it will return false
        */

         const isOddNumber = nums1.every(isOdd)
         console.log(isOddNumber) //~ return true because all odd

         const isOddNumber2 = nums2.every(isOdd)
         console.log(isOddNumber2) //~ return false because all even

         const isOddNumber3 = nums3.every(isOdd)
         console.log(isOddNumber3) //~ return false because at least one is odd


    //* sort -----------------------------------------------------------------------------------------
         /*
         ?  sort:
         ?      - we don't have to write our own sort functions
         ?      - sort by itself without a parameter will just by default infer what
         ?          the type is and sort it out
        */
         
         const letters = [ 'a', 'z', 'e', 'f' ]
         const nums = [ 7, 3, 5, 1 ]

         //~ sort numbers
         const sortedNums = nums.sort()
         console.log(sortedNums)

         //~ reverse sort
         const reverseSort = nums.sort((a, b) => {
            return b - a
         })
         console.log(reverseSort)

         //~ sort letters
         const sortedLetters = letters.sort()
         console.log(sortedLetters)


         const sortByTitle = (employeeA, employeeB) => {
            const titleA = employeeA.title
            const titleB = employeeB.title

            const valueMap = {
                President: 5,
                Chair: 2,
                Professor: 1
            }

            const valueDiff = valueMap[titleB] - valueMap[titleA]

            if (valueDiff === 0) {
                return employeeB.yearsExperience - employeeA.yearsExperience
            }

            return valueDiff
         }

         const employeeSortedByTitle = employees.sort(sortByTitle)
         console.log(employeeSortedByTitle)


    //* reduce ---------------------------------------------------------------------------------------
        
        /*
         ?  reduce:
         ?      - Takes an array of values and reduce it to some single value(sum)
         ?      - So we can do things like grabbing the sime of all the parts of an array
        */

        const numbers2 = [ 1, 2, 3, 4 ]

        //! Example 1: We are going to use reduce to get the sum of all the numbers in numbers2[]
            /*
             ?  acc = accumulator: The accumulated value as it is going through
             ?                  - It is going to be the last value or the return value from the last iteration
             ?                  - Or it going to be the staring value
             ?  current = current number it is looking at in this case either 1, 2, 3, or 4
             ?  index = index of current number (Not worried about in this example)
            */
            const addToAcc = (acc, current) => {
                return acc + current
            }

        
            const sum = numbers2.reduce(addToAcc, 0)
            console.log(sum) //~ (0 + 1) = 1 => (1 + 2) = 3 => (3 + 3) = 6 => (6 + 4) = Displays 10

        
        //! Example 2: How much profit potential do we have?

            const inventory = [
                {
                    type: 'Montior',
                    brand: 'Lenovo',
                    listPrice: 1000,        //?     (listPrice - wholeSale) * stock
                    wholesale: 400,         //!         (1000 - 400) * 5 = 3000
                    stock: 5,
                },
                {
                    type: 'Montior',
                    brand: 'Dell',
                    listPrice: 1200,        //!         (1200 - 700) * 3 = 1500
                    wholesale: 700,
                    stock: 3,
                },
                {
                    type: 'iPhone 13',
                    brand: 'Apple',
                    listPrice: 1100,        //!         (1100 - 1000) * 14 = 1400
                    wholesale: 1000,
                    stock: 14,
                },
                {
                    type: 'Macbook Pro',
                    brand: 'Apple',
                    listPrice: 3000,        //!         Added afterwards
                    wholesale: 2800,
                    stock: 14,
                },
                {
                    type: 'Laptop',
                    brand: 'Asus',
                    listPrice: 2300,        //!         (2300 - 2000) * 4 = 1200
                    wholesale: 2000,
                    stock: 4,
                },
            ]                               //!         3000 + 1500 + 1400 + 1200 = Total Profit: $7100

            //? Solving the Proble using reduce

                //^ Setting up acc for reduce function for potential profit function
                const getPotentialProfit = (acc, item) => {
                    const profitPerItem = item.listPrice - item.wholesale
                    const totalProfit = profitPerItem * item.stock
                    return totalProfit + acc
                }

                //^ Potential profit function using reduce
                const totalInStorePotentialProfit = inventory.reduce(getPotentialProfit, 0)
                console.log(totalInStorePotentialProfit) //!  Total Profit: $7100 

            //? Getting Profit for only Apple products

                const isApple = (inventory) => {
                    return inventory.brand === 'Apple'
                }

                const appleOnlyInStoreProfit = inventory.filter(isApple).reduce(getPotentialProfit, 0)
                const inClassCode = inventory.filter(item => item.brand === 'Apple').reduce(getPotentialProfit, 0)

                console.log(appleOnlyInStoreProfit)
                console.log(inClassCode)


        //! Example 2: How much profit potential do we have for each brand?

            //? Create a list of each brand name using lodash uniq must include dependency
                const brands = uniq(inventory.map(item => item.brand))
                console.log(brands)


            //? If you are only using one input paremater you don't need the parentheses and can write function like this
                const brandProfitPotential = brands.map(brand => {
                    //^ Filter out anything thats not the current brand we are looking at
                    const itemsOfBrand = inventory.filter(item => item.brand === brand)
                    //console.log(brand, itemsOfBrand)
                    const totalProfitPotentialForBrand = itemsOfBrand.reduce(getPotentialProfit, 0)
                    return totalProfitPotentialForBrand
                })
                console.log(brandProfitPotential)

                //? The acc will be an object instead of a single value
                const brandProfitMap = brands.reduce((acc, brand) => {
                    const itemsOfBrand = inventory.filter(item => item.brand === brand)
                    const totalProfitPotentialForBrand = itemsOfBrand.reduce(getPotentialProfit, 0)
 
                    return {
                        ...acc, // Spread out the accumaltor the object that keeps getting added to
                        [brand]: totalProfitPotentialForBrand // add brand and total profit potential
                    }
                }, {}) // {} => starting this function with an empty object

                console.log(brandProfitMap)

            
    //* Higher Order Functions Documentation
    /*
     ?  Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/MapLinks 

     ?  Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filterLinks 

     ?  Find: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLinks 

     ?  FindIndex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndexLinks 

     ?  Some: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/someLinks 

     ?  Every: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/everyLinks 

     ?  Sort: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sortLinks 

     ?  Reduce  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceLinks 
    */

