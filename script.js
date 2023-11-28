// JavaScript code 
function search_animal() { 
  let input = document.getElementById('searchbar').value 
  input=input.toLowerCase(); 
  var iframe = document.getElementById("animals");
  var xs = iframe.contentWindow.document.getElementsByClassName("animals");
  let x = document.getElementsByClassName('animals'); 

  for (i = 0; i < x.length; i++) { 
    if (!x[i].innerHTML.toLowerCase().includes(input)) { 
      x[i].style.display="none"; 
    } 
    else { 
      x[i].style.display="list-item";				 
    } 
  } 
} 
