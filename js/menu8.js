//MOBILE VS OTHER
let evento='click';

if (window.innerWidth >= 1000) {
  moveDivsToEndOfNav();
  evento='mouseover';
}
else {
  evento='click';
}

  //MOUSEOVER VS CLICK



// APRI/CHIUDI MENU

document.getElementById('hamburger').addEventListener('click', manage_menu);

function manage_menu(){
    let menu = document.getElementById('apriMenu');
    let ham = document.getElementById('hamburger');
    var container = document.querySelector(".container");
    var documento = document.documentElement;


    if (menu.classList.contains("hide")){
    
        menu.classList.remove("hide");
        menu.classList.add("nav-transition")}
    else {
        menu.classList.add("hide");
    }
    
    if (menu.classList.contains("hide")){
      ham.classList.remove("hide");}

    else {
      ham.classList.add("hide");
    }

    setTimeout(() => {
      if(!menu.classList.contains("hide")){
      documento.addEventListener('click', function(event) {

        var esDentroDelDiv = container.contains(event.target);
        var esDentroHam = ham.contains(event.target);

        if (!esDentroDelDiv && !esDentroHam) {
          menu.classList.remove("nav-transition");
          setTimeout(() => {
          menu.classList.add("hide");
          ham.classList.remove("hide");
          },500);
          menu.classList.add("closed");
          hideMenuSubmenu();
          hideSubSubmenu();
          hideSubSubSubmenu();

        }
      })};
}, 1000);
    
    
    
  }

//   SPOSTARE SOTTOMENU SOTTO



function moveDivsToEndOfNav(){

  var subSubmenuPanel = document.querySelector('.sub-submenu-panel');
  var nav = document.querySelector('nav');
  var subSubSubmenuPanel = document.querySelector('.sub-sub-submenu-panel');
  nav.appendChild(subSubmenuPanel);
  nav.appendChild(subSubSubmenuPanel);
}

// MOUSEOVER MENU ITEM

let menu3 = document.getElementById("menu-3");
menu3.addEventListener(evento, showMenuSubmenu);

function showMenuSubmenu(){
  let menu3Content = document.getElementById("menu-3-content");
  let submenu = menu3Content.querySelector(".submenu");
  let allSubmenus = document.querySelectorAll(".submenu");
  let allSubmenuPanels = document.querySelectorAll(".submenu-panel");

  for (var i = 0; i < allSubmenus.length; i++) {
    allSubmenus[i].classList.remove("submenu-opened");
  }
  for (var i = 0; i < allSubmenuPanels.length; i++) {
    allSubmenuPanels[i].classList.remove("submenu-panel-opened");
  }


  menu3Content.classList.remove("closed");
  menu3Content.classList.add("submenu-panel-opened");
  submenu.classList.remove("closed");
  submenu.classList.add("submenu-opened");

  
}

function hideMenuSubmenu(){
  let allSubmenus = document.querySelectorAll(".submenu");
  let allSubmenuPanels = document.querySelectorAll(".submenu-panel");

  for (var i = 0; i < allSubmenus.length; i++) {
    allSubmenus[i].classList.add("closed");
    setTimeout(() => {
      allSubmenus = document.querySelectorAll(".submenu");
      for (var i = 0; i < allSubmenus.length; i++) {
        allSubmenus[i].classList.remove("submenu-opened");
      }
    },500);
  }

  for (var i = 0; i < allSubmenuPanels.length; i++) {
    allSubmenuPanels[i].classList.add("closed");
    setTimeout(() => {
      allSubmenuPanels = document.querySelectorAll(".submenu-panel");
      for (var i = 0; i < allSubmenuPanels.length; i++) {
        allSubmenuPanels[i].classList.remove("submenu-panel-opened");
      }
    },500);
  }

}

//MOUSE OVER SUBMENU ITEM

let submenu9= document.getElementById("submenu-9");
submenu9.addEventListener(evento, showSubSubmenu);
/* submenu9.addEventListener("mouseout", hideSubSubmenu);
*/
function showSubSubmenu(){
    let submenu9Content = document.getElementById("submenu-9-content");
    let subSubmenu = submenu9Content.querySelector(".sub-submenu");
    let allSubSubmenus = document.querySelectorAll(".sub-submenu");

    for (var i = 0; i < allSubSubmenus.length; i++) {
     allSubSubmenus[i].classList.remove("submenu-opened");
    }

    submenu9Content.classList.remove("closed");
    submenu9Content.classList.add("submenu-panel-opened");
    subSubmenu.classList.remove("closed");
    subSubmenu.classList.add("submenu-opened")
    
}

function hideSubSubmenu(){
let allSubSubmenus = document.querySelectorAll(".sub-submenu");
let allSubSubmenuPanels = document.querySelectorAll(".sub-submenu-panel");


for (var i = 0; i < allSubSubmenus.length; i++) {
  allSubSubmenus[i].classList.add("closed");
  setTimeout(() => {
    allSubSubmenus = document.querySelectorAll(".sub-submenu");
    for (var i = 0; i < allSubSubmenus.length; i++) {
      allSubSubmenus[i].classList.remove("submenu-opened");
    }
  },500);
}

for (var i = 0; i < allSubSubmenuPanels.length; i++) {
  allSubSubmenuPanels[i].classList.add("closed");
  setTimeout(() => {
    allSubSubmenuPanels = document.querySelectorAll(".sub-submenu-panel");
    for (var i = 0; i < allSubSubmenuPanels.length; i++) {
      allSubSubmenuPanels[i].classList.remove("submenu-panel-opened");
    }
  },500);
}
}


//MOUSEOVER SUB-SUBMENU ITEM

let ssubmenu3= document.getElementById("ssubmenu-3");
ssubmenu3.addEventListener(evento, showSubSubSubmenu);
/* submenu9.addEventListener("mouseout", hideSubSubmenu);
*/
function showSubSubSubmenu(){
  let ssubmenu3Content = document.getElementById("ssubmenu-3-content");
  let subSubSubmenu = ssubmenu3Content.querySelector(".sub-sub-submenu");
  let allSubSubSubmenus = document.querySelectorAll(".sub-sub-submenu");

  for (var i = 0; i < allSubSubSubmenus.length; i++) {
    allSubSubSubmenus[i].classList.remove("submenu-opened");
  }
  ssubmenu3Content.classList.remove("closed");
  ssubmenu3Content.classList.add("submenu-panel-opened");
  subSubSubmenu.classList.remove("closed");
  subSubSubmenu.classList.add("submenu-opened")
  
}

function hideSubSubSubmenu(){
  let allSubSubSubmenus = document.querySelectorAll(".sub-sub-submenu");
  let allSubSubSubmenuPanels = document.querySelectorAll(".sub-sub-submenu-panel");

  for (var i = 0; i < allSubSubSubmenus.length; i++) {
    allSubSubSubmenus[i].classList.add("closed");
    setTimeout(() => {
      allSubSubSubmenus = document.querySelectorAll(".sub-sub-submenu");
      for (var i = 0; i < allSubSubSubmenus.length; i++) {
        allSubSubSubmenus[i].classList.remove("submenu-opened");
      }
    },500);
  }
  
  for (var i = 0; i < allSubSubSubmenuPanels.length; i++) {
    allSubSubSubmenuPanels[i].classList.add("closed");
    setTimeout(() => {
      allSubSubSubmenuPanels = document.querySelectorAll(".sub-sub-submenu-panel");
      for (var i = 0; i < allSubSubSubmenuPanels.length; i++) {
        allSubSubSubmenuPanels[i].classList.remove("submenu-panel-opened");
      }
    },500);
  }

}



