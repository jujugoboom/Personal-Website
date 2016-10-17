var rainPage = "<canvas id=\"canvas\" style=\"position : absolute; top : 0px; left : 0px;\"></canvas> <script type=\"text/javascript\" src=\"rain.js\"></script> <audio src=\"rain.mp3\" loop=\"true\" id=\"rainSound\"></audio> <div id=\"reset\" style=\"position : absolute; top : 0; right : 0; margin : 20px; padding : 0px;\"><button onclick=\"stopRain()\" style=\"color : white; opacity:0.5; background-color: Transparent; outline: none; border:none;\">&#x2716;</button></div>"
var rainDoc = document.open("text/html", "replace");
rainDoc.write(rainPage);
rainDoc.close();
