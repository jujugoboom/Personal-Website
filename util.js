function doInput(input){
    //Allow manual triggering of scripts
    var head = document.getElementsByTagName("head")[0];
    var appendable = document.createElement("script");
    appendable.id = "appendable";
    appendable.class = "appendable";
    var div = document.getElementById("input-block");
    div.appendChild(appendable);
    switch(input){
        case "help":
            if(!hasScript(head, "help.js")){
                addScript(head, "help.js");
            } else{
                appendable.innerHTML = "help()";
            }
            break;
        case  "clear":
            if(!hasScript(head, "reload.js")){
                addScript(head, "reload.js");
            } else{
                appendable.innerHTML = "startreload()";
            }
            break;
        case "about":
            if(!hasScript(head, "about.js")){
                addScript(head, "about.js");
            } else{
                appendable.innerHTML = "about();";
            }
            break;
        case "contact":
            if(!hasScript(head, "contact.js")){
                addScript(head, "contact.js");
            } else{
                appendable.innerHTML = "contact()";
            }
            break;
        case "previouswork":
            if(!hasScript(head, "previouswork.js")){
                addScript(head, "previouswork.js");
            }
            else{
                appendable.innerHTML = "previouswork()";
            }
            break;
        case "exit":
            window.close();
            break;
        case "rain":
            if(!hasScript(head, "rainstart.js")){
                addScript(head, "rainstart.js");
            } else{
                appendable.innerHTML = "rainstart()";
            }
            break;
        default:
            if(!hasScript(head, "default.js")){
                addScript(head, "default.js");
            } else{
                appendable.innerHTML = "defaultprint()";
            }
    }
}
function getInput(){
    //Constantly keeps track of what the user is typing
    var text = "";
    //Use onkeydown for compatibility
    document.onkeydown = function myKeyPress(e){
        var keynum;
        if(window.event) {
            keynum = e.keyCode;
        }
        else if(e.which){
            keynum = e.which;
        }
        //Handle enter key as submit
        if(keynum == 13){
            doInput(text);
            text = "";
        }
        //Use backspace to erase characters
        else if (keynum == 8) {
            var div = document.getElementById("text");
            div.innerHTML = div.innerHTML.slice(0, -1);
            text = text.slice(0, -1);
            e.preventDefault();
        }
        else{
            var div = document.getElementById("text");
            //Ignores shift key
            if (keynum != 16) {
                //Checks to see if it is a character
                if(keynum >= 65 && keynum <= 90){
                    //Always use lowercase for logic
                    text = text.concat(String.fromCharCode(keynum+32));
                    //Display capital letters if shift is pressed, lower case else
                    if(e.shiftKey){
                        div.innerHTML = div.innerHTML.concat(String.fromCharCode(keynum));
                    }
                    else {
                        div.innerHTML = div.innerHTML.concat(String.fromCharCode(keynum+32));
                    }
                }
                //If key is a space, add a space
                else if (keynum==32) {
                    text = text.concat(" ");
                    div.innerHTML = div.innerHTML.concat(" ")
                }
                //Just allow other characters to be displayed how they are
                else{
                    text = text.concat(String.fromCharCode(keynum));
                    div.innerHTML = div.innerHTML.concat(String.fromCharCode(keynum));
                }
            }
        }
    }
}
function reset(){
    //Changes all divs to random id's and adds new ones with new id's
    var input = document.getElementById("input-block");
    var oldText = document.getElementById("text");
    var oldBlinker = document.getElementById("blinker");
    var oldAppendable = document.getElementById("appendable");
    //Avoid errors if the element does not exist
    try {
        oldText.id = Math.random();
    }
    catch(e){
        return;
    }
    oldBlinker.style.backgroundColor = "black";
    oldBlinker.id = Math.random();
    oldAppendable.id = Math.random();
    var newHead = document.createElement("div");
    newHead.innerHTML = ("home@justincovell.net ~ $ &thinsp;");
    newHead.id = "head";
    newHead.className = "head";
    var newText = document.createElement("div");
    newText.id = "text";
    newText.className = "text";
    newText.innerHTML = " ";
    var newBlinker = document.createElement("div");
    newBlinker.id = "blinker";
    newBlinker.className = "blinker";
    var newAppendable = document.createElement("script");
    newAppendable.id = "appendable";
    newAppendable.className = "appendable";
    //Append to div in correct order
    input.appendChild(newHead);
    input.appendChild(newText);
    input.appendChild(newBlinker);
    input.appendChild(newAppendable);
    window.scrollTo(0,document.body.scrollHeight);
}

function hasScript(object, script){
    scripts = object.getElementsByTagName("script");
    for(var i = 0; i < scripts.length; i++){
        existingscript = scripts[i].src.match(/(\w+\.{1}js)/g)[0];
        if (existingscript === script) {
            return true;
        }
    }
    return false;
}

function addScript(object, script){
    var newscript = document.createElement("script");
    newscript.src = script;
    newscript.defer = "true";
    object.appendChild(newscript);
}

function stopRain() {
    if(stopRainVar !== null){
        stopRainVar = true;
        var head = document.getElementsByTagName("head")[0];
        var resetDiv = document.getElementById("reset");
        for(var i = 0; i < resetDiv.length; i++){
            if(resetDiv[i].name === "reset"){
                resetDiv[i].value = "true"; break;
            }
        }
        if(!hasScript(head, "reload.js")){
            addScript(head, "reload.js");
        } else{
            var script = document.createElement("script");
            script.innerHTML = "startreload();";
            resetDiv.appendChild(script);
        }
    }
}
