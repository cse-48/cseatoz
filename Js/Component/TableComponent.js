
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

// v2
var SetTable_v2 = (id,tableData) => {
    let tableContainer = document.getElementById(id);
    let table = document.createElement("TABLE");
    table.className = tableData.class.table;
    // thead
    let theader = table.createTHead();
    theader.className = tableData.class.thead;
    let row = theader.insertRow(0);
    row.className = tableData.class.thead_tr;
    let colum = 0;
    tableData.data.headRowItems.forEach((item)=>{
        let cell = document.createElement("TH");
        cell.className = tableData.class.thead_tr_th;
        cell.innerHTML = item.Name;
        row.appendChild(cell);
      });
   //tbody 
      var tbody = table.createTBody();
      tbody.className = tableData.class.tbody;
      let rowCount = 0;
      tableData.data.bodyRows.forEach((rowItems)=>{
          row = tbody.insertRow(rowCount++);
          row.className = tableData.class.tbody_tr;
          colum = 0;
          for(let i = 0 ; i < rowItems.length ;i++){
              if( i < tableData.thCount){
                  let cell = document.createElement("TH");
                  cell.className = tableData.class.tbody_tr_th;
                  cell.innerHTML = rowItems[i].Name;
                  row.appendChild(cell);
                  colum++;
              }
              else
              {
                  let cell = row.insertCell(colum++);
                  cell.className = tableData.class.tbody_tr_td;
                  cell.innerHTML = rowItems[i].Name;
              }
          }
      });
  tableContainer.appendChild(table);
};
