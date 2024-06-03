//Object Datatypes
    //Dynamic Typing
    let x;
    x = 5;
    x = "John";

    //JavaScript Numbers

        //numbers are always double(64-bit floating point)
        //BigInt type is used when value is too big for double
        let y = BigInt("123456789012345678901234567890");

        //supports Exponential Notation
        y = 123e5;

    //Constant Arrays
    const cars = ['say', 'talk']
        //cannnot reassign the array, but can change it values

    cars[0] = "Toyota";    

    //Constant Objects
    const car = {type:"Fiat", model:"500", color:"white"};
        //cannot reassign the obj, but can change or add it values
    
    car.owner = "Johnson"; 
    
    //Type Operators
    `typeof` //used to find the type of a variable
        typeof "John" //returns "string"