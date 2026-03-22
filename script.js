function goResult(){

var birthday=document.getElementById("birthday").value;

if(!birthday){

alert("请选择你的生日");

return;

}

localStorage.setItem("birthday",birthday);

window.location.href="result.html";

}

function goComplete(){

window.location.href="complete.html";

}
