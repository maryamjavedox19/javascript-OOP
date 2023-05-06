import { Person } from "./person";

export function promote(){}

export default class Teacher extends Person{         //now we can use person class functions too
    constructor(name, degree){        //in constructor of child class we need constructor of parent class
    super(name);
    this.degree=degree;
    }

    teach(){
        console.log("teach");
    }
}

const teacher=new Teacher('mosh', 'msc');
teacher.walk();