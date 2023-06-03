/*
1. execution context.
    - যখন কোন যে এস ফাইল রান হয় তখন একটি ঘটনা ঘটে। এই ঘটনাকে exicution context bole.

        1/ parts of js execution context:
            a. memory component;
                - memory hishebe function or var keyword khuje.
            b. code component;

        2/ phases of js execution context:
            a. creation phase;
            b. execution phase;
2. call stack + local execution context.
3. Hoisting
	function statement,
	function declaration,
	anonymous function,
	named function expression,
	parameter vs arguments,
	first class function,
	arrow function,
	callback function.
*/

// person
// story - local execution context create hobe.

// (),
// parameter - shimana

// first class function
// 1st law : jodi kono function parameter e onno ekti function k recieve kore tobe take first class function bole.
// or
// 2nd law: jodi kono function k call dile she onno ekti function k return kore tobe take first class function bole.

// function print(cb) {
//     console.log(cb);
// }

// print(sum);

// function sum() {
//     var a = 10;
//     var b = 20;

//     var c = a + b;

//     console.log(c);
// }

/*
    function print(cb) {
        console.log(cb);
    }(
        function sum() {
        var a = 10;
        var b = 20;

        var c = a + b;

        console.log(c);
    }
    );
*/

// function print() {
//     function callback() {
//         console.log(10);
//     }
//     return callback;
// }

// var x = print();

// console.log(x);

/*
reference error:
    a() ; there is nothing called a in here. 
type error: 
    var a = 20;
    a(); // this is a type error.
    
*/

(function () {
    console.log(10);
})();
