// // JS File Handlers
 
var home="https://cse-48.github.io/cseatoz";

// var defaultJsList = [];

// var DefaultJS = () => {
//   defaultJsList.forEach((path) => {
//       var script = document.createElement("script");
//       script.src = home + path;
//       document.head.appendChild(script);
//   });
// };
// DefaultJS();



// // CSS File Handlers
// var DefaultCSS = () => {
  
// };
// DefaultCSS();

var AddCssFile = (path) => {
       var head = document.getElementsByTagName('HEAD')[0]; 
        // Create new link Element
        var link = document.createElement('link');
        // set the attributes for link element 
        link.rel = 'stylesheet'; 
        link.type = 'text/css';
        link.href = home + path; 
        // Append link element to HTML head
        head.appendChild(link); 
};
var SetCssFile = (id , path) => {
        var link = document.getElementsById(id);
        link.href = home + path; 
};
