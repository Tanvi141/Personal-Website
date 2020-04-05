
function mouseOver()
{
    this.style.color = "#fce181";
}
function mouseOut()
{
    this.style.color = "white";
}
var a = document.getElementById("hov1");
if(a){
a.addEventListener("mouseover", mouseOver, false);
a.addEventListener("mouseout", mouseOut, false);
}

var b = document.getElementById("hov2");
if(b){
b.addEventListener("mouseover", mouseOver, false);
b.addEventListener("mouseout", mouseOut, false);
}


var c = document.getElementById("hov3");
if(c){
c.addEventListener("mouseover", mouseOver, false);
c.addEventListener("mouseout", mouseOut, false);
}


var d = document.getElementById("hov4");
if(d){
d.addEventListener("mouseover", mouseOver, false);
d.addEventListener("mouseout", mouseOut, false);
}
