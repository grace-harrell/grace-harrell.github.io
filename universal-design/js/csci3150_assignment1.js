const navigation =  document.getElementById("main-navigation");
const navButton = document.getElementById("nav-button");

navButton.addEventListener("click", ()=>{
    navigation.classList.toggle("hide");
} )