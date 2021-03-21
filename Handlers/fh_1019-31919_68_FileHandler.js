// JS File Handlers
 
var home="https://cse-48.github.io/cseatoz";

var defaultJsList = ["/Js/Model/Common.js","/Js/DataBase/PostData.js","/MetaData/js_cookie.js"];

var DefaultJS = () => {
  defaultJsList.forEach((path) => {
      var script = document.createElement("script");
      script.src = home + path;
      document.head.appendChild(script);
  });
};
DefaultJS();



// CSS File Handlers
var DefaultCSS = () => {
  
};
DefaultCSS();
