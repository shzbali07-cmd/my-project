// alert code here
const simpleAlert=()=>{
    alert("I am Here")
    document.getElementById("out").innerHTML="I am Here"
}

// print myname code here 
const printMYName=()=>{
    let myName=document.getElementById("input").value
    if(myName===""){
       alert("Please enter you name")
        return;
    }
    document.getElementById("out").innerHTML=myName
}

// print all cities 
const printAllCities=()=>{
    let cities=["Faisalabad","Islamabad","karachi","Burewala","Shiwal"]

    for(let i=0; i<cities.length; i++){
       let num=i +1;
        document.getElementById("out").innerHTML+=num + ') ' + cities[i] + "<br>"
        document.getElementById("oNumber").innerHTML+=num + ') ' + cities[i] 
    }

    
}

// add city code here
const addCity=()=>{
    let cities=["Faisalabad","Islamabad","karachi","Burewala","Shiwal"]
    let newCity=document.getElementById("input").value
    if(newCity===""){
        alert("Please Enter your city")
        return
    }

     for(let i=0; i<cities.length; i++){
       let num=i +1;
        document.getElementById("oNumber").innerHTML+=num + ') ' + cities[i] 
    }


    cities.push(newCity)

    for(let i=0; i<cities.length; i++){
       let num=i +1;
        document.getElementById("out").innerHTML+=num + ') ' + cities[i] + "<br>"
    }


    
}

// generateTable code here 
const generateTable=()=>{
    let enterNum=document.getElementById("input").value
    if(enterNum===""){
        alert("Enter your number")
        return
    }
    enterNum=Number(enterNum)
    let output=document.getElementById("out");
    output.innerHTML=""
    for(let i=1; i<=10; i++ ){
      output.innerHTML+=enterNum +" x " + i +" = " + ( enterNum * i)+ "<br>"
    }
}

// clear button code here

const clearInput=()=>{
    document.getElementById("input").value=""
}

// clear output buton here 
const clearOutPut=()=>{
    document.getElementById("out").innerHTML=""
}