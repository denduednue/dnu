function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    
    if (userInput.trim() !== "") {
        appendMessage("User", userInput);
        // You can implement your chatbot logic here without an API key
        // For simplicity, let's just echo the user's message as a response
        setTimeout(function() {
            appendMessage("Chatbot", "You said: " + userInput);
        }, 500);
        
        document.getElementById("userInput").value = "";
    }
}

function appendMessage(sender, message) {
    var chatLog = document.getElementById("chatLog");
    var messageDiv = document.createElement("div");
    messageDiv.innerHTML = "<strong>" + sender + ":</strong> " + message;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
}
