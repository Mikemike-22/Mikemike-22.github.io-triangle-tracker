function myFunction(A,B,C){
  var A=parseInt(document.getElementById("a").value);
  var B=parseInt(document.getElementById("b").value);
  var C=parseInt(document.getElementById("c").value);


  if (A+B>C && A+C>B && B+C>A) {
    if (A===B && B===C && B===C){
      document.getElementById("result").innerHTML="Equilateral Triangle"
    }else if(A===B&&B!==C || A===C && C!==B || C===B && B!==A){
      document.getElementById("result").innerHTML="Isosceles Triangle"
    }else{
      document.getElementById("result").innerHTML="Scalene Triangle"
    }
  }else {
    document.getElementById("result").innerHTML="Not a Triangle";
  }

}
