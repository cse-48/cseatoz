var recommendedList = {
            "What is a Dictionary in C# testing": "https://cseatoz.blogspot.com/2020/10/c-dictionary.html",
            "C# Dictionary Property": "https://cseatoz.blogspot.com/2020/10/c-dictionary-properties.html",
          	"C# Dictionary Add() Method":"https://cseatoz.blogspot.com/2020/10/c-dictionary-function.html"
        };
var rcl = "<ul style='margin:50px 25px 25px 25px; '>";
for (let k in recommendedList) {
     rcl += "<a href=" + recommendedList[k] + " style='color: #00ff00;'><li>" + k + "</li></a>";
 }

 rcl += "</ul>";
document.getElementById("recommended").innerHTML = rcl;
