number=parseInt(prompt("enter the number"))

if (number>0){
    document.write("this is positive number","<br>")
    if (number%2==0){
        document.write("even","<br>")
    }
    else{
        document.write("odd","<br>")
    }
}


else if(number<0){
    document.write("this is nagative number","<br>")

    if(number%2==0){
        document.write("even","<br>")
    }

    else{
        document.write("odd","<br>")
    }

}

else{
    document.write("the number is zero")
}