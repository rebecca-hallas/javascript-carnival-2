
document.addEventListener('keydown', changeHead, false); 
document.addEventListener('keydown', changeBody, false);
document.addEventListener('keydown', changeShoes, false); 
document.addEventListener('keydown', helper, false); 

var headIndex = 0;
var bodyIndex = 0;
var shoesIndex = 0;

var clothingIndex = 0;

function changeHead(event) {

  var head = document.getElementById("head")
  head.src = "./images/head" + headIndex + ".png"
 
    if (clothingIndex == 0) {
    event = event || window.event;

    if (event.keyCode == '39') 
        headIndex++

    if (headIndex == 6)
        headIndex = 0

    if (event.keyCode == '37') 
        headIndex--
    
    if (headIndex == -1)
        headIndex = 5;
  }
}

  function changeBody(event) {

    var body = document.getElementById("body")
    body.src = "./images/body" + bodyIndex + ".png"

    if (clothingIndex == 1) {
      event = event || window.event;
  
      if (event.keyCode == '39') 
          bodyIndex++
  
      if (bodyIndex == 6)
          bodyIndex = 0
  
      if (event.keyCode == '37') 
          bodyIndex--
      
      if (bodyIndex == -1)
          bodyIndex = 5;
    }
  }

function changeShoes(event) {

  var shoes = document.getElementById("shoes")
  shoes.src = "./images/shoes" + shoesIndex + ".png"
  
  if (clothingIndex == 2) {
    event = event || window.event;

    if (event.keyCode == '39') 
    shoesIndex++

    if (shoesIndex == 6)
    shoesIndex = 0

    if (event.keyCode == '37') 
    shoesIndex--
    
    if (shoesIndex == -1)
    shoesIndex = 5;
  }
  }

function helper(event) {
    if (event.keyCode == '38') {
    changeBodyPart(-1)

    } else if (event.keyCode == '40') {
      changeBodyPart(1)
  }
}

function changeBodyPart(change) {
  clothingIndex += change

    if (clothingIndex == -1)
        clothingIndex = 2

    if (clothingIndex == 3)
        clothingIndex = 0 
}
