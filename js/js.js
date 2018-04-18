
//var that will NOT reset after each user input, so it should be global
var possessions = [];
var beachOptions = ["go into the ocean for a nice swim", "explore the caves", "look around the beach for shells"];
var beenBeach = false;
var beenCave = false;
var dead = false;

//turns what the user inputs into usable data
function entered(e){
    e.preventDefault();
    var input = e.target.userInput.value;
    console.log(input);
    document.getElementById("userInput").value = "> ";
    var choice = input.substr(2);
    console.log("work");
    console.log(choice);
    displayChoice(choice);
    displayResult(story(choice));
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
    /*if(dead){
        died(choice);
    }*/
    var result = "";
    if(choice == "go into the ocean for a nice swim"){
        if(possessions.includes("necklace") || possessions.includes("bracelet")){
            result += "The water is cold, which is refreshing after walking in the sun. However, you soon get a bad feeling about swimming in the ocean. Soon your fears come true, when you feel a hand grab around your ankle. A mermaid is pulling you into the depths of the ocean, and there is no fighting it. ";
            if(possessions.includes("necklace")){
                result += "At first, you panic and believe you are going to die. However, you eventually realize that you are very alive and hyperventilating a bit, which should not be possible under water. You realize that there is a bubble around your head, full of breathable air. You see the necklace and realize it saved your life. Now all there is for now is to wait as the mermaid brings you farther down. ";
            } else if(possessions.includes("bracelet")){
                result += "At first, you panic and believe you are going to die. Then you feel a strong pain in your legs, and you think the mermaid is eating you alive. The pain spreads throughout your body, and when it dissipates, you realize the mermaid is no longer holding your leg. In fact, you no longer have legs! You are now a merperson! This does mean your favorite pair of pants was ruined, though. Oh well, at least you are alive! She grabs your arm, and you have no choice but to follow her deeper. ";
            }
            result += "Finally you see that there is an entire underwater city, and you are headed right to it. As you go through it, you hear all sorts of chatter in <i>at least</i> one language that you do not know and that is completely foreign to you. You ask the mermaid that brought you down here if they speak your language. She laughs. <span id='mermaid'>Yes, I understand your guttural language, and we can speak it. However it disgusts us, so we avoid it if we can. </span>She laughs again, and turns. She goes through the gates of the underwater palace. ";
        } else {
            result += "The water is cold, which is refreshing after walking in the sun. However, you soon get a bad feeling about swimming in the ocean. Soon your fears come true, when you feel a hand grab around your ankle. A mermaid is pulling you into the depths of the ocean, and there is no fighting it. <span id='dead'><b>You have died.</b></span> ";
            dead = true;
            //died();
        }
    } else if(choice == "explore the caves" && !beenCave){
        beenCave = true;
        result += "You walk up to the caves, which is not an easy thing to do since because it is uphill and a very rocky path. Once you get in, you see many beautiful lakes inside the cave. You go from cave to cave, and in one you a few beautiful things. You pick up: <br/>";
        result += "the necklace<br/>the tiara<br/>the bracelet";
    } else if(choice == "the necklace"){
        possessions.push("necklace");
        result += "The necklace is truly amazing, and it is made of many small pearls and shells. It fits well on you, and you are glad you picked it up. ";
        result += "You then leave the cave, so you decide to: ";
        result += "<br/>go into the ocean for a nice swim";
        if(!beenBeach){
            result += "<br/>look around the beach for shells";
        }
    } else if(choice == "the tiara"){
        possessions.push("tiara");
        result += "It is a very pretty tiara, and you feel a bit like royalty. It is made of pearls and shells and make you feel like you can do anything you want to. ";
        result += "You then leave the cave, so you decide to: ";
        result += "<br/>go into the ocean for a nice swim";
        if(!beenBeach){
            result += "<br/>look around the beach for shells";
        }
    } else if(choice == "the bracelet"){
        possessions.push("bracelet");
        result += "The bracelet is truly amazing, and it is made of many small pearls and shells. It fits well on you, and you are glad you picked it up. ";
        result += "You then leave the cave, so you decide to: ";
        result += "<br/>go into the ocean for a nice swim";
        if(!beenBeach){
            result += "<br/>look around the beach for shells";
        }
    } else if(choice == "look around the beach for shells" && !beenBeach){
        beenBeach = true;
        result += "You find many pretty shells around as you are looking, and you make a pile of them closer to the grass. You also think you see something in the sand as you are looking. You: <br/>";
        result += "ignore it <br/> investigate";
    } else if(choice == "ignore it"){
        result += "It is probably just another crab, and there are shells to collect! ";
        result += "You have done enough shell collecting. You decide to: ";
        result += "<br/>go into the ocean for a nice swim";
        if(!beenCave){
            result += "<br/>explore the caves";
        }
    } else if(choice == "investigate"){
        possessions.push("ring");
        result += "As you part the grass, you see something small and made out of some type of metal. It is a ring, and it has a small ship on the front, like a pirate ship. You think it is just big enough for your pinky finger, and you slip it on your finger. ";
        result += "You have done enough shell collecting. You decide to: ";
        result += "<br/>go into the ocean for a nice swim";
        if(!beenCave){
            result += "<br/>explore the caves";
        }
    }else{
        result = "Please re-enter it exactly as it shows";
    }
    return result;
}

//shows the choice the user made
function displayChoice(choice) {
    var previousText = document.getElementById("textarea").innerHTML;
    var display = choice + "<br/><br/>" + previousText;
    console.log(display);
    document.getElementById("textarea").innerHTML = display + '<br/>';
}

//displays the result of the choice
function displayResult(result) {
    var previousText = document.getElementById("textarea").innerHTML;
    var display = result + "<br/><br/>" + previousText;
    console.log(display);
    document.getElementById("textarea").innerHTML = display + '<br/>';
    /*if(dead){
        died();
    }*/
}

//function that restarts the game upon death

function died(choice){
    if (dead){}
    if(choice == "yes" || choice == "y" || choice == "Yes" || choice == "Y") {
    	var possessions = [];
		var beachOptions = ["go into the ocean for a nice swim", "explore the caves", "look around the beach for shells"];
		var beenBeach = false;
		var beenCave = false;
		var dead = false;
		var oldStuff = document.getElementById("textarea").innerHTML;
		var display = "You go down a road, and soon you hear seagulls squawking and you smell the ocean breeze. Now you are on the beach. To the right you see a group of caves, and in front of you is the ocean. You decide to:<br/>go into the ocean for a nice swim<br />explore the caves<br />look around the beach for shells</p>" + oldStuff;
		document.getElementById("textarea").innerHTML = display;
    } else {
        
    }
    var result = "You died! Try again? y/n";
    document.getElementById();
}