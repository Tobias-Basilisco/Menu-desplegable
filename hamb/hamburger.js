document.getElementById('hamburger').addEventListener('click', manage_menu);

function manage_menu(){
    let menu = document.getElementById('apriMenu');
    
    if (menu.classList.contains("hide")){
    
        menu.classList.remove("hide");}
    else {
        menu.classList.add("hide");
    }
    
}