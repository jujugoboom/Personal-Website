function doInput(input){
    //Allow manual triggering of scripts
    var script = document.getElementById("appendable");
    switch(input){
        case "help":
            script.src = "help.js";
            break;
        case  "clear":
            script.src = "reload.js";
            break;
        case "about":
            script.src = "about.js";
            break;
        case "contact":
            script.src = "contact.js";
            break;
        case "previouswork":
            script.src = "previouswork.js";
            break;
        case "exit":
            window.close();
            break;
        case "rain":
            script.src = "rainstart.js";
            break;
        default:
            script.src = "default.js"
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
