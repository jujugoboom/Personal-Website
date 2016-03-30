//Standard setup for new text. Change innerHTML to change what shows
var input = document.getElementById("input-block");
var content = document.createElement("p");
content.innerHTML = "I didn't understand that. To see all commands, enter 'help'";
input.appendChild(content);
reset();
