
class TableClass {
  constructor(){
    this.table = "full-width";
    this.thead = "";
    this.thead_tr = "";
    this.thead_tr_th = "";
    this.tbody = "";
    this.tbody_tr = "";
    this.tbody_tr_th = "";
    this.tbody_tr_td = ""; 
  }
}
class Rows {
    constructor(){
    this.rows=[];//List of Items
  }
}
class TableData {
  constructor(){
    this.headRowItems=[];
    this.bodyRows=[];
  }
}
class TableComponent {
  constructor(css,data,thInsideBodyCount){
    this.class = css;
    this.data = data;
    this.thCount = thInsideBodyCount > 0 ? thInsideBodyCount : 0;
  }
}

var SetTable = (id,tableData) => {
   var table = "<table class =" + tableData.class.table +" >";
   //thead
   table += "<thead class = " + tableData.class.thead + " > <tr class = " + tableData.class.thead_tr + " >";
   tableData.data.headRowItems.forEach((item)=>{
       table += "<th class = " + tableData.class.thead_tr_th + " > " + item.Name + "</th>";
   });
   table += "</tr></thead>";
   //tbody
   table += "<tbody class = " + tableData.class.tbody + " >";
   tableData.data.bodyRows.forEach((row)=>{
      table += "<tr class = " + tableData.class.tbody_tr + " >";
      for(let i = 0 ; i < row.length ;i++){
          if( i < tableData.thCount){
              table += "<th class=" + tableData.class.tbody_tr_th + " >" + row[i].Name + "</th>";
          }
          else
          {
              table += "<td class = " + tableData.class.tbody_tr_td + " >" + row[i].Name + "</td>";
          }
      }
      table += "</tr>";
   });
   table += "</tbody>";
   //
   table += "</table>";
   document.getElementById(id).innerHTML = table;
};
