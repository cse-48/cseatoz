// var recommendedList = {
//             "What is a Dictionary in C# testing": "https://cseatoz.blogspot.com/2020/10/c-dictionary.html",
//             "C# Dictionary Property": "https://cseatoz.blogspot.com/2020/10/c-dictionary-properties.html",
//           	"C# Dictionary Add() Method":"https://cseatoz.blogspot.com/2020/10/c-dictionary-function.html"
//         };
// var rcl = "<ul style='margin:50px 25px 25px 25px; '>";
// for (let k in recommendedList) {
//      rcl += "<a href=" + recommendedList[k] + " style='color: #00ff00;'><li>" + k + "</li></a>";
//  }

//  rcl += "</ul>";
// document.getElementById("recommended").innerHTML = rcl;
var home="https://cseatoz.blogspot.com"

var GetRecoPostByDesc = () =>{
            let recoList=[];
            console.log("indide GetRecoPostByDesc");
            recoList.push(new RecoPost("What is a Dictionary in C#","https://cseatoz.blogspot.com/2020/10/c-dictionary.html"));
            recoList.push(new RecoPost("C# Dictionary Add() Method",home+"/2020/10/c-dictionary-function.html"));
            recoList.push(new RecoPost("C# Dictionary Property",home+"/2020/10/c-dictionary-properties.html"));
            console.log(recoList);
            return recoList;
};
var BindInsideTheme = (recoList) => {
            document.getElementById("recommended_label").classList.add('justify-content-center');
            document.getElementById("reco_post").classList.add('m-top-30');
            console.log(recoList);
            var rcl = "<ul style='margin-left:20%;'>";
            for (let i=0; i<recoList.length; i++) {
                 rcl += "<a href=" + recoList[i].Link  + " style='color: #00ff00;' class='m-16'><li>" + recoList[i].Title + "</li></a>";
             }
             rcl += "</ul>";
            console.log(rcl);
            document.getElementById("recommended").innerHTML = rcl;
};
var BindRecoPost= () => {
        BindInsideTheme(GetRecoPostByDesc());
};
BindRecoPost();
