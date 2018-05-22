var appendable = document.getElementById("appendable");
if (appendable) {
    appendable.innerHTML = "help();";
}

function help(){
    var input = document.getElementById("input-block");
    var content = document.createElement("p");
    content.innerHTML = "Available commands: <button onclick=inputText('about')>about</button>, <button onclick=inputText('contact')>contact</button>, <button onclick=inputText('clear')>clear</button>, <button onclick=inputText('help')>help</button>, <button onclick=inputText('previouswork')>previousWork</button>, <button onclick=inputText('rain');>rain</button>";
    input.appendChild(content);
    reset();
}
