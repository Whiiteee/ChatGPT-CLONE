send_button = document.getElementById("send-msg");


function change_display(){
    document.getElementById("menu-bar").classList.toggle("menubar-change");
    document.getElementById("side-bar").classList.toggle("side-bar-show");
    document.getElementById("chat-container").classList.toggle("chat-container-shrink");
    
}

send_button.addEventListener("click",function(){
    send_msg = fetch("/chat/user/send-msg");
    print(send_msg.then())
});