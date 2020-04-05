
function count() {
  var n = localStorage.getItem("on_load_counter");
  n++;
  document.getElementById("count").innerHTML=n;
    localStorage.setItem("on_load_counter", n);
}

var n = localStorage.getItem("on_load_counter");

if(n==undefined){
  localStorage.setItem("on_load_counter", 1);
  document.getElementById("count").innerHTML=0;
}

else{
  var n=localStorage.getItem("on_load_counter");
  document.getElementById("count").innerHTML=n;
}
