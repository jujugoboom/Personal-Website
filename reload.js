var appendable = document.getElementById("appendable");
if (appendable) {
    appendable.innerHTML = "startreload();";
} else{
    var resetDiv = document.getElementById("reset");
    if (resetDiv) {
        for(var i = 0; i < resetDiv.length; i++){
            if(resetDiv[i].name === "reset"){
                if(resetDiv[i].value === "true"){
                    var script = document.createElement("script");
                    script.innerHTML = "startreload();";
                    resetDiv.appendChild(script);
                    break;
                }
            }
        }
    }
}

function startreload(){
    var element = document.getElementById("input-block");
    if (element){
        reload(element);
    }
    else{
        var head = document.getElementsByTagName("head")[0];
        var index = document.open("text/html", "replace");
        index.write("<html><head>" + head.innerHTML + "</head><body onload=\"getInput()\" link=\"green\" vlink=\"green\"><div id=\"input-block\"></div></body></html>");
        index.close()
        var element = document.getElementById("input-block");
        if (element) {
            reload(element)
        }
    }
}

function reload(element){
    element.innerHTML = "";
    var content = document.createElement("p");
    content.innerHTML = "Available commands: <button onclick=doInput('about')>about</button>, <button onclick=doInput('contact')>contact</button>, <button onclick=doInput('clear')>clear</button>, <button onclick=doInput('help')>help</button>, <button onclick=doInput('previouswork')>previousWork</button>";
    element.appendChild(content);
    var head = document.createElement('div');
    head.id = 'head';
    head.className = 'head';
    head.innerHTML = 'home@justincovell.net ~ $ &nbsp';
    element.appendChild(head);
    var text = document.createElement('div');
    text.id = 'text';
    text.className = 'text';
    text.innerHTML = '';
    element.appendChild(text);
    var blinker = document.createElement('div');
    blinker.id = 'blinker';
    blinker.className = 'blinker';
    blinker.innerHTML = '';
    element.appendChild(blinker);
    var appendable = document.createElement('script');
    appendable.id = 'appendable';
    appendable.className = 'appendable';
    element.appendChild(appendable);
}
