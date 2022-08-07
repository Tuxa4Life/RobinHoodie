// Fishing Game 
if (localStorage.getItem('FISH') == undefined) {
    localStorage.setItem('FISH', 'false')
}

let userValues
if (localStorage.getItem('LS_values')) {
    userValues = JSON.parse(localStorage.getItem('LS_values'))
}

let loginState
if (localStorage.getItem('loginState')) {
    loginState = JSON.parse(localStorage.getItem('loginState'))
}

let favArr = []
if (localStorage.getItem('favourites')) {
    let tmpArr = JSON.parse(localStorage.getItem('favourites'))
    favArr = tmpArr
}
