const send_button = document.getElementById("send-msg");


function change_display(array_of_ids, array_of_classes) {
    let ele = (id, class_Name) => {
        document.getElementById(id).classList.toggle(class_Name);
    };
    for (let index = 0; index < array_of_classes.length; index++) {
        ele(array_of_ids[index], array_of_classes[index]);

    };


}


let post_msg = async (msg) => {
    let options = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "msg": msg
        })
    };
    let send_msg = await fetch("/chat/send-msg", options)
    return await send_msg.json();

}


send_button.addEventListener("click", async () => {
    let msg = document.getElementById("chat-input").value;
    if (msg.trim().length != 0) {
        document.getElementById("chat-input").value = "";

        let chat_history = document.getElementById("chat-history");
        let conversation = document.createElement("div");


        conversation.className = "msg-box-user";
        conversation.innerHTML = "<div>" + msg + "</div>";
        chat_history.appendChild(conversation);


        conversation = document.createElement("div")
        conversation.className = "msg-box-bot";
        chat_history.appendChild(conversation);
        conversation.innerHTML = "<div style='font-size:20px'> ......... </div>";

        let json_ob = await post_msg(msg);



        conversation.innerHTML = "<div>" + json_ob["response"] + "</div>";
        chat_history.appendChild(conversation);
    }
});