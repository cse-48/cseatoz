
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
var ReadAndSetCookie = () => {
  let cookieList = document.cookie.split(";").map(c=>{return c.trim()});
  cookieList.forEach((c)=>{
    AllCookieDict[c.substring(0,c.indexOf('='))] = parseInt(c.substring(c.indexOf("=")+1));
  });
};
var GetCookie = (Name) => {
  if(Name in AllCookieDict)
  {
    return AllCookieDict[Name];
  }
  else if(document.cookie)
  {
    ReadAndSetCookie();
    return (Name in AllCookieDict) ? AllCookieDict[Name] : null;
  }
  return null;
};
var HandleCookieOnPageLoad = () => {
  if(!GetCookie("_abTest"))
  {
    SetCookie("_abTest", Math.floor(Math.random() * 100);
  }
};
HandleCookieOnPageLoad();
              

