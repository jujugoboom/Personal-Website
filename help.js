var input = document.getElementById("input-block");
var content = document.createElement("p");
content.style.color = "green";
content.innerHTML = "Available commands: about, contact, clear, help, previousWork";
input.appendChild(content);
reset();
