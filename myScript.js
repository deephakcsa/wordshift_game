var myVar;

document.getElementById("play").addEventListener("click", function (){
    clearInterval(myVar);
    myVar = setInterval(play, 1000);
});

document.getElementById("reverse").addEventListener("click", function (){
    clearInterval(myVar);
    myVar = setInterval(reverse, 1000);
});

document.getElementById("pause").addEventListener("click", function (){
    clearInterval(myVar);
});

function play(){
    var x = document.getElementById("textbox_1").value;
    var y = document.getElementById("textbox_2").value;
    document.getElementById("textbox_2").value = y+x.charAt(0);
    document.getElementById("textbox_1").value = x.slice(1);
}

function reverse(){
    var x = document.getElementById("textbox_1").value;
    var y = document.getElementById("textbox_2").value;
    document.getElementById("textbox_1").value = y.charAt(y.length-1)+x;
    document.getElementById("textbox_2").value = y.slice(0,y.length-1);
}