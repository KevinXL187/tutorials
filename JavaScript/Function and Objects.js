//Javascript Functions

    //function keyword
    function example(parameter1, parameter2, parameter3){ //functionn arguments are the values received by the function when it is invoke
    
        //code to be executed

        //function return
        return parameter1 * parameter2
    }

    /*function invocation
        when an event occurs (eg. when a user clicks a button)
        when it is invoked (called) from js code
        automatically (self invoked)
    */
        example(5,8,1);

'---------------------------------------------------------------------------------------------------------------------------------------'
//JavaScript Builtin Constructors
    new Object()   // A new Object object
    new Array()    // A new Array object
    new Map()      // A new Map object
    new Set()      // A new Set object
    new Date()     // A new Date object
    new RegExp()   // A new RegExp object
    new Function() // A new Function object

    /*
    use {} instead of new Objects()
    use [] instead of new Array()
    use /()/ instead of new RegExp()
    use () {} instead of new Function()
    */

'---------------------------------------------------------------------------------------------------------------------------------------'

//Javascript Objects

    //all js values except primitivies (string, number, boolean, null, undefined, symbol, bigint) are objects 
    //js objects are very similar to dictonaries in python
    //comma is only used in object literal in relation to objs

    //new keyword
    const person = new Object()

    //creating objects with object literal
    const family = {};

    const son = {
        first_name: "Sam",
        last_name: "Li",
        age: 23,
        gender: male,

        address: {  //nested objects
            street: "123 48st, 11ave",
            city: "new york city",
            state: "New York",
            country: "United States"
        },

        fullname: function(){   //object method
            return this.first_name + " " + this.last_name;
        }
    };

    /* creating references to same object
        const x = person;

        //change age in both
        x.age = 10;
    */

    //adding properties
    family.mother = "Mary";
    family.father = "Tom";
    family.son = son;    //adding nested objects
    family.daughter = "";

    son.address.full_address = function() { //adding method to objects
        return this.street.concat(" ", this.city, " ", this.state, " ", this.country);
    }

    /*deleting properties
        delets both the value of property and the property itself
    */
    delete person.daughter;
    delete person["daughter"];

    //Accessing Object properties
    male_name = family.father;
    female_name = family["mother"];
    city_location = son.address.city;   //accesing nested object properties
    
    //calling object method
    son_name = son.fullname();

'---------------------------------------------------------------------------------------------------------------------------------------'

/* Javascript object constructor
    to create an obj type, we use an obj constructor func
*/

function Person(first, last, age, birth){
    this.first_name = first;
    this.last_name = last;
    this.age = age;
    this.birthdate = birth;
    this.nationality = "English"; //default value

    this.fullname = function(){
        return this.first_name + " " + this.last_name;
    }
}

const mother = new Person("Jane", "Doe", 23, "12/09")

//adding a property to a constructor
Person.prototype.status = "Alive";
Person.prototype.martStatus; //no default value, undefined value

//adding a method to a constructor
Person.prototype.changeName = function (name) {
    this.first_name = name;
}

const father = new Person("John", "Doe", 23, "12/09")
father.changeName("James")
mother.changeName("Mary") //does not work, instance created before adding method to prototype