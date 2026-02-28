// out put code here
const outPut=(out) => {
    return document.getElementById("out").innerHTML=out
}
// clear output button here
const clearOutPut = () => {
    document.getElementById("out").innerHTML=""
}

// if else statments code here
const btnCondition = () => {
let day= new Date()
let today=day.getDay()
if(today===0){
    outPut("Its Sunday")
}else if(today===1){
    outPut("Its Monday")
}else if(today===2){
    outPut("Its Tuesday")
}else if(today===4){
    outPut("Its Wednesday")
}else(
    outPut("Its other Day")
)
}

// switch statment code here
const statmentS=() => {
    let now =new Date()
    let today2=now.getDay()
    switch(today2){
        case 3:
            alert("its sunday");
            outPut("its sunday");
            break;
        case 1:
        case 4:    
            alert("its Monday");
            outPut("its Monday");
            break;
        case 0:
            alert("its Wednesday");
            break;
            default:
                alert("other Day")

    }
}
// askingName code here
const askingName = () =>{
    let Name;
    do{
         Name=prompt("Enter your Name")
       console.log(Name)
    }
    while (Name===null || Name.length<3)
        outPut(Name)
}