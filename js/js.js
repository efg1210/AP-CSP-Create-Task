function entered(e){
    e.preventDefault();
    var input = e.target.userInputTwo.value;
    //console.log(e.target.userInputTwo.value);
    console.log(input);
    document.getElementById("userInputTwo").value = "> ";
    var choice = input.substr(2);
    console.log(choice);
}

function firstChars() {
    var lol = document.getElementById("userInputTwo").value;
    var arr = lol.split('');
    if(arr[1] != " ") {
        arr = arr.reverse();
            arr.pop(arr.length - 1); 
            arr.push(" ", ">");
        arr = arr.reverse();
        lol = arr.join("");
        document.getElementById("userInputTwo").value = lol;
    }
}