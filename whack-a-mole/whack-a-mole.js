  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

var cells = document.getElementsByTagName("td");
var molesArray = Math.floor(Math.random() * cells.length);
var randomCell = cells[molesArray]

var mole = document.createElement('img');
mole.src = "./mole.PNG";
mole.id = "mole"

randomCell.appendChild(mole);

mole.onclick = whackMole;

function whackMole() {
  molesArray = Math.floor(Math.random() * cells.length)
  randomCell = cells[molesArray]
  randomCell.appendChild(mole);

  var audio = new Audio('whack-audio.wav');
  audio.play();
}


/* NOTES - I wasn't sure how to handle the first task and so knew I couldn't complete the challenge without help. I looked at the readme file and completed as much code as I could by myself before going to review the walkthrough video. Below are the notes I took as I went and the code I had prior to watching the walkthrough

    ## References to the cells
      # Amend <table> tag to include <table id=”myTable”>
      # I think I should probably write the following line of code: var table = document.getElementById("myTable").rows[0].cells.length. That way I can use the table variable later on to put the mole in it?
      # Create a variable called molesArray which holds an array where I can put my cells (var molesArray = [];)

    ## Random cell selector
      # Create an indexer function called getMole
      # Use Math.floor & Math.random to generate a random number between 1 and 25 within the function
      # The function has two parameters = min and max
      # After trial and error using the console.log, I have a working random number function:
            function getMoleNumber(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min + 1) + min);
}
      # Per the guide, I need two lines of code that look like this:
            var randomIndex = functionToGetRandomNumber()
            var randomCell = cellsArray[randomIndex]

      # Except mine will look like this (I think!)
            var randomIndex = getMoleNumber()
            var randomCell = molesArray[randomIndex]

    ## Show the mole
      # Create a function called putMole. I'm not really sure how the function will work but I do know I also need the following code:
      # Use 'const moleImage = document.createElement('img')' method to create an image tag in the HTML
      # Then add the image to the moleImage variable by using: 'moleImage.src = "mole.PNG"
      # Create a mole id in the css file (I know some content should go beneath it but currently I'm not sure how to style it or if you can include links to images in the css document. Currently the mole id in the css file is empty)
      # I think I need to write code that looks something like this: (document.getElementById=("table").appendChild("mole");) to add the mole to the table by using the mole id and the table id

    ## Whack that mole!
      # So I know from the unicorn challenge that I will need a function called whackMole that executes on a click event. I will need a line of code that looks like: table.onclick = whackMole
      # I think I need a function similar to the unicornClick function from the last challenge i.e.:
          function whackMole(event) {
            var mole = event.target
          }
      # Just not sure how to finish it!
      # Aaand that's about as far as I can get without help from the walkthrough. 
      This is my code so far:

              var molesArray = [];

              var table = document.getElementById("myTable").rows[0].cells.length;

              const moleImage = document.createElement('img')
              moleImage.src = "mole.PNG"

              document.getElementById=("table").appendChild("mole");

              table.onclick = whackMole

              function getMoleNumber(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min);
              }

              function putMole() {
              }

              function whackMole(event) {
              var mole = event.target
              }

              console.log("Whack-a-Mole!")

*/


