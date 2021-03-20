
var AllCookieDict = {};

var SetCookie = (Name , Value) => {
  if(DomainValidation() && !(Name in AllCookieDict))
  {
    document.cookie = Name+"="+Value;
    AllCookieDict[Name]=Value;
    return true;
  }
  return false;
};
var GetCookie = (Name) => {
  if(Name in AllCookieDict)
  {
    return AllCookieDict[Name];
  }
  return "";
};
