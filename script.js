document.getElementById("send-button").addEventListener("click", function() {
    sendMessage();
});

function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();
    if (message !== "") {
        var messagesContainer = document.getElementById("messages-container");
        var messageElement = document.createElement("div");
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messageInput.value = "";
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}
