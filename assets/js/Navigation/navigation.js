const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      search_Btn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
    if (document.querySelector('.close')) {
        document.querySelector('.name').style.display = 'none'
        document.querySelector('.profession').style.display = 'none'
    } else {
        document.querySelector('.name').style.display = 'block'
        document.querySelector('.profession').style.display = 'block' 
    }
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
        localStorage.setItem('theme', true)
    }else{
        modeText.innerText = "Dark mode";
        localStorage.setItem('theme', false)
    }
});

window.onload = () => {
    if (localStorage.getItem('theme') == 'true') {
        modeText.innerText = "Light mode";
        body.classList.add("dark");
    } else {
        modeText.innerText = "Dark mode";
        body.classList.remove("dark");
    }

    if (document.querySelector('.close')) {
        document.querySelector('.name').style.display = 'none'
        document.querySelector('.profession').style.display = 'none'
    } else {
        document.querySelector('.name').style.display = 'block'
        document.querySelector('.profession').style.display = 'block' 
    }
}