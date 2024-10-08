const animal={
    eats:true,
    walk(){
        console.log("Animal is walking")

    }
}

const rabbit={
    jumbs:true,
    display(){
        console.log("i am rabbit")

    }
}

rabbit.__proto__=animal


console.log(rabbit.eats)
rabbit.walk()
rabbit.display()