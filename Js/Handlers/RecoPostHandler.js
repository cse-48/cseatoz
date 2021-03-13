
var home="https://cseatoz.blogspot.com";

var GetRecoPostByDesc = () =>{
            let recoList=[];
            console.log("indide GetRecoPostByDesc");
            recoList.push(new RecoPost("What is a Dictionary in C#","https://cseatoz.blogspot.com/2020/10/c-dictionary.html"));
            recoList.push(new RecoPost("C# Dictionary Add() Method",home+"/2020/10/c-dictionary-function.html"));
            recoList.push(new RecoPost("C# Dictionary Property",home+"/2020/10/c-dictionary-properties.html"));
            console.log(recoList);
            return recoList;
};
var recoScoreDict={
    "c#":100,
    "react":80,
    "iterate":50,
    "loop":50,
    "dictionary":40
};
var GerRecoScore = (lab) => {
    return lab in recoScoreDict ? recoScoreDict[lab] :15;
};
var GetSimilarPostId = (labelList,count)=> {
            let recoList=[];
            for(var i in _postDataDict)
            {
                for( var label in labelList)
                {
                    _postDataDict[i].RecoScore += (_postDataDict[i].Labels.includes(labelList[label]) ? GerRecoScore(labelList[label]):-_postDataDict[i].Labels.length);
                }
                recoList.push([_postDataDict[i].Id,_postDataDict[i].RecoScore]);
            }
            recoList.sort((a,b)=>{return b[1]-a[1];});
            return recoList.slice(1,count+1);
};
var GetRecoPostByLabels = (labelList,count) =>{
            var postIdList = GetSimilarPostId(labelList,count);
            var result=[];
            for(var i in postIdList)
            {
                if(postIdList[i][0] in _postDataDict)
                {
                    result.push(_postDataDict[postIdList[i][0]]);
                }
            }
            return result;
};
var BindInsideTheme = (recoList) => {
            document.getElementById("recommended_label").classList.add('justify-content-center');
            document.getElementById("reco_post").classList.add('m-top-30');
            console.log(recoList);
            var rcl = "<ul style='margin-left:10%;'>";
            for (let i=0; i<recoList.length; i++) {
                 rcl += "<a href=" + recoList[i].Link  + " style='color: #00ff00;' class='m-16'><li>" + recoList[i].Title + "</li></a>";
             }
             rcl += "</ul>";
            console.log(rcl);
            document.getElementById("recommended").innerHTML = rcl;
};
var FindLabelsOfPost = () => {
        var labelsElements = document.getElementsByClassName("byline post-labels");
        var labelList = labelsElements.length > 0  ? labelsElements[1].querySelectorAll("a") : [];
        var labels=[];
        for( let i=0; i<labelList.length; i++){
                 labels.push(labelList[i].firstChild.nodeValue.toLowerCase());   
        }
        console.log(labels);
        return labels;
};
var BindRecoPost= () => {
//         FindLabelsOfPost();
        BindInsideTheme(GetRecoPostByLabels(FindLabelsOfPost(),3));
};
BindRecoPost();
