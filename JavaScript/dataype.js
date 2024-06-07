//Primitivae Datatypes
    //Strings - A JS string is zero or more characters written inside quotes
    let text = "john", text1 = 'johnny';

        /*  it is possible to create string objects, but this is usualy not recommended
                let text = new String("John")
            JS has zero indexing
        */

        //String Methods - all string methods produces a new string without altering the original string

            let length = text.length    //returns 4

            let index = text.indexOf('o')   //returns 1, returns the first occurance
            let ltindex = text.lastIndexOf('o') // returns the last occurance
            let index_sp = text.lastIndexOf('o', -2)    //returns 0, the second parameters defines starting postion

            let search_txt = text.search(/o/) //returns 1, searches a string for a string/regular expression
            let match_txt = text.match('o') //returns [o], returns an array containing the results of matching a string against a string/regular expression
            let matchall_text = text.matchAll() //returns an iterator containing the results of matching a string against a string/regular expression

            //2nd parameter is optional and indicates pos to check
            let bool_text = text.includes('a', 2)//returns false 
            let stwt_text = text.startsWith('a')//returns false
            let edwt_text = text.endsWith("n")//returns true

            let char = text.charAt(0);  //returns j,                                        does not allow negative indexing
            let charCode = text.charCodeAt(0);  //returns a UTF-16 code (0~65535), 106      does not allow negative indexing
            let letterArr = text[2] //returns h, read only & strings are immutable          does not allow negative indexing
            let letter = text.at(-2) //returns h

            let slice1 = text.slice(0, 2)   //returns jo
            let slice2 = text.slice(1)  //returns ohn
            let slice3 = text.slice(-2) //returns hn
            let slice4 = text.slice(-3, -2) //returns o

            let substring = text.substring(0, 2) //returns  jo             start and end values less than 0 are treated as 0
            let substr1 = text.substr(0, 2) //returns jo                   difference from slice() is that the second parameter specifies the length of the extracted part

            let text_up = text.toUpperCase()    //retruns JOHN
            let text_down = text.toLowerCase()  //returns john
            let text_con = text.concat(" ", 'doe')  //returns john doe

            let text_trim = text.trim(), text_trims = text.trimStart(), text_trime = text.trimEnd()
            let pad_start = text.padStart(2, "x")   //returns xxjohn
            let pad_end = text.padEnd(2, "x")   //returns johnxx

            let textrpt = text.repeat(2) //returns johnjohn
            let textrpe = text.replace("o", "a") //returns jahn, returns only the first match
            let replaceall = text.replaceall(/o/g, "a")//replace all matchs

            let text_array = text.split("") //returns an array of single characters
        
        //Template Strings - JS string enclosed in backticks
        //  allows multiline strings, string interpolation, embedding expressions, tagged templates, HTML templates and nesting templates
        let texttemp = 
        `john's
        head is rolling
        on the floor`;

        let gas = 10;
        let texttemp2 = `Wecome ${text.toUpperCase()} to the middle of nowhere for the total price of ${gas * 3}`

        //Numeric Strings
        let num1 = "100", num2 = "10", num3 = 10;
        let sum1 = num1/num2; //evaluates to 10, works even with num3
            //applies to all arithmetic operators besides +
            let sum2 = num1 + num2 //evaluates to "10010"

    //JavaScript Numbers
        /*numbers are always double(64-bit floating point)
            it is possible to create num objects, but this is usualy not recommended
            let y = new Number(123)
        */
        let xx = 3.14, xxx = 3; //with or without decimals

        //Integer Precision is up to 15 digits
        //Floating Point Arithmetic is not always 100% accurate
            let xy = 0.2 + 0.1; //evalutaes to 0.30000000000000004

        /*NaN - Not a Number
            NaN is a JS reserved word indicating that a number is not a legal number.
            Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
            NaN type ---> number
        */
        isNaN(x) //used to check if a value is not a number

        /*Infinity / -Infinity
            The value JS will return if you calculate a number outside the alrgest possible number
            and division by zero
            Infinity type ----> number
        */        

        //Hexadecimal - JS interprets numeric constants as exadecimal if they are preceded by 0x
        let hexx = 0xFF; //hexx is 255, type num

        //Number Methods

            //Integer Method Check
            Number.isInteger(10) //returns true
            Number.isInteger(10.5)  //returns false
            Number.isSafeInteger(10)    //returns true
            Number.isSafeInteger(10.5)  //returns false
            Number.isSafeInteger(12345678901234567890)  //returns false

            let numberx = 9.656;
            let numberx1 = numberx.toExponential(6);   //returns 9.656000e+0
            let numberx2 = numberx.toFixed(4); //returns 9.6560
            let numberx3 = numberx.toPrecision(4);   //returns 9.656

            //used to convert a number object to primitive values
            (123).valueOf();    //returns 123
            //used to convert vars to numbers, returns NaN if it can't
            Number("10");   //returns 10
            //parses a string returns the first whole number, space is allowed and returns NaN if it can't
            parseInt("10 20 30")    //returns 10
            //parses a string returns the first number, space is allowed and returns NaN if it can't
            parseFloat("10 20 30")  //returns 10
        
        //Number Properties
            let esp = Number.EPSILON    //the difference between the smallest floating point number greater than 1 and 
            let maxVal = Number.MAX_VALUE   //a constant representing the largest possible number in JS
            let minVal = Number.MIN_VALUE   //a constant representing the lowest possible number in JS
            let maxSVal = Number.MAX_SAFE_INTEGER   //represents the maximum safe integer in JS
            let minSVal = Number.MIN_SAFE_INTEGER   //represents the minimum safe integer in JS
            let posInf = Number.POSITIVE_INFINITY
            let negInf = Number.NEGATIVE_INFINITY
            let nonVal = Number.NaN

    /*BigInt type is used when value is too big for double
        operators that is used on num can also be used on a BigInt
            * arithmetic between a BigInt and a Number is not allowed (type conversion lose information)
            * Unsigned right shift (>>>) can not be done on BigInt (does not have a fixed width)
            * does not have decimals
            * can be written in hexadecimal, octal, or binary notation (0x, 0o, 0b)

        bigint type ----> bigint
    */
        let y = BigInt("123456789012345678901234567890");

    //supports Exponential Notation
        y = 123e5;
    
//Object Datatypes
    //Dynamic Typing
    let x;
    x = 5;
    x = "John";

    //Constant Arrays
    const cars = ['say', 'talk']
        //cannnot reassign the array, but can change it values

    cars[0] = "Toyota";    

    //Constant Objects
    const car = {type:"Fiat", model:"500", color:"white"};
        //cannot reassign the obj, but can change or add it values
    
    car.owner = "Johnson"; 
