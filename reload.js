var element;
element = document.getElementById("input-block");
if (element){
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
