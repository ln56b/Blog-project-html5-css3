//popup
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var bb =document.getElementById("bubule");
  var pola =document.getElementById("pola");
  var present =document.getElementById("present");
  var Lascreen=screen.availWidth;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    bb.style.boxShadow = "-5px 10px 25px rgb(156, 154, 154)";
    if (Lascreen < 961){
      pola.style.marginTop ="50px";
    }else{
      present.style.marginBottom="0px" 
       

    }
    
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    bb.style.boxShadow = "-5px 150px 180px rgb(156, 154, 154)";
    if (Lascreen < 961){
      pola.style.marginTop ="250px";
    }else{
      pola.style.marginTop ="50px";
      present.style.marginBottom="50px"
    
    }
    
  }
}