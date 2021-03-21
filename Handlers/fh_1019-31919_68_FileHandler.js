// JS File Handlers
// document.writeln("<script src='https://cse-48.github.io/cseatoz/Js/Model/Common.js'/>");
// document.writeln("<script src='https://cse-48.github.io/cseatoz/Js/DataBase/PostData.js'/>");
// document.writeln("<script src='https://cse-48.github.io/cseatoz/MetaData/js_cookie.js'/>");
var home="https://cse-48.github.io/cseatoz";

var defaultJsList = ["/Js/Model/Common.js'","/Js/DataBase/PostData.js","/MetaData/js_cookie.js"];

var DefaultJS = () => {
//       var script = document.createElement("script");
//       script.src="https://cse-48.github.io/cseatoz/Js/Model/Common.js"
  defaultJsList.forEach((path) => {
      var script = document.createElement("script");
      script.src = home + path;
      document.head.appendChild(script);
  });
//   document.writeln("<script src='https://cse-48.github.io/cseatoz/Js/Model/Common.js'/>");
//   document.writeln("<script src='https://cse-48.github.io/cseatoz/Js/DataBase/PostData.js'/>");
//   document.writeln("<script src='https://cse-48.github.io/cseatoz/MetaData/js_cookie.js'/>");
  
//   document.writeln("<script  src=''></script>");
};
DefaultJS();
// CSS File Handlers
var DefaultCSS = () => {
  
};
DefaultCSS();
