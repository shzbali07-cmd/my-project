// out put code here
const showOutPut=(out)=>{
    return document.getElementById("out").innerHTML=out
}

// clear output button here 
const clearOutPut=()=>{
    document.getElementById("out").innerHTML=""
}


// where we at code here 
const whereWe=()=>{
    let currentURL=window.location.href
    showOutPut(currentURL)
}
//  go to google code here 
const goGoogle=() => {
   let go= window.location.href="https://www.google.com"
    showOutPut(go)
}
// replace url code here 
const replaceUrl=() => {
    let currentURL=window.location.href
    window.location.replace("https://www.youtube.com")
    showOutPut(currentURL)
}
// popupOpen code here 
const popupOpen=() => {
   window.open("https://www.youtube.com",
   "popupwindow",
   "width=600px,height=400px")
    
}

// file convert in popup
const fileConvert= ()=>{
    let url=prompt("Enter your url")
      if (!url) {
        alert("Please enter a URL")
        return
    }


    window.open("url",
        "windowpopup",
        "width=600px,height=400px")

}

// assignUrl code here 
const assignUrl=()=>{
    window.open("","windowpopup","width=600px,height=400px")
    window.location.assign("https://www.youtube.com")
}



// closePopup code here
const closePopup=()=>{
    if(window){
        window.close()
        return
    }
}
