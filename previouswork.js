var input = document.getElementById("input-block");
var content = document.createElement("p");
content.style.color = "green";
content.innerHTML = "My previous work can be found <button onclick=\'location.href=\"http://github.com/jujugoboom\"\'>here</button>";
input.appendChild(content);
reset();
