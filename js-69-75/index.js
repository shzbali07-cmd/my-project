// form code here 
function getValue(id) {
    return document.getElementById(id).value;
}

let users = []

const handleSubmit = () => {
     event.preventDefault()

    let firstName = getValue("firstName");
    let lastName = getValue("lastName");
    let email = getValue("email");
    let dob = getValue("dob");

    firstName=firstName.trim()
    lastName=lastName.trim()

    let fullName=(firstName + " " + lastName).trim()

    // console.log('firstName', firstName)
    // console.log('lastName', lastName)
    // console.log('fullName', fullName)
    // console.log('email', email)
    // console.log('dob', dob)

    if (firstName === "" ||firstName.length < 3 || email.length < 3 || email === "" || dob === "") {
        alert("Fill all fields");
        return;
    }
   
    // agr object ma variable name or value same hu tu value ko remove kar dy phir b work karega
    const id=Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
    const user = {
        id  : id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        dob: dob
    }
    user.stutas="active"
    user.createdAt= new Date().getTime()
    console.log(user)

   users.push(user)

   
}

// print user code here
const pUser= ()=>{
    if(!users.length){
        return alert("Please enter your data")
    }
    console.log(users)
}