var shift = 13;
var output = "";
function caesar() {
    output = "";
    var shift = document.getElementById("in").value;
    var input = document.getElementById("input").value;
    var words = input.split(" ");
    for (i = 0; i < words.length; i++) {
        word = words[i].toLowerCase();
        words[i]="";
        for(k=0; k<word.length; k++){
            words[i]+=words[i].charCodeAt(k)%26+97;
        }
    }
    for (i = 0; i < words.length; i++) {
        output = output + words[i] + " ";
    }
};

function update(){
	caesar();
    document.getElementById("out").value = output;
	setInterval(function () {if(document.getElementById("input").value == ""){document.getElementById("out").value = ""}}, 3);

}
