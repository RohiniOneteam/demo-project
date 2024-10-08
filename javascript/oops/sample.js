class Person{
    constructor(){
        console.log("happy coding")
    }
   

    display(name,age){
        this.name=name
        this.age=age
        console.log('hello my name is  :',this.name,"\n","my age is :",this.age)
    }
}


let obj1=new Person()
obj1.display("janu",89)