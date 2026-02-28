// days name
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// tell time function
const tellTime=()=>{
    let now= new Date()
    let hours=now.getHours()
    let min=now.getMinutes()
    let sec=now.getSeconds()
    document.getElementById("out").innerHTML+="<br> you click the botton@" +hours +":" +min +":" +sec
}



// get name of the day code
const today=()=>{
    const date= new Date()
    const todayName=date.getDay()
    const dayName=days[todayName]
    document.getElementById("out").innerHTML=dayName
    tellTime()
}

// count days when ou born
const calculateDays=()=>{
    let dob=document.getElementById("input").value
    if(!dob){
        alert("Enter your Data")
        return
    }
    let today= new Date()
    let bornDate=new Date(dob)
    console.log(today,bornDate)


    let msdif=today.getTime() - bornDate.getTime()
    console.log(msdif)

    let daysDiff=msdif/(1000 *60 *60 *24)
    console.log(daysDiff)

    let html=Math.floor(daysDiff) + "days have been passed since your born"
    document.getElementById("out").innerHTML=html
    tellTime()

}

// count days when ou born
const birthday=()=>{
    let dob=document.getElementById("input").value
    if(!dob){
        alert("Enter your Data")
        return
    }
    let today= new Date()
    let bornDate=new Date(dob)
    console.log(today,bornDate)


    let msdif=bornDate.getTime() - today.getTime()
    console.log(msdif)

    let daysDiff=msdif/(1000 *60 *60 *24)
    console.log(daysDiff)

    let html=Math.floor(daysDiff) + "is Left For Your Next Birthday"
    document.getElementById("out").innerHTML=html
    tellTime()

}

// greet user code here
const greet = (userName) => {
    document.getElementById("out").innerHTML = `Good Afternoon ${userName}`
}

const greetButton = () => {
    let userName = prompt("Enter your Name")
    if(userName){
        greet(userName)
    }
}

// tell time 1
const time1=()=>{
    tellTime()
}
// tell time 2
const time2=()=>{
    tellTime()
}
// tell time 3
const time3=()=>{
    tellTime()
}

// clear and clear output buttons here
const clearOutPut=()=>{
    document.getElementById("out").innerHTML=""
}
// clear and clear output buttons here
const clearInput=()=>{
    document.getElementById("input").value=""
}

// calculate tax
const tax = () => {
    let enterPrice = +prompt("Enter your price")

    if (!enterPrice || enterPrice <= 0) {
        document.getElementById("out").innerHTML = "Please enter a valid positive price"
        return
    }

    let taxRate = 17

    let totalTax = calculateTax(enterPrice, taxRate)

    document.getElementById("out").innerHTML = "Tax: " + totalTax
}

const calculateTax = (enterPrice, taxRate) => {
    return enterPrice * taxRate / 100
}
// calculate tax and price
const priceTax = () => {
    let enterPrice = +prompt("Enter your price")

    if (isNaN(enterPrice) || enterPrice <= 0) {
        document.getElementById("out").innerHTML = "Please enter a valid positive price"
        return
    }

    let taxRate

    // CONDITION
    if (enterPrice < 1000) {
        taxRate = 8
    } else {
        taxRate = 16
    }

    let totalTax = calculateTax1(enterPrice, taxRate)

    document.getElementById("out").innerHTML =
        "Price: " + enterPrice +
        "<br>Tax Rate: " + taxRate + "%" +
        "<br>Tax: " + totalTax
}

const calculateTax1 = (enterPrice, taxRate) => {
    return enterPrice * taxRate / 100
}