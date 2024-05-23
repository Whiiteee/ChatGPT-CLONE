function change_display(){
    document.getElementById("menu-bar").classList.toggle("menubar-change");
    document.getElementById("side-bar").classList.toggle("side-bar-show")
    let side_bar = document.getElementById("side-bar");
    let chat_container_width = document.getElementById("chat-container");
    if(side_bar.style.width == "0vw"){
        //side_bar.hidden = false;
        side_bar.style.transition = "width 0.5s"
        side_bar.style.width = "25vw"
        chat_container_width.style.transition = "width 0.5s"
        chat_container_width.style.width = "75vw";
    }else{
        side_bar.style.transition = "width 0.5s";
        side_bar.style.width = "0vw"
        chat_container_width.style.transition = "width 0.5s"
        chat_container_width.style.width = "100vw";
    }
    
}