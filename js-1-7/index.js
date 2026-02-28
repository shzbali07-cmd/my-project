
// alert name code here
const AlertName=()=>{
document.getElementById("btn-alert")
   alert("welcome ")
 let statment="alert('welcome')"
 document.getElementById("statment").innerHTML=statment
   document.getElementById("output").innerText=""
}
// alert number
const AlertNumber=()=>{
document.getElementById("btn-alertNumber")
   alert("123")
 let statment="alert('123')"
 document.getElementById("statment").innerHTML=statment
   document.getElementById("output").innerText=""
}

// show variablename code here
const variableName=()=>{
document.getElementById("btn-variable")
   let html="<ul><li> A variable name can't contain any spaces<ul/><li/>."
 document.getElementById("statment").innerHTML=html
   document.getElementById("output").innerText=""
}

// camelcase code here past here
const camelCase=()=>{
document.getElementById("btn-camelCase")
   let html="noorZaman"
 document.getElementById("statment").innerHTML=html
   document.getElementById("output").innerText=""
}

// sum number code is here 
const sumNumber=()=>{
document.getElementById("btn-sum")
let num1=7
let num2=5
let ans=num1+num2 
 document.getElementById("statment").innerHTML=`${num1}+${num2}`
   document.getElementById("output").innerText=ans
}

// subsctract 2 number code here

const subsctractNumber=()=>{
document.getElementById("btn-subsctract")
let num1=7
let num2=5
let ans=num1-num2


 document.getElementById("statment").innerHTML=`${num1}-${num2}`
   document.getElementById("output").innerText=ans
}

// multiply number code here
const multiplyNumber=()=>{
document.getElementById("btn-multiply")
let num1=7
let num2=5
let ans=num1*num2


 document.getElementById("statment").innerHTML=`${num1}*${num2}`
   document.getElementById("output").innerText=ans
}

// divide number code here 
const divideNumber=()=>{
document.getElementById("btn-divide")
let num1=7
let num2=5
let ans=num1/num2


 document.getElementById("statment").innerHTML=`${num1}/${num2}`
   document.getElementById("output").innerText=ans
}

// calculate some number here

const calculate=()=>{
document.getElementById("btn-calculate")
let num1=40/4+10*2**4-(10*5)



 document.getElementById("statment").innerHTML="40/4+10*2**4-(10*5)"
   document.getElementById("output").innerText=num1
}


// clear statment button code here
const clearStatment=()=>{
    document.getElementById("statment")
    document.getElementById("statment").innerHTML=""
}

// clear output code here
const clearOutput=()=>{
    document.getElementById("clearoutput")
    document.getElementById("output").innerHTML=""
}




