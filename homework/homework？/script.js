 //console.log(Math.random()*42);
   
var parent = document.getElementById("content");
  //parent.style.backgroundColor = "blue";
  
  for (i = 0; i < 1000; i++){
    // console.log(i);
    var child = document.createElement("div");
    child.className = "element";
    child.innerHTML = "div：" + 1;
    child.style.transform="rotate(10deg)"
    child.style.transfrom="rotate("+50*i+"deg)";
    child.style.backgroundColor="hsl("+i*1+",100%, 50%)";
    child.style.marginLeft= i * 0.5 +'px';
    
    parent.append(child); // appending the div to the element‘parent’
  }