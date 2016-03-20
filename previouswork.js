var input = document.getElementById("input-block");
var content = document.createElement("p");
content.style.color = "green";
content.innerHTML = "My previous work can be found <a href='http://github.com/jujugoboom'>here</a>";
input.appendChild(content);
reset();
