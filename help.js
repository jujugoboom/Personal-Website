var input = document.getElementById("input-block");
var content = document.createElement("p");
content.innerHTML = "Available commands: <button onclick=doInput('about')>about</button>, <button onclick=doInput('contact')>contact</button>, <button onclick=doInput('clear')>clear</button>, <button onclick=doInput('help')>help</button>, <button onclick=doInput('previouswork')>previousWork</button>";
input.appendChild(content);
reset();
