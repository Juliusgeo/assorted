var output = "";
function pig() {
    output = "";
    var input = document.getElementById("input").value;
    var words = input.split(" ");
    for (i = 0; i < words.length; i++) {
        var first = words[i];
        words[i] = words[i].substring(1) + first[0].toLowerCase() + "ay";
    }
    for (i = 0; i < words.length; i++) {
        output = output + words[i] + " ";
    }
};

function update(){
	pig();
    document.getElementById("out").value = output;
	setInterval(function () {if(document.getElementById("input").value == ""){document.getElementById("out").value = ""}}, 3);

}
