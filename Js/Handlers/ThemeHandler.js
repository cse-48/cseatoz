

var abTest = document.cookie ? parseInt(document.cookie.substring(document.cookie.indexOf("_abTest=")+8)) : 0;

if( abTest > 70)
{
  document.writeln("<script  src=''></script>");
}
else if( abTest > 30)
{
  document.writeln("<script  src=''></script>");
}
else
{
  document.writeln("<script  src=''></script>");
}
