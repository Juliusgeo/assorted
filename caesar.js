var shift = 13;
var output = "";
function caesar() {
    output = "";
    var shift = document.getElementById("in").value;
    var input = document.getElementById("input").value;
    var output = [];
    for (i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
            output[i]=(input[i].charCodeAt()-97+shift)%26;
        }
    }
    
    return output.join(" ");
}

function update(){
	
    document.getElementById("out").value = caesar();
	setInterval(function () {if(document.getElementById("input").value == ""){document.getElementById("out").value = ""}}, 3);

}
