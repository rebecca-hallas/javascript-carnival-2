  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// code analysis

// create variables for each of the three unicorns
// use zero indexing as is common practice in coding
// use document.getElementById to 'get' each unicorn in the html file by their respective ids (put 'id="uni0"' in each unicorn's img tag in html file)

var uni0 = document.getElementById("uni0")
var uni1 = document.getElementById("uni1")
var uni2 = document.getElementById("uni2")

// refer to each of the uni0, uni1, and uni2 elements (which we know from above have the value of each unicorn image by their ids in the html file)
// add .onclick to activate the built-in javascript onclick method and point that to the function 'unicornClick'
// this has the effect of signifying to the computer that when a click occurs, we want the unicornClick function to execute

uni0.onclick = unicornClick
uni1.onclick = unicornClick
uni2.onclick = unicornClick

// create three variables for each of the unicorns which will be used to indicate how inflated we want our unicorns to be
// initialise them all with a value of zero

var inflationLevel0 = 0
var inflationLevel1 = 0
var inflationLevel2 = 0

// create a function called unicornClick
// when you use the onclick method and point it towards a function (as we did above with uni0.onclick = unicornClick) javascript adds a secret variable called the click event, which we can use to figure out things about the fact that a click occurred 
// we can put event in the function's parameter brackets and use it to find out which thing got clicked on (note the function's parameter does not have to be called event, it could be called chocolate and it would still work)

/* for example, if we just had this as our code:

      function unicornClick(event) {
        console.log(event)
      }

then if we opened the html file in our browser and clicked on one of the unicorns, the console log would give us a bunch of information about the click event, most notably, the target. this tells us which unicorn was clicked by its id. it's telling us, the thing that you clicked on is the 'target' - this specific html element
*/

// the content in the console.log is actually just an object. we know we can access object properties through dot.notation sooo
// create a variable called unicorn with the value of event.target (basically giving it a value of whatever you click in the browser)
// so when you click on the first unicorn in the browser, the console.log gives us back the exact code from our html document relating to that specific html element

// create an if condition: if the unicorn variable we click (unicorn) has an id (.id) of uni0, then add one (++) to the inflationLevel0 variable
// create another if condition: if the inflation variable is at 3 (the maximum balloon), send alert "Thank you!"
// create a final if condition: if the inflation variable level is at 4 (i.e. further inflated than images we have) then the inflation level becomes equal to 3. effectively this makes it impossible to move past the final inflation stage and leaves the unicorn's balloon fully inflated.
// refer to the unicorn variable and add .src to change the image source depending on how many times the unicorn has been clicked. the src points to the html unicorn images png BUT with string concatenation (+ inflationLevel0 +) in between the link string where normally there would be the number of the unicorn image. so the image string remains the same except for the one digit which refers to the different unicorn images

function unicornClick (event) {
  var unicorn = event.target

  if (unicorn.id == "uni0") {

    inflationLevel0++

    if (inflationLevel0 == 3)
        alert("Thank you!")

    if (inflationLevel0 == 4)
        inflationLevel0 = 3

    unicorn.src = "./images/unicorn-" + inflationLevel0 + ".png"
  }

// repeat above code for unicorns 1 and 2 below

  if (unicorn.id == "uni1") {

    inflationLevel1++

    if (inflationLevel1 == 3)
        alert("Thank you!")

    if (inflationLevel1 == 4)
        inflationLevel1 = 3

    unicorn.src = "./images/unicorn-" + inflationLevel1 + ".png"
 }


 if (unicorn.id == "uni2") {

  inflationLevel2++

  if (inflationLevel2 == 3)
      alert("Thank you!")

  if (inflationLevel2 == 4)
      inflationLevel2 = 3

  unicorn.src = "./images/unicorn-" + inflationLevel2 + ".png"
}
}