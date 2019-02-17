function myFunction(A,B,C){
  var A=document.getElementById("a").value;
  var B=document.getElementById("b").value;
  var C=document.getElementById("c").value;

  if(A===B && B===C && B===C){
  document.getElementById("result").innerHTML="Equilateral Triangle"
  }
  else if(A===B || A===C || C===B){
document.getElementById("result").innerHTML="Isosceles Triangle"
  }
  else if((A+B)<=C || (A+C)<=B || (B+C)<=A) {
document.getElementById("result").innerHTML="Not a Triangle"
  }
  else{
  alert("Scalene Triangle");
  }
  }
