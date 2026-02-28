"use strict"

// round a number here
function roundNumber(){
    let value=document.getElementById("input").value
    if(value === "" || Number(value) <= 0){
        document.getElementById("out").innerText="Please enter your number"
        return
    }
    document.getElementById("oNumber").innerText=value
    let rounded=Math.round(Number(value))
    document.getElementById("out").innerText=rounded



    }

    // clear a output here
    function clearInput(){
        document.getElementById("input").value=""
        document.getElementById("oNumber").innerText=""
        document.getElementById("out").innerText=""
    } 
    
    // ceil a number here
    const ceil=()=>{
        let value=document.getElementById("input").value
        if(value === "" || Number(value) <= 0){
            document.getElementById("out").innerText="Please enter your number"
            return
        }
        document.getElementById("oNumber").innerText=value
        let ceiled=Math.ceil(Number(value))
        document.getElementById("out").innerText=ceiled
    }
// floor code oaste here
const floor=()=>{
    let value=document.getElementById("input").value
    if(value === "" || Number(value) <= 0){
        document.getElementById("out").innerText="Please enter your number"
    }
    document.getElementById("oNumber").innerText=value
    let floored=Math.floor(Number(value))
    document.getElementById("out").innerText=floored
    
    
}
// generate a randoum number
const random=()=>{
    let value=document.getElementById("input").value
    if(value === "" || Number(value) <= 0){
        document.getElementById("out").innerText="Please enter your number"
    }
    document.getElementById("oNumber").innerText=value
    let randomed=Math.random(Number(value))
    document.getElementById("out").innerText=randomed
    
    
}
// throw a dies###########
const dies=()=>{
    let value=document.getElementById("input").value
    if(value === "" || Number(value) <= 0){
        document.getElementById("out").innerText="Please enter your number"
    }
    document.getElementById("oNumber").innerText=value
    let diesed=Math.floor(Math.random()*(Number(value)))+1;
    document.getElementById("out").innerText=diesed
    
    
}
// strong password coding here
const sPassword=()=>{
   let value= document.getElementById("input").value
   if(value===""|| Number(value) <=0){
    document.getElementById("out").innerText="Please enter your number"
   }
   document.getElementById("oNumber").innerText=value
   let password=Math.random().toString(36).slice(2,12)
   document.getElementById("out").innerText=password

   }
//    converting to string
const convertingString=()=>{
   let value= document.getElementById("input").value
   if(value===""|| Number(value) <=0){
    document.getElementById("out").innerText="Please enter your number"
   }
   document.getElementById("oNumber").innerText=value
   let convertstring=Number(value).toString()
   document.getElementById("out").innerText=convertstring

   }

// clear output button here
const clearOutPut=()=>{
    document.getElementById("out").innerHTML=""
}

// controling length
const ControllingL=()=>{
   let value= document.getElementById("input").value
   if(value===""|| Number(value) <=0){
    document.getElementById("out").innerText="Please enter your number"
   }
   document.getElementById("oNumber").innerText=value
   let convertstring=Number(value).toFixed(4)
   document.getElementById("out").innerText=convertstring

   }



























