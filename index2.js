//! CS4011: Week 2

//? Higher Order Functions: Map ------------------------------------------------------------------
    
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
                    department: ['Comp Science']
                }, 
                {
                    name: 'Jer',
                    title: 'Chair',
                    salary: 2000000,
                    department: ['Computer Science']
                },
                {
                    name: 'Nate',
                    title: 'Intern',
                    salary: 100000,
                    department: ['Computer', 'Sci']
                }
            ]

            const getTitle = (employee) => {
                return employee.title
            }

            const titles = employees.map(getTitle)
            console.log(titles)

            const getDepartment = (employee) => {
                return employee.department
            }

            //~ Flat Map use with arrays
            const departments = employees.flatMap(getDepartment)
            console.log(departments)


    //* filter ---------------------------------------------------------------------------------------



    //* find -----------------------------------------------------------------------------------------



    //* findIndex ------------------------------------------------------------------------------------



    //* some -----------------------------------------------------------------------------------------



    //* every ----------------------------------------------------------------------------------------



    //* sort -----------------------------------------------------------------------------------------



    //* reduce ---------------------------------------------------------------------------------------