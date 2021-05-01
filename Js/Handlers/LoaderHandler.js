var execute_ReadyStateInteractive = () => {
  loadableJsFile.forEach((file) => {
    let script = document.createElement("SCRIPT");
    switch (file) {
      case JsFile.COLLAPSE:
        script.src = _home + "Js/Services/clp_192219_31216_Collapsible.js";
        break;
      case JsFile.TABLE:
        script.src = _home + "Js/Component/TableComponent.js";
        break;
      default:
        console.log("file not loaded " + file);
    }
    document.getElementsByTagName("head")[0].appendChild(script);
  });
};
var execute_ReadyStateComplete = () => {
  callableJsFunction.forEach((f) => {
    try {
      switch (f.Name) {
        case JsFun.Collapse:
          Collapse();
          break;
        case JsFun.SetTable_v2:
          SetTable_v2.apply(this, f.Params);
          break;
        default:
          console.log("WARN fun not Found " + f.Name);
      }
    } catch (ex) {
      console.log("ERROR in fun call " + f.Name + " Error Message :- " + ex);
    }
  });
};
var execute_OnLoad = () => {
  // Collapse();
};
