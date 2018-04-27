
//var that will NOT reset after each user input, so it should be global
var possessions = [];
var beachOptions = ["go into the ocean for a nice swim", "explore the caves", "look around the beach for shells"];
var beenBeach = false;
var beenCave = false;
var dead = false;
var won = false;
var counter = 0;
//var choose = [];

//turns what the user inputs into usable data
function entered(e){
    e.preventDefault();
    var input = e.target.userInput.value;
    document.getElementById("userInput").value = "> ";
    var choice = input.substr(2);
    counter++;
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

//figures out what the choice is, and what result corresponds with it
function story(choice){
    if(dead == 1){
        died(choice);
        return "";
    } else if(won == 1) {
        win(choice);
        return "";
    } else {
        var result = "";
        if(choice == "go into the ocean for a nice swim"){
            // addChoice(choice);
            //storyHelp(choice, result);
            if(possessions.includes("necklace") || possessions.includes("bracelet")){
                result += "The water is cold, which is refreshing after walking in the sun. However, you soon get a bad feeling about swimming in the ocean. Soon your fears come true, when you feel a hand grab around your ankle. A mermaid is pulling you into the depths of the ocean, and there is no fighting it. ";
                if(possessions.includes("necklace")){
                    result += "At first, you panic and believe you are going to die. However, you eventually realize that you are very alive and hyperventilating a bit, which should not be possible under water. You realize that there is a bubble around your head, full of breathable air. You see the necklace and realize it saved your life. Now all there is for now is to wait as the mermaid brings you farther down. ";
                } else if(possessions.includes("bracelet")){
                    result += "At first, you panic and believe you are going to die. Then you feel a strong pain in your legs, and you think the mermaid is eating you alive. The pain spreads throughout your body, and when it dissipates, you realize the mermaid is no longer holding your leg. In fact, you no longer have legs! You are now a merperson! This does mean your favorite pair of pants was ruined, though. Oh well, at least you are alive! She grabs your arm, and you have no choice but to follow her deeper. ";
                }
                result += "Finally you see that there is an entire underwater city, and you are headed right to it. As you go through it, you hear all sorts of chatter in <i>at least</i> one language that you do not know and that is completely foreign to you. You ask the mermaid that brought you down here if they speak your language. She laughs. <span class='mermaid'>Yes, I understand your guttural language, and we can speak it. However it disgusts us, so we avoid it if we can.</span> She laughs again, and turns. She goes through the gates of the underwater palace. ";
                result += "The mermaid brings you to the queen for questioning. You decide to:<ul><li>defy the queen</li><li>answer her questions</li></ul>";
            } else {
                result += "The water is cold, which is refreshing after walking in the sun. However, you soon get a bad feeling about swimming in the ocean. Soon your fears come true, when you feel a hand grab around your ankle. A mermaid is pulling you into the depths of the ocean, and there is no fighting it. <span class='dead'><b>You have died.</b></span> ";
                if(counter == 1){
                    result += "You did this in " + String(counter) + " choice. Try again? y/n<br/>";
                }else{
                    result += "You did this in " + String(counter) + " choices. Try again? y/n<br/>";
                }
                dead = 1;
            }
        } else if(choice == "explore the caves" && !beenCave){
            beenCave = true;
            result += "You walk up to the caves, which is not an easy thing to do since because it is uphill and a very rocky path. Once you get in, you see many beautiful lakes inside the cave. You go from cave to cave, and in one you a few beautiful things. You pick up: <br/>";
            result += "<ul><li>the necklace</li><li>the tiara</li><li>the bracelet</li></ul>";
        } else if(choice == "the necklace"){
            possessions.push("necklace");
            result += "The necklace is truly amazing, and it is made of many small pearls and shells. It fits well on you, and you are glad you picked it up. ";
            result += "You then leave the cave, so you decide to: ";
            result += "<ul><li>go into the ocean for a nice swim</li>";
            if(!beenBeach){
                result += "<li>look around the beach for shells</li></ul>";
            }else{
                result += "</ul>";
            }
        } else if(choice == "the tiara"){
            possessions.push("tiara");
            result += "It is a very pretty tiara, and you feel a bit like royalty. It is made of pearls and shells and make you feel like you can do anything you want to. ";
            result += "You then leave the cave, so you decide to: ";
            result += "<ul><li>go into the ocean for a nice swim</li>";
            if(!beenBeach){
                result += "<li>look around the beach for shells</li></ul>";
            }else{
                result += "</ul>";
            }
        } else if(choice == "the bracelet"){
            possessions.push("bracelet");
            result += "The bracelet is truly amazing, and it is made of many small pearls and shells. It fits well on you, and you are glad you picked it up. ";
            result += "You then leave the cave, so you decide to: ";
            result += "<ul><li>go into the ocean for a nice swim</li>";
            if(!beenBeach){
                result += "<li>look around the beach for shells</li></ul>";
            }else{
                result += "</ul>";
            }
        } else if(choice == "look around the beach for shells" && !beenBeach){
            beenBeach = true;
            result += "You find many pretty shells around as you are looking, and you make a pile of them closer to the grass. You also think you see something in the sand as you are looking. You: ";
            //result += "ignore it <br/> investigate";
            result += "<ul><li>ignore it</li><li>investigate</li></ul>"
        } else if(choice == "ignore it"){
            result += "It is probably just another crab, and there are shells to collect! ";
            result += "You have done enough shell collecting. You decide to: ";
            result += "<ul><li>go into the ocean for a nice swim</li>";
            if(!beenCave){
                result += "<li>explore the caves</li></ul>";
            }else{
                result +="</ul>";
            }
        } else if(choice == "investigate"){
            possessions.push("ring");
            result += "As you part the grass, you see something small and made out of some type of metal. It is a ring, and it has a small ship on the front, like a pirate ship. You think it is just big enough for your pinky finger, and you slip it on your finger. ";
            result += "You have done enough shell collecting. You decide to: ";
            result += "<ul><li>go into the ocean for a nice swim</li>";
            if(!beenCave){
                result += "<li>explore the caves</li></ul>";
            }else{
                result +="</ul>";
            }
        }else if(choice == "defy the queen"){
            result += "&#34;Let me go, you disgusting fish!&#34; Your outburst causes clamoring among the merpeople. They are appalled by what you said. Quickly the queen&#39;s guards arrest you, and while doing so they take your jewelry. You cannot breathe underwater now. <span class='dead'><b>You have died.</b></span> ";
            if(counter == 1){
                result += "You did this in " + String(counter) + " choice. Try again? y/n<br/>";
            }else{
                result += "You did this in " + String(counter) + " choices. Try again? y/n<br/>";
            }
                dead = 1;
        }else if(choice == "answer her questions"){
            result += "You answer her questions and explain that you are a human with magical jewelry. However, the mermaids are not satisfied with your answers. ";
            if(possessions.includes("ring")){
                result += "They are about to arrest you when a guard takes off the ring and gasps. <span class='mermaid'>My lady, look!</span> She takes the ring to the queen and the queen also gasps. <span class='mermaid'>Do you know what this is? This is the ring is an ancient royal heirloom that was stolen by a human many years ago. For returning it, you are granted the ability to leave my city in peace. You are also permitted to come back when you want, for you are now a friend of the crown.</span> You thank her and you are escorted back to the beach, where you take off your jewelry until you meet the mermaids again. <span class='over'>You have finished the game without dying.</span> ";
                if(counter == 1){
                    result += "You did this in " + String(counter) + " choice. Try again? y/n<br/>";
                }else{
                    result += "You did this in " + String(counter) + " choices. Try again? y/n<br/>";
                }
                won = 1;
                win();
            }else{
                result += "The queen&#39;s guards arrest you, and while doing so they take your jewelry. You cannot breathe underwater now. <span class='dead'><b>You have died.</b></span> ";
                if(counter == 1){
                    result += "You did this in " + String(counter) + " choice. Try again? y/n<br/>";
                }else{
                    result += "You did this in " + String(counter) + " choices. Try again? y/n<br/>";
                }
                dead = 1;
                //maybe? we need to decide when to do this
            }
        }else if(choice == "possessions"){
            showPossessions();
        }else{
            result = "<br/><b>Please re-enter it exactly as it is shown.</b>";
        }
        result = result + "<hr/>"; 
        return result;
    }
}

//shows the choice the user made
function displayChoice(choice) {
    var previousText = document.getElementById("textarea").innerHTML;
    var display = choice + "<br/><br/>" + previousText;
    //console.log(display);
    document.getElementById("textarea").innerHTML = display + '<br/>';
}

//displays the result of the choice
function displayResult(result) {
    var previousText = document.getElementById("textarea").innerHTML;
    var display = result + "<br/>" + previousText;
    //console.log(display);
    document.getElementById("textarea").innerHTML = display + '<br/>';
    /*if(dead){
        died();
    }*/
}

// function that restarts the game upon death
function died(choice){
    if (dead){
        if(choice == "yes" || choice == "y" || choice == "Yes" || choice == "Y") {
        	location.reload(true);
        }
    }
}

//function for if you win without dying
function win(choice){
    if(choice == "yes" || choice == "y" || choice == "Yes" || choice == "Y") {
        	location.reload(true);
    }
}

//shows possessions of the user
function showPossessions(){
    counter--;
    if(possessions.length <= 0){
        displayResult("You have no possessions. Continue from last story text<br/>");
    }else{
        var numberOfPossessions = 0;
        var possessionsText = "<ul>";
        for(var i = 0; i < possessions.length; i++){
            possessionsText += "<li>" + possessions[i] + "</li>";
            numberOfPossessions++;
        }
        possessionsText += "</ul>";
        if(numberOfPossessions > 1){
            var endMessage = "You have " + String(numberOfPossessions) + " possessions, and they are:" + possessionsText;
        }else{
            var endMessage = "You have " + String(numberOfPossessions) + " possession, and it is:" + possessionsText;
        }
        displayResult(endMessage);
    }
}