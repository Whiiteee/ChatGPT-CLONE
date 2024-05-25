const send_button = document.getElementById("send-msg");


function change_display(array_of_ids,array_of_classes) {
    let ele = (id,class_Name)=>{
        document.getElementById(id).classList.toggle(class_Name);
    };
    for (let index = 0; index < array_of_classes.length; index++) {
        ele(array_of_ids[index],array_of_classes[index]);
        
    };

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