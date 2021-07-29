var closeSidebar = document.getElementsByClassName("close")[0];
var sidebar = document.getElementById("side-bar");
var sideMenu = document.getElementById("side-menu");
var main = document.getElementById("main");
 
sideMenu.addEventListener("click", menuHandler);
function menuHandler(){
    sidebar.style.display = "block";
    main.style.width = "80%";
    main.style.marginTop = "-80vh"
}


closeSidebar.addEventListener("click", closeHandler)
function closeHandler() {
    sidebar.style.display = "none";
    main.style.width = "100%";
    main.style.marginTop = "0";
    main.style.transition = "none";
}
