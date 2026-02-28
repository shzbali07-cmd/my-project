// clearout button code here
const clearOutPut=()=>{
    document.getElementById("out").innerHTML=""
}
// clear button code here
const clearInput=()=>{
    document.getElementById("input").value=""
}


// CONVERt to lower case
const lower=()=>{
    let input=document.getElementById("input").value 
    document.getElementById("oNumber").innerHTML=input   
    if(input===""){
          Toastify({
  text: "Please type here",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "bottom", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #b00000, #0c0909)",
  },
  onClick: function(){} // Callback after click
}).showToast();
        return;
    }
    let ans=input.toLowerCase()
    document.getElementById("out").innerHTML=ans
 
}

// conver to upper case
const upper=()=>{
    let input=document.getElementById("input").value  
    document.getElementById("oNumber").innerHTML=input  
    if(input===""){
           Toastify({
  text: "Please type here",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "bottom", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #b00000, #0c0909)",
  },
  onClick: function(){} // Callback after click
}).showToast();
        return;
    }
    let ans=input.toUpperCase()
    document.getElementById("out").innerHTML=ans
 
}


// conver to capitalize
const convertC=()=>{
    let input=document.getElementById("input").value
    document.getElementById("oNumber").innerHTML=input  
    if(input===""){
         Toastify({
  text: "Please type here",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "bottom", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #b00000, #0c0909)",
  },
  onClick: function(){} // Callback after click
}).showToast();
        return;
    }
    let capitalizeText='<span style="text-transform : capitalize;">'+ input +'</span>'
    document.getElementById("out").innerHTML=capitalizeText
 
}
// conver to capitalize
const better=()=>{
    let input=document.getElementById("input").value
    document.getElementById("oNumber").innerHTML=input  
    if(input===""){
   imptoastify("please type your text")
        return;
    }
    let capitalizeText='<span style="text-transform : capitalize;">'+ input +'</span>'
    document.getElementById("out").innerHTML=capitalizeText
 
}
// print all cities
const pCity=()=>{
    let cities=["Faisalabad","Multan","Lahore","Islamabad","Aminpur","karachi"]
    for(let i=0; i<cities.length; i++){
        let num=i +1 
        document.getElementById("out").innerHTML+=num +") " +cities[i] + "<br>"
        document.getElementById("oNumber").innerHTML+=num +" ) " +cities[i]
    }
}

// toastifr error code here 
 const imptoastify=(msg)=>{

            Toastify({
      text: msg,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #b00000, #0c0909)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
 }
// cities type here
 var cities = ["Faisalabad", "Quetta", "Lahore", "Multan", "Pishawar", "Karachi", "Rawalpindi"];
//  add your city in list
   function addCity() {
    let cityName = document.getElementById("input").value;

    if (!cityName) {
        tostify("Enter Your City Name.") 
        return;
    }
    cityNameFirstLetter = cityName.charAt(0).toUpperCase()
    cityNameOtherLetters = cityName.slice(1).toLowerCase()

    fullCityName = cityNameFirstLetter + cityNameOtherLetters
    if (cities.includes(fullCityName)) {
        document.getElementById("out").innerHTML = '<span style=" font-size:25px; color : red;">"' + fullCityName + '"</span> is already in the list.'
        return;
    }
    cities.push(fullCityName)
    document.getElementById("out").innerHTML = '<span style=" font-size:25px; color : green;">"' + fullCityName + '"</span> has successfully added to the list.'
}
    
   

// check city
function checkCity() {
    let cityName = document.getElementById("input").value;

    if (!cityName) {
        tostify("Enter Your City Name.")
        return;
    }
    cityNameFirstLetter = cityName.charAt(0).toUpperCase()
    cityNameOtherLetters = cityName.slice(1).toLowerCase()

    fullCityName = cityNameFirstLetter + cityNameOtherLetters
    if (cities.includes(fullCityName)) {
        document.getElementById("out").innerHTML = '<span  style=" font-size:20px; color : #0000cc;">Congratulations</span> <span style=" font-size:25px; color : lime;">"' + fullCityName + '"</span> is already  in the list.'
        return;
    } else {
        document.getElementById("out").innerHTML = '<span  style=" font-size:20px; color : brown ;">Sorry</span>  We could not find<span style=" font-size:25px; color : lime;">"' + fullCityName + '"</span> in the list.'

    }
}



