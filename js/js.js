
//var that will NOT reset after each user input, so it should be global
var possessions = [];
var beachOptions = ["go into the ocean for a nice swim", "explore the caves", "look around the beach for shells"];

//turns what the user inputs into usable data
function entered(e){
    e.preventDefault();
    var input = e.target.userInput.value;
    console.log(input);
    document.getElementById("userInput").value = "> ";
    var choice = input.substr(2);
    console.log(choice);
    displayChoice(choice);
    displayResult(choice);
}

//makes the static > and space before user input
function firstChars() {
    var value = document.getElementById("userInput").value;
    var arr = value.split('');
    if(arr[1] != " ") {
        arr = arr.reverse();
            arr.pop(arr.length - 1); 
            arr.push(" ", ">");
        arr = arr.reverse();
        value = arr.join("");
        document.getElementById("userInput").value = value;
    }
}

function story(choice){
    var result;
    if(choice == "go into the ocean for a nice swim"){
        if(possession.include("necklace") || possession.include("bracelet")){
            
        }
    }else if(choice == "explore the caves"){
        document.getElementById().innerHTML += choice;
    }else if(choice == "look around the beach for shells"){
        
    }else if(choice == ""){
        
    }
    return result;
}

//shows the choice the user made
function displayChoice(choice) {
    document.getElementById("textarea").innerHTML += choice + "<br>";
    story(choice);
}

//displays the result of the choice
function displayResult(result) {
    var div = document.getElementById("textarea");
    var display = result + div;
    div.innerHTML += display + "<br>";
}

//
function storyOne() {
    displayResult("");
}
