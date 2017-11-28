 var parent = document.getElementById("content");
    
 
function clearAll(){
  parent.innerHTML="";
}
function makeRectangles(n){

   for (i = 0; i < n; i++){  


   var child = document.createElement("img");


   child.className = "element";
   child.src = "https://media.tenor.com/images/d8d4438e8d07601f7b0525be55e65e2b/tenor.gif";

   parent.append(child);
   console.log('element ' + i + ' added.'+ x);
 }
}
   function lalala(n){

   for (i = 0; i < n; i++){  


   var child = document.createElement("img");

   child.className = "element";
   child.src = "http://media.giphy.com/media/tnqluTBR5y4ve/giphy.gif";
   parent.append(child);
   console.log('element ' + i + ' added.'+ x);
 }
}
