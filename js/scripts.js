function trackButton();{
  var SideA=document.getElementById("a").id;
  var SideB=document.getElementById("b").id;
  var SideC=document.getElementById("c").id;

  if(SideA===SideB && SideB===SideC && SideB===SideC){
  alert(" Equilateral Triangle ");
  }
  else if(SideA===SideB || SideA===SideC || SideC===SideB){
  alert("Isosceles Triangle");
  }
  else if((SideA+SideB)<= SideC || (SideA+SideC)<=SideB || (SideB+sideC)<=SideA) {
  alert("Not a Triangle");
  }
  else{
  alert("Scalene Triangle");
  }
  }
