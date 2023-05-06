import Teacher, {promote} from "./teacher";

//DEFAULT->IMPORT ... FROM ' '
//NAMED->IMPORT {...} FROM ' '

//class and constructor
// class Person{
//     constructor(name){
//         this.name=name;
//     }

//     walk(){
//         console.log("walk");
//     }
// }

// const person=new Person('mosh');
// person.walk();



// //INHERITANCE
// class Teacher extends Person{         //now we can use person class functions too
//     constructor(name, degree){        //in constructor of child class we need constructor of parent class
//     super(name);
//     this.degree=degree;
//     }

//     teach(){
//         console.log("teach");
//     }
// }

const teacher=new Teacher('mosh', 'msc');
teacher.teach();