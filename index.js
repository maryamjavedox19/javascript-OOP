// encapsulation
// let employee={
//     baseSalary:30_000,
//     overtime:10,
//     rate:20,
//     getwage: function(){
//         return this.baseSalary + (this.overtime * this.rate);
//     }
// };
// employee.getwage();



// const circle={
//     radius:1,    //methods
//     location: {
//         x:1,
//         y:1
//     },
//     draw: function(){      //method
//         console.log('draw');
//     }
// }
// circle.draw();




// factory function
// function createCircle(radius){
//     return{
//        radius,
//        draw:function(){        //method
//        console.log('draw');
//     }
// };
// }
// const circle=createCircle(1);
// circle.draw();



// constructor function
// function Circle(radius){    //first letter capital to assign constructor
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw')  //dont have to use return statement with 'this' keyword
//     }
// }
// const another=new Circle(1);
// Circle1.call({}, 1) ;       //this statement and above statements are same {} is used to specifies target of 'this' keyword
// Circle1.apply({}, [1,2,3]); //same asabove except that second argument is in form of array
// another.draw();



// functons are objects
// const Circle1=new Function('radius', `
// this.radius=radius;
// this.draw=function(){
//     console.log('draw');
// }
// `);
// const circle=new Circle1(1);
// circle.draw();




// primitives are copied by their value
// let x=10;
// let y=x;
// x=20;       //value of y will still be 10 means x and y are independent



// objects are copied by their reference
// let x={value:10};     //this object is stored in somewhere in memory and that memory adress is stored in variable x
// let y=x;
// x.value=20;      //now x and y both will be 20  



// primitives
// let number=10;
// function increase(number){
//     number++;
// }
// increase(number);
// console.log(number);   //output will still be 10 



//by reference
// let obj={value:10};
// function increase(obj){
//     obj.value++;
// }
// increase(obj);
// console.log(obj);   //output will be 11


// we can add and remove properties from objects
// function Circle2(radius){ 
//         this.radius=radius;
//         this.draw=function(){
//             console.log('draw')  
//         }
//     }
//     const circle2=new Circle2(10);

//    adding property
//  circle.location={x:1};
//  circle['location']={x:1};    //when we want to dynamically access the property or when we have special characters in var name

 //deleting prperty
//  delete circle.location;


//  for iterating properties in objects
// for(let key in circle){
//     console.log(key, circle[key]);     //second argument is for methods
// }

// for accessing only properties and not the methods
// for(let key in circle){
//     if(typeof circle[key]!=='function')
//     console.log(key, circle[key]);     //second argument is for methods
// }

// for accessing keys
// const keys=Object.keys(circle);
// console.log(keys);

// to check existence of property or method
// if('radius' in circle){
// console.log('Circle has radius');
// }


//abstraction
// private properties and methods
// function Circle(radius){
//     this.radius=radius;

//     let defaultLocation={x:0, y:0};         //using let instead of this so it would not be accessible to user
//     let computeOptmumLocation=function(factor){
//         // ..
//     }

//     this.draw=function(){
//         computeOptmumLocation(0.1);
//         console.log('draw');
//     };
// }

// const circle=new Circle(10);
// circle.draw();



// function Circle(radius){
//     this.radius=radius;

//     let defaultLocation={x:0, y:0};       
     
//     this.getdefaultLocation=function(){
//         return defaultLocation;
//     };

//     this.draw=function(){
//         console.log('draw');
//     };

    //to only read property and not change
//     Object.defineProperty(this, 'defaultLocation', {
//         get: function(){
//             return defaultLocation;
//         },

//         set: function(value){
//             if(!value.x || !value.y)
//             throw new Error('invalid location.');
//             defaultLocation=value;
//         }
//     });
// }

// const circle=new Circle(10);
// circle.defaultLocation=1;
// circle.draw();


//stop watch
// const sw=new Stopwatch();
//sw.start();
// sw.duration;
//sw.stop();


