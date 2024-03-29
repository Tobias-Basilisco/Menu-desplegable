let screanWidthBreakpoint = 1000;

//MOBILE VS OTHER
let evento='click';

if (window.innerWidth >= screanWidthBreakpoint) {
  moveDivsToEndOfNav();

   //MOUSEOVER VS CLICK
    evento='mouseover';
}

else {
  evento='click';
}

 
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
          hideSubmenu(".submenu",".submenu-panel");
          hideSubmenu(".sub-submenu",".sub-submenu-panel");
          hideSubmenu(".sub-sub-submenu",".sub-sub-submenu-panel");
          vinculateArrows();
        }
      })
    };
  }, 1000);
}


//   SPOSTARE SOTTOMENU SOTTO

function moveDivsToEndOfNav(){


  var subSubmenuPanel = document.querySelectorAll('.sub-submenu-panel');
  var nav = document.querySelector('nav');
  var subSubSubmenuPanel = document.querySelectorAll('.sub-sub-submenu-panel');
  for (let i = 0; i < subSubmenuPanel.length; i++ ){
    nav.appendChild(subSubmenuPanel[i]);
  }
  for (let i = 0; i < subSubSubmenuPanel.length; i++ ){
    nav.appendChild(subSubSubmenuPanel[i]);
  }

}


// MOUSEOVER/CICK MENU ITEM
arrowsEventListener("menu-3","#menu-3-arrow","menu-3-content",".submenu",".submenu-panel");

// MOUSEOVER/CICK SUBMENU ITEM
arrowsEventListener("submenu-9","#submenu-9-arrow","submenu-9-content",".sub-submenu",".sub-submenu-panel");

//MOUSEOVER/CLICK SUB-SUBMENU ITEM
arrowsEventListener("ssubmenu-3","#ssubmenu-3-arrow","ssubmenu-3-content",".sub-sub-submenu",".sub-sub-submenu-panel");
arrowsEventListener("ssubmenu-3-2","#ssubmenu-3-2-arrow","ssubmenu-3-2-content",".sub-sub-submenu",".sub-sub-submenu-panel");


function arrowsEventListener(idLi, idZonaDiv, idContentDivPanel, classQuerySubmenu, classQuerySubmenuPanel){
  let LiThatsHas = document.getElementById(idLi);
  let zonaArrow = document.querySelector(idZonaDiv);

  if (window.innerWidth >= screanWidthBreakpoint) {
    LiThatsHas.addEventListener(evento, function(event){
      showSubmenu(idContentDivPanel,classQuerySubmenu,classQuerySubmenuPanel)
    });
  }

  else {
    zonaArrow.addEventListener(evento, function(event){
      showSubmenu(idContentDivPanel,classQuerySubmenu,classQuerySubmenuPanel)
    });   
  }
}

function showSubmenu(idContentDivPanel,classQuerySubmenu,classQuerySubmenuPanel){

  let ContentDivPanel = document.getElementById(idContentDivPanel);
  let submenu = ContentDivPanel.querySelector(classQuerySubmenu);
  let allSubmenus = document.querySelectorAll(classQuerySubmenu);
  let allSubmenuPanels = document.querySelectorAll(classQuerySubmenuPanel);
  let allSubmenusButThis = [];
  let allSubmenuPanelsButThis = [];


  for (let i = 0; i < allSubmenus.length; i++) {
    if (allSubmenus[i] !== submenu) {
      allSubmenusButThis.push(allSubmenus[i]);
    }
  }

  for (let i = 0; i < allSubmenuPanels.length; i++) {
    if (allSubmenuPanels[i] !== ContentDivPanel) {
      allSubmenuPanelsButThis.push(allSubmenuPanels[i]);
    }
  }

  
  if (window.innerWidth >= screanWidthBreakpoint){

  ContentDivPanel.classList.remove("closed");
  ContentDivPanel.classList.add("submenu-panel-opened");
  submenu.classList.remove("closed");
  submenu.classList.add("submenu-opened");
  }

  // versione mobile 
  if (window.innerWidth < screanWidthBreakpoint){

    // vinculateArrows();

    if (!ContentDivPanel.classList.contains("submenu-panel-opened") && !submenu.classList.contains("submenu-opened")){
      ContentDivPanel.classList.remove("closed");
      ContentDivPanel.classList.add("submenu-panel-opened");
      
      asignMarginBotToAnimation(ContentDivPanel);

      submenu.classList.remove("closed");
      submenu.classList.add("submenu-opened");
    }

    else {
    
      submenu.classList.add("closed");
      setTimeout(() => {
        let ContentDivPanel = document.getElementById(idContentDivPanel);
        let submenu = ContentDivPanel.querySelector(classQuerySubmenu);
        submenu.classList.remove("submenu-opened");
        }
      ,500);
      
      ContentDivPanel.classList.add("closed");
      setTimeout(() => {
        let ContentDivPanel = document.getElementById(idContentDivPanel);
        ContentDivPanel.classList.remove("submenu-panel-opened");
        }
      ,500);
  
    }
    vinculateArrows();
  }
  
  for (var i = 0; i < allSubmenusButThis.length; i++) {
    allSubmenusButThis[i].classList.add("closed");
    vinculateArrows();
  }
  vinculateArrows();
  setTimeout(() => {

    let ContentDivPanel = document.getElementById(idContentDivPanel);
    let submenu = ContentDivPanel.querySelector(classQuerySubmenu);
    let allSubmenus = document.querySelectorAll(classQuerySubmenu);
    let allSubmenusButThis = [];
  
    for (let i = 0; i < allSubmenus.length; i++) {
      if (allSubmenus[i] !== submenu) {
        allSubmenusButThis.push(allSubmenus[i]);
      }
    }
    for (var i = 0; i < allSubmenusButThis.length; i++) {

    allSubmenusButThis[i].classList.remove("submenu-opened");
    vinculateArrows();
    }
  }
  ,500);
  vinculateArrows();
  


  for (var i = 0; i < allSubmenuPanelsButThis.length; i++) {

    allSubmenuPanelsButThis[i].classList.add("closed");
    vinculateArrows();
  }
  setTimeout(() => {
    let ContentDivPanel = document.getElementById(idContentDivPanel);
    let allSubmenuPanels = document.querySelectorAll(classQuerySubmenuPanel);
    let allSubmenuPanelsButThis = [];    
  
    
  
    for (let i = 0; i < allSubmenuPanels.length; i++) {
      if (allSubmenuPanels[i] !== ContentDivPanel) {
        allSubmenuPanelsButThis.push(allSubmenuPanels[i]);
      }
    }      
    for (var i = 0; i < allSubmenuPanelsButThis.length; i++) {

      allSubmenuPanelsButThis[i].classList.remove("submenu-panel-opened");
    }
  }
  ,500); 
  vinculateArrows();
vinculateArrows();   
}

function hideSubmenu(classQuerySubmenu, classQuerySubmenuPanel){

  let allSubmenus = document.querySelectorAll(classQuerySubmenu);
  let allSubmenuPanels = document.querySelectorAll(classQuerySubmenuPanel);

  for (var i = 0; i < allSubmenus.length; i++) {
    allSubmenus[i].classList.add("closed");
    setTimeout(() => {
      allSubmenus = document.querySelectorAll(classQuerySubmenu);
      for (var i = 0; i < allSubmenus.length; i++) {
        allSubmenus[i].classList.remove("submenu-opened");
      }
    },500);
  }

  for (var i = 0; i < allSubmenuPanels.length; i++) {
    allSubmenuPanels[i].classList.add("closed");
    setTimeout(() => {
      allSubmenuPanels = document.querySelectorAll(classQuerySubmenuPanel);
      for (var i = 0; i < allSubmenuPanels.length; i++) {
        allSubmenuPanels[i].classList.remove("submenu-panel-opened");
      }
    },500);
  }

}

//GIRARE LA FRECCIA

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

// QUANTITA DI SPOSTAMENTO DEGLI ELEMENTI SOTTO IL SOTTOMENU APERTO DA MOBILE

function asignMarginBotToAnimation(content){

  setTimeout(() => {

    // let submenuPanelOpened = document.querySelector(".submenu-panel-opened");
    let submenuPanelOpened = content;

    // let alturaPanel = 180;
    let alturaPanel = submenuPanelOpened.offsetHeight;
    // alert(-alturaPanel + "px");
    document.documentElement.style.setProperty('--altura-panel', -alturaPanel + "px");
  }
  ,10)
}

//RESIZE = REFRESH

resizeRefresh();

function resizeRefresh(){
  if (window.innerWidth < screanWidthBreakpoint){
    window.addEventListener("resize", function() {
      if (window.innerWidth > screanWidthBreakpoint) {
        window.location.reload();
      }
    });
  }else{
    window.addEventListener("resize", function() {
      if (window.innerWidth < screanWidthBreakpoint) {
        window.location.reload();
      }
    });
  }
}





