var lastId = -1;
var getId = () => { return lastId += 2;};
class Item {
    constructor(name, value) {
        this.Name = name;
        this.Value = value;
      }
 }
class RecoPost {
  constructor(title,  link) {
    this.Id = getId();
    this.Title = title;
    this.Link = link;
    this.Labels = "";
    this.RecoScore = 0;  
  }
}
