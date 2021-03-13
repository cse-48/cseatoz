
var RecoPostTheme = (recoList) => {
            document.getElementById("recommended_label").classList.add('justify-content-center');
            document.getElementById("reco_post").classList.add('m-top-30');
  
            var rcl = "<ul style='margin-left:10%;'>";
            for (let i=0; i<recoList.length; i++) {
                 rcl += "<a href=" + recoList[i].Link  + " style='color: #00ff00;' class='m-16'><li>" + recoList[i].Title + "</li></a>";
             }
             rcl += "</ul>";
  
            document.getElementById("recommended").innerHTML = rcl;
};
