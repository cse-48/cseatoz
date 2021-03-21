class TableClass {
  constructor(){
    this.table = "";
    this.thead = "";
    this.thead_tr = "";
    this.thead_tr_th = "";
    this.tbody = "";
    this.tbody_tr = "";
    this.tbody_tr_th = "";
    this.tbody_tr_td = ""; 
  }
}
class TableComponent {
  constructor(css,data){
    this.Class = css;
    this.Data = data;
  }
}

var SetTable = (id,tableData) => {
   var table="<table class =" + tableData.Class.table +">";
};
