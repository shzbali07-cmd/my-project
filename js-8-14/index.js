
// concatenation strings code here
const concatenations=()=>{
    let message=" welcome"
    let name2=" zaman"
    let mark="!"
    let ans=message+" "+name2+mark
    alert(message+" "+name2+mark)
    document.getElementById("output").innerHTML=ans
    document.getElementById("statment").innerHTML="Welcome+zaman+!"

}

// ask user name code here
const askName=()=>{
    let enterName=prompt("Enter your name")
    alert(enterName+"Good evening")
    document.getElementById("output").innerHTML="<p class='text-center'>Good moring "+ enterName+"</p>"
     document.getElementById("statment").innerHTML="<p class='text-center'>Good moring " +enterName+"</p>"
     
}
// comperision operator code here
const operators=()=>{
    let enterName=prompt("Enter your name")
    // alert(enterName+"Good evening")
    if(enterName==="noor"){
        console.log("true")
        document.getElementById("output").innerHTML="<p class='text-center'>Good moring "+ enterName+"</p>"
     document.getElementById("statment").innerHTML="<p class='text-center'>Good moring " +enterName+"</p>"
    }else{
        console.log("false")
        document.getElementById("output").innerHTML="Please enter correct value"
     document.getElementById("statment").innerHTML="Please enter correct value"
    }
}

// if eise if code paste here
const ifelse=()=>{
    let num1=+prompt("Enter your number")
    
    if(num1<=10){
        console.log("you are child")
         document.getElementById("output").innerHTML="you are child"
     document.getElementById("statment").innerHTML="you are child"
    }else if(num1>=15 && num1<=40){
        console.log("you are young")
         document.getElementById("output").innerHTML="you are young"
     document.getElementById("statment").innerHTML="you are young"
    }else{
        console.log("Not eligible")
         document.getElementById("output").innerHTML="Not eligible"
     document.getElementById("statment").innerHTML="Not eligible"
    }
}

// testing condions sets code here
const testing=()=>{
    let age=+prompt("Enter your age")
    let weight=+prompt("Enter your weight")
    
    if(age<=15 && weight<=30){
        alert("you are baby")
         document.getElementById("output").innerHTML="alert('you are baby')"
     document.getElementById("statment").innerHTML="alert('you are baby')"
    }else if(age<=20 && age <=40&& weight<=70 && weight>=31){
        alert("you are young")
         document.getElementById("output").innerHTML="alert('you are young')"
     document.getElementById("statment").innerHTML="alert('you are young')"
    }else{
        alert("you are old")
         document.getElementById("output").innerHTML="alert('you are old')"
     document.getElementById("statment").innerHTML="alert('you are old')"
    }
}

// if statment nested condions sets code here
const nested=()=>{
    let age=+prompt("Enter your age")
    let weight=+prompt("Enter your weight")
    
    if(age<=19 && weight<=30){
        alert("you are baby")
         document.getElementById("output").innerHTML="alert('you are baby')"
     document.getElementById("statment").innerHTML="alert('you are baby')"
    }else if(age=>20 && age <=40&& weight<=70 && weight>=31){
        alert("you are young")
         document.getElementById("output").innerHTML="alert('you are young')"
     document.getElementById("statment").innerHTML="alert('you are young')"
    }else{
        alert("you are old")
         document.getElementById("output").innerHTML="alert('you are old')"
     document.getElementById("statment").innerHTML="alert('you are old')"
    }
}

// login code here ########

const login=()=>{
    let firstName=prompt("Enter your name")
    let Password=prompt("Enter your password")
    if(firstName==="noor" && Password==="1234"){
        alert("you are login")
         document.getElementById("output").innerHTML="alert('you are login')"
     document.getElementById("statment").innerHTML="alert('you are login')"
    }else{
        alert("invaild name or password")
         document.getElementById("output").innerHTML="alert('invaild name and password')"
     document.getElementById("statment").innerHTML="alert('invaild name and password')"
    }
}
// clear statment button code here
const clearStatment=()=>{
     document.getElementById("statment").innerHTML=""
}

// clear output code here
const clearOutput=()=>{
     document.getElementById("output").innerHTML=""
}




