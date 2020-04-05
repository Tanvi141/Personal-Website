
var image=document.getElementById("pics1");
document.getElementById("pics").addEventListener("click",updateimg);

function updateimg(){
  console.log("hi");
  updateimg.currimg=(updateimg.currimg+1)%5;

  if(updateimg.currimg==1) { image.src="../img/me7.jpeg"; }
  else if(updateimg.currimg==2) { image.src="../img/me1.jpeg"; }
  else if(updateimg.currimg==3) { image.src="../img/me3.jpeg"; }
  else if(updateimg.currimg==4) { image.src="../img/me4.jpeg"; }
  else if(updateimg.currimg==0) { image.src="../img/me2.jpeg"; }
}

updateimg.currimg=0;
