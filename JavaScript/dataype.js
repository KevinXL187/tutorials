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
    //  allows multiline strings, string interpolation, embedding expressions, tagged templates, and nesting templates
    let texttemp = 
    `john's
    head is rolling
    on the floor`;

    let gas = 10;
    let texttemp2 = `Wecome ${text} to the middle of nowhere for the total price of ${gas * 3}`

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