var input = document.getElementById("input-block");
var content = document.createElement("p");
content.style.color = "green";
content.innerHTML = "You can email me at <button onclick=\'location.href=\"mailto:justin@justincovell.net\"\'>justin@justincovell.net</button> or call me at 410-349-7954";
input.appendChild(content);
reset();
