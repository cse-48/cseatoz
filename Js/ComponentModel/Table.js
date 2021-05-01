class TableClasses {
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