/**
 * Created by mcamp on 7/14/17.
 */


function sub(first, second){
    return first - second;
}

function go(){

    var name = prompt("What is your name?");
    var age = prompt('What is your age?');
    alert('Hi ' + name);
    alert(name + ' is ' + age);

    var cur_year = new Date().getFullYear()
    alert("You were born in or around " + sub(cur_year, age));
};
//Tells a button on an HTML page to do a function when clicked.
document.getElementById("clickMe2").onclick = go;



//Get current year




