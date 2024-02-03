// this  script about for show drop down menu bar 

let showDrop_menuBar = document.querySelector(".navbar_dorpdown_menu_bar");

let click_toggle_btn = document.querySelector(".toggle_drop_btn");

// show 

click_toggle_btn.addEventListener("click" , ()=>{
    showDrop_menuBar.classList.toggle("activate_show")
})

