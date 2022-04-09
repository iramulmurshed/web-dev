var button=document.getElementById("add");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");





button.addEventListener("click",function(){
    console.log("works");
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
})