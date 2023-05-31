//MOBILE VS OTHER
let evento='click';

if (window.innerWidth >= 1000) {
  moveDivsToEndOfNav();

   //MOUSEOVER VS CLICK
    evento='mouseover';
}

else {
  evento='click';
}
// rotateArrow();
// resetArrows();
// vinculateArrows();
 


// APRI/CHIUDI MENU

document.getElementById('hamburger').addEventListener('click', manage_menu);

function manage_menu(){
    let menu = document.getElementById('apriMenu');
    let ham = document.getElementById('hamburger');
    var container = document.querySelector(".container");
    var documento = document.documentElement;


    if (menu.classList.contains("hide")){
    
        menu.classList.remove("hide");
        menu.classList.add("nav-transition");
        vinculateArrows();
      }
    else {
        menu.classList.add("hide");
        vinculateArrows();
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
          menu.classList.add("nav-closed");
          hideMenuSubmenu();
          hideSubSubmenu();
          hideSubSubSubmenu();
          vinculateArrows();

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

// MOUSEOVER/CICK MENU ITEM

let menu3 = document.getElementById("menu-3");
let zonamenu3 = document.querySelector("#menu-3-arrow");

if (window.innerWidth >= 1000) {
  menu3.addEventListener(evento, showMenuSubmenu);
}

else {
  zonamenu3.addEventListener(evento, showMenuSubmenu);    
}

function showMenuSubmenu(){
  let menu3Content = document.getElementById("menu-3-content");
  let submenu = menu3Content.querySelector(".submenu");
  let allSubmenus = document.querySelectorAll(".submenu")-submenu;
  let allSubmenuPanels = document.querySelectorAll(".submenu-panel")-menu3Content;

  

  if (window.innerWidth >= 1000){

  menu3Content.classList.remove("closed");
  menu3Content.classList.add("submenu-panel-opened");
  submenu.classList.remove("closed");
  submenu.classList.add("submenu-opened");

  }

  // versione mobile 
  if (window.innerWidth < 1000){

    // vinculateArrows();

    if (!menu3Content.classList.contains("submenu-panel-opened") && !submenu.classList.contains("submenu-opened")){
      menu3Content.classList.remove("closed");
      menu3Content.classList.add("submenu-panel-opened");
      submenu.classList.remove("closed");
      submenu.classList.add("submenu-opened");
    }

    else {
    
      submenu.classList.add("closed");
      setTimeout(() => {
        let menu3Content = document.getElementById("menu-3-content");
        let submenu = menu3Content.querySelector(".submenu");   
        submenu.classList.remove("submenu-opened");
        }
      ,500);
      
      menu3Content.classList.add("closed");
      setTimeout(() => {
        let menu3Content = document.getElementById("menu-3-content");
        menu3Content.classList.remove("submenu-panel-opened");
        }
      ,500);
  
    }
    vinculateArrows();
   
  }
  
  for (var i = 0; i < allSubmenus.length; i++) {
    allSubmenus[i].classList.add("closed");
    setTimeout(() => {
      let menu3Content = document.getElementById("menu-3-content");
      let submenu = menu3Content.querySelector(".submenu");
      let allSubmenus = document.querySelectorAll(".submenu")-submenu;
      allSubmenus[i].classList.remove("submenu-opened");
      }
    ,500);
    vinculateArrows();
  }


  for (var i = 0; i < allSubmenuPanels.length; i++) {

    allSubmenuPanels[i].classList.add("closed");
    setTimeout(() => {
      let menu3Content = document.getElementById("menu-3-content");
      let allSubmenuPanels = document.querySelectorAll(".submenu-panel")-menu3Content;
      allSubmenuPanels[i].classList.remove("submenu-panel-opened");
      }
    ,500);
    
    vinculateArrows();
    

  }   
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

let submenu9 = document.getElementById("submenu-9");
let zonaSubmenu9 = document.querySelector("#submenu-9-arrow");

if (window.innerWidth >= 1000) {
  submenu9.addEventListener(evento, showSubSubmenu);
}

else {
  zonaSubmenu9.addEventListener(evento, showSubSubmenu);    
}



function showSubSubmenu(){
    /* let submenu9Content = document.getElementById("submenu-9-content");
    let subSubmenu = submenu9Content.querySelector(".sub-submenu");
    let allSubSubmenus = document.querySelectorAll(".sub-submenu");

    for (var i = 0; i < allSubSubmenus.length; i++) {
     allSubSubmenus[i].classList.remove("submenu-opened");
    }

    submenu9Content.classList.remove("closed");
    submenu9Content.classList.add("submenu-panel-opened");
    subSubmenu.classList.remove("closed");
    subSubmenu.classList.add("submenu-opened"); */


    let submenu9Content = document.getElementById("submenu-9-content");
    let subSubmenu = submenu9Content.querySelector(".sub-submenu");
    let allSubSubmenus = document.querySelectorAll(".sub-submenu")-subSubmenu;
    let allSubSubmenuPanels = document.querySelectorAll(".sub-submenu-panel")-submenu9Content;
  
    
  
    if (window.innerWidth >= 1000){
  
    submenu9Content.classList.remove("closed");
    submenu9Content.classList.add("submenu-panel-opened");
    subSubmenu.classList.remove("closed");
    subSubmenu.classList.add("submenu-opened");
  
    }
  
    // versione mobile 
    if (window.innerWidth < 1000){
  
      // vinculateArrows();
  
      if (!submenu9Content.classList.contains("submenu-panel-opened") && !subSubmenu.classList.contains("submenu-opened")){
        submenu9Content.classList.remove("closed");
        submenu9Content.classList.add("submenu-panel-opened");
        subSubmenu.classList.remove("closed");
        subSubmenu.classList.add("submenu-opened");
      }
  
      else {
      
        subSubmenu.classList.add("closed");
        setTimeout(() => {
          let submenu9Content = document.getElementById("submenu-9-content");
          let subSubmenu = submenu9Content.querySelector(".sub-submenu");
          subSubmenu.classList.remove("submenu-opened");
          }
        ,500);
        
        submenu9Content.classList.add("closed");
        setTimeout(() => {
          let submenu9Content = document.getElementById("submenu-9-content");
          submenu9Content.classList.remove("submenu-panel-opened");
          }
        ,500);
    
      }
      vinculateArrows();
     
    }
    
    for (var i = 0; i < allSubSubmenus.length; i++) {
      allSubSubmenus[i].classList.add("closed");
      setTimeout(() => {
        let submenu9Content = document.getElementById("submenu-9-content");
        let subSubmenu = submenu9Content.querySelector(".sub-submenu");
        let allSubSubmenus = document.querySelectorAll(".sub-submenu")-subSubmenu;
        allSubSubmenus[i].classList.remove("submenu-opened");
        }
      ,500);
      vinculateArrows();
    }
  
  
    for (var i = 0; i < allSubSubmenuPanels.length; i++) {
  
      allSubSubmenuPanels[i].classList.add("closed");
      setTimeout(() => {
        let submenu9Content = document.getElementById("submenu-9-content");
        let allSubSubmenuPanels = document.querySelectorAll(".sub-submenu-panel")-submenu9Content;
        allSubSubmenuPanels[i].classList.remove("submenu-panel-opened");
        }
      ,500);
      
      vinculateArrows();
      
  
    } 




    
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
vinculateArrows();
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


//GIRARE LA FRECCIA


function rotateArrow(){
  let zonamenu3 = document.getElementById("menu-3-arrow");
  zonamenu3 = addEventListener("click", girare);
}

function girare(){
  setTimeout(() => {

    zonamenu3 = document.getElementById("menu-3-arrow");  
    let arrowThis = zonamenu3.querySelector(".frecce");
    let arrowAll = document.querySelectorAll(".frecce") - arrowThis;
  /*   alert(arrowAll[1].classList);
  */
    for (var i = 0; i < arrowAll.length; i++){

      if (arrowAll[i].classList.contains("frecce-opened")){

        arrowAll[i].classList.remove("frecce-opened");
        arrowAll[i].classList.add("frecce-closed");
      }
    }  
    
    if (arrowThis.classList.contains("frecce-closed")){
      arrowThis.classList.remove("frecce-closed");
      arrowThis.classList.add("frecce-opened");
      }

    else if (arrowThis.classList.contains("frecce-opened")){
      arrowThis.classList.remove("frecce-opened");
      arrowThis.classList.add("frecce-closed");
    }
  }
  ,100); 
}

function resetArrows(){

  let arrowAll = document.querySelectorAll(".frecce");
/*   alert(arrowAll[0].classList)
 */  for (var i = 0; i < arrowAll.length; i++){  
    if (arrowAll[i].classList.contains("frecce-opened")){
      arrowAll[i].classList.remove("frecce-opened");
      arrowAll[i].classList.add("frecce-closed");
    }
} 


}


function vinculateArrows(){
  // alert("arrow")
  setTimeout(() => {

    let arrowAll = document.querySelectorAll(".frecce");
    var liElement = [];
  // alert(liElement[0].classList);


    for (var i = 0; i < arrowAll.length; i++){
      liElement[i] = arrowAll[i].closest('li');
    
    }
  // alert(liElement[0].classList);


    for (var i = 0; i < arrowAll.length; i++){

      if (arrowAll[i].classList.contains("frecce-opened")){
        arrowAll[i].classList.remove("frecce-opened");
        arrowAll[i].classList.add("frecce-closed");
      }

      if (liElement[i].getElementsByTagName("div")[1].classList.contains("submenu-panel-opened")){
        arrowAll[i].classList.remove("frecce-closed");
        arrowAll[i].classList.add("frecce-opened");
      }

    }
  }
,501);
}


