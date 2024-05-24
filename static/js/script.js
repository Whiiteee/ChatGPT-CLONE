const send_button = document.getElementById("send-msg");


function change_display() {
    document.getElementById("menu-bar").classList.toggle("menubar-change");
    document.getElementById("side-bar").classList.toggle("side-bar-show");
    document.getElementById("chat-container").classList.toggle("chat-container-shrink");

}



send_button.addEventListener("click", async function () {
    let chat_history = document.getElementById("chat-history");
    let msg = document.getElementById("chat-input").value;
    let user_msg = document.createElement("div");
    user_msg.className = "msg-box-user";
    user_msg.innerHTML = "<div>"+msg+"</div>";
    chat_history.appendChild(user_msg);
    let options = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "msg":msg
        })
    };
    let send_msg = await fetch("/chat/send-msg",options);
    console.log(send_msg);
    let json_ob = await send_msg.json();
    console.log(json_ob);
    let bot_msg = document.createElement("div");
    bot_msg.className = "msg-box-bot";
    bot_msg.innerHTML = "<div>"+json_ob["response"]+"</div>";
    chat_history.appendChild(bot_msg);
});