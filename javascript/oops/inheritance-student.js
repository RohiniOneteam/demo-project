class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    introduce(){
        console.log(`Hello ,my name is ${this.name},my age is ${this.age}`)
    }
}

class Student extends Person{
    constructor(name,age,grade){
        super(name,age)
        this.grade=grade
    }

    study(){
        console.log(`${this.name} is studying in grade ${this.grade}`)
    }

}

let obj1=new Student('John',23,2)
obj1.introduce()
obj1.study()





