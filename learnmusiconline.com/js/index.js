var page = document.getElementsByClassName("page");
var form = document.getElementsByClassName('signup');
console.log(page);
console.log(form);
function signIn(){

if(page[0].style.display != "none")
{
   page[0].style.display='none';
   form[0].style.display='block';
}
else
{
   page[0].style.display ='block';
   form[0].style.display='none';
}
}