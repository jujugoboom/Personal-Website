var rainPage = "<canvas id=\"canvas\" style=\"position : absolute; top : 0px; left : 0px;\"></canvas> <script type=\"text/javascript\" src=\"rain.js\"></script> <audio src=\"rain.mp3\" loop=\"true\" id=\"rainSound\"/>"
var rainDoc = document.open("text/html", "replace");
rainDoc.write(rainPage);
rainDoc.close();
