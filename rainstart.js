var appendable = document.getElementById("appendable");
if (appendable) {
    appendable.innerHTML = "rainstart();";
}

function rainstart(){
    var head = document.getElementsByTagName("head")[0];
    var rainPage = "<head>" + head.innerHTML + "</head><canvas id=\"canvas\" style=\"position : absolute; top : 0px; left : 0px;\"></canvas> <script type=\"text/javascript\" src=\"rain.js\"></script><audio src=\"rain.mp3\" loop=\"true\" id=\"rainSound\"></audio><form id=\"reset\" style=\"position : absolute; top : 0; right : 0; margin : 20px; padding : 0px;\" action=\"javascript:stopRain()\"><input type=\"hidden\" value=\"false\" name=\"reset\" /><input type=button value=&#x2716; onclick=\"submit()\" style=\"color : white; opacity:0.5; background-color: Transparent; outline: none; border:none;\"></input>"
    var rainDoc = document.open("text/html", "replace");
    rainDoc.write(rainPage);
    rainDoc.close();
}
