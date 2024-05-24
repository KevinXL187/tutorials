// JavaScript Keywords

    //declaring variables
    var x; 
    let y;  //block scope
    const pi = 3.14; //block scope

    let z = x + y;
    let qwerty = 98, huisa = 100;

    //const is used, when the value should to be changed and must always be assigned a value when decalred
    //const is also used when the type should not be changed (Arrays and Objects)

    //hositing
    //var: Variables declared with var are hoisted to the top of their scope and initialized with undefined
    //let: Variables declared with let are hoisted to the top of their block, but are not initialized.

    //Unless intended for legacy codebases or for specific cases where hoisting behavior is desired, var is generally not used in modern cases

    $ //Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.
    _lastname //Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables

//

// JavaScript Operators
    // JavaScript Arithmetic
        let x = "5" + 2 + 3
        //x results in "523"

        let x = 2 + 3 + "5"
        //x results in "55"

        //has mostly the same arithmetic operators as python
        
    // JavaScript Comparison
        '==' //equal to
        '!=' //not equal


        '===' //equal value and equal type
            5 === '5' //False
            5 === 5 //True
        
        '!==' // not equal value and not equal type
            5 !== '5' //True
            5 !== 5 //False    

        //has mostly the same comparison operators as python

// JavaScipt Scope
/*
    block scope - only aviable inside {...}
    function scope - only aviable inside a function
*/