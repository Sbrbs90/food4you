function toggleMenu(){
    var menu = document.getElementById("menu");
    if(menu.classList.contains("hideMenu")){
      menu.classList.remove("hideMenu");
    }else{
      menu.classList.add("hideMenu");
    }
  }
  