const container = document.querySelector(".container"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icondw

document.querySelector('.showHidePw').addEventListener('click', () => {
    if(login_password.type ==="password"){
        login_password.type = "text";

        document.querySelector('.showHidePw').classList.replace("uil-eye-slash", "uil-eye");
    } else {
        login_password.type = "password";

        document.querySelector('.showHidePw').classList.replace("uil-eye", "uil-eye-slash");
    }
})


// js code to appear signup and login form
signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
});
login.addEventListener("click", ( )=>{
    container.classList.remove("active");
});


//// Functions
// inputs 
let register_name = document.querySelector('.registerName')
let register_email = document.querySelector('.registerEmail')
let register_password = document.querySelector('.registerPassword')
let register_rpassword = document.querySelector('.registerRPassword')

let registerBtn = document.querySelector('.registerBtn')

let RIV = {
    name: '',
    email: '',
    password: '',
    rpassword: '',
    UID: '',
}

let getRValues = () => {
    RIV.name = register_name.value
    RIV.email = register_email.value
    RIV.password = register_password.value
    RIV.rpassword = register_rpassword.value
}

let emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
let passwordFilter = /^[A-Za-z]\w{7,20}$/
let register = () => {
    getRValues ()

    if (RIV.email.match(emailFilter) && RIV.password.match(passwordFilter) && RIV.password == RIV.rpassword) {
        let id = "U" + Math.round(Math.random() * Date.now())
        RIV.UID = id

        let objToUpload = {
            username: RIV.name,
            email: RIV.email,
            password: RIV.password,
            UID: RIV.UID,
        }

        let tmp = JSON.stringify(objToUpload)
        localStorage.setItem('LS_values', tmp)
        localStorage.setItem('loginState', true)
        window.location.href = 'index.html'
    } else {
        if (!RIV.email.match(emailFilter)) {
            register_email.style.borderBottom = '1px red solid'
        } else {
            register_email.style.borderBottom = 'none'
        }
        if (!RIV.password.match(passwordFilter)) {
            register_password.style.borderBottom = '1px red solid'
        } else {
            register_password.style.borderBottom = 'none'
        }
        if (RIV.password != RIV.rpassword) {
            register_rpassword.style.borderBottom = '1px red solid'
        } else {
            register_rpassword.style.borderBottom = 'none'
        }
    }
}

registerBtn.addEventListener('click', register)

// login 
let login_email = document.querySelector('.loginEmail')
let login_password = document.querySelector('.loginPassword')

let loginBtn = document.querySelector('.loginBtn')

let LV = {
    email: '',
    password: '',
}

let getLValues = () => {
    LV.email = login_email.value
    LV.password = login_password.value
}

let log_in = () => {
    getLValues ()
    if (LV.email == userValues.email && LV.password == userValues.password) {
        localStorage.setItem('loginState', true)
        window.location.href = 'index.html'
    } else {
        login_password.style.borderBottom = '1px red solid'
    }
}

loginBtn.addEventListener('click', log_in)