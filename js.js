/**
 * Learn the syntax  - Vocabulary
 * 
 * With whom to talk  -  Browser, Server...
 * 
 * What to talk about
 */



/** 1 - Learn the syntax  - Vocabulary */

/** Variables and Data types - What */


// Type        Declaration          Assign                   Value

var             name                   =                     "Moha";
let             age                    =                      2234 ;
const           c_name                 =                     "Constant";


/// Types of the value => Data types   

let _str = "String";                /// String

let _numb = 11253612;               /// Number

let _tf = true ;                    /// Boolean ( true , false )

let _arr = [];                      /// Object of type array
let _obj = {};                      /// Object of type object

let _null = null ;                  /// Null
let _undefined ;        /// undefined


/** Skip them for now */
    const x = BigInt(Number.MAX_SAFE_INTEGER);     /// BigInt

    const sym2 = Symbol('foo');                    /// Symbole







/** String */
    let str = "String";  
        str = new String("String");

    /// Properities
        str.length
    /// Methods
        str.replace();

    /// REF : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


/** Number */
let numb        = 11;
    numb        =  Number(11);
    numb        =  Number("11");
    /// Properities
        Number.EPSILON
    /// Methods
        numb.toFixed()
        Number.isInteger( numb );

    /// REF : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number


/** Array */

let arr = [];
    arr = new Array(10);
    /// Properities
        arr.length
    /// Methods
        arr.forEach();

    /// REF : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

    /// Get an element by index
        arr = ["moha", 555, true, null ]
        arr[0]; // The first element - "moha"
        arr[1]; // The second element - 555
        arr[2]; // The third element - true
        arr[3]; // The fourth element - null
        arr[4]; // The fifth element - undefined
    /// Updtae & Set elmenet
        arr[0] = "Marcus";          /// Updated "Moha" => "Marcu"
        arr[1] = "Me";              /// Updated 555=> "Me"
        arr[2] = null;              /// Updated ture => null
        arr[3] = 111;               /// Updated null => 111
        arr[4] = "A new value";     /// A new value
        /// ["Marcus", "Me", null, null, "A new value" ]
        arr[10] = "Atr" , 14123;



/** Objects */

let obj = {};
    obj = new Constructor();   /// From a constructor function;

    /// Properities
        obj.constructor   // Predefined
    /// Methods
        obj.hasOwnProperty();

        Object.entries( obj );  /// Using the global Object

    /// REF : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

    obj = {
        "my name": "Moha",
        "age": 123,
        arr  : [],
        obj1 : {},
        func : function(){},
        toVar: ["Ma", 891823]
    }

    // Get element
        obj.age;
        obj["my name"];
    /// Update Element
        obj.age = 14124;
    /// Create new element
        obj.newElement = "I am new!";


/** Function - What to do ? */
    /// Defination
        /// Do not return anythong.
            function myFun(  param1, param2 )
            {
                ///  Do something...
            }
        /// Return a string
            function myFun()
            {
                ///  Do something... 
                let perem ="A string value";
                return perem;
            }

        /// Return a number
            function myFun()
            {
                ///  Do something...
                return 21212;
            }
        /// Return a array
            function myFun()
            {
                ///  Do something...
                return [12, "adsad"]
            }
        /// Return a object
            function myFun()
            {
                ///  Do something...
                return {
                    "prop1": "value1",
                    prop2 : 253423
                }
            }

    /// Execution
        myFun(343, 676);


/** 2 - With whom to talk - Browser , Server */


/** 3 - What to talk about - API ( application programming interface ) */
    /// Create a div ?
    /// Make an Image bigger ?
    /// Change the styling ?
    /// Send request to the server ?
console.log("LOG");
document.createElement();


