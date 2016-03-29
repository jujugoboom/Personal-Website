var input = document.getElementById("input-block");
var content = document.createElement("p");
content.style.color = "green";
content.innerHTML = "My previous work can be found <button onclick=\'window.open(\"http://github.com/jujugoboom\", \"_blank\")\'>here</button>";
input.appendChild(content);
reset();
