/**
 * Created by mcamp on 7/14/17.
 */
var myList = ['this', 'is', 'a', 'listArray'];

function clearlist(){
    myList = [];
    console.log("cleared");
    console.log(myList);
    showList();
}

function go() {
    alert("WHAT?!! You can add functions to a list?! Craziness!!")
}

function replace() {
    var index = prompt("Whats the index for the item you want to replace?");
    var item = prompt("Input a value.");
    myList[index] = item;
    showList();
}

function add() {
    var input = prompt("Input a value to add to the list.");
    myList.push(input);
    console.log("added item")
    showList();
}

function remove() {
    var index = prompt("What's the index of the item to remove?");
    delete myList[index];
    showList();

}

function addfunc() {
    myList.push(go);
    showList();
}

function addlist() {
    var anotherList = ['This', 'is', 'another', 'list'];
    myList.push(anotherList);
    showList();
}

function showList(){
    var ul = d3.select('#list');

    d3.select("#content").selectAll("h4").text("myList:");

    ul.selectAll('li').remove();

    ul.selectAll('li')
        .data(myList)
        .enter()
        .append('li')
        .html(String);
}

//pulls first item out of list
function shiftlist(){
    console.log(myList.shift());
    showList();
}
//pulls the last item out of the list
function poplist(){
    console.log(myList.pop());
    showList();
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

function foreachlist(){
    d3.select("#content").selectAll("h4").text("Console:");
    d3.select('#list').selectAll('li').remove();
    var ul = d3.select('#list');
    var tempList = [];
    myList.forEach(function(value) {
        var string_out = "You have " + value + " in your list.";
        tempList.push(string_out);
        ul.selectAll('li')
            .data(tempList)
            .enter()
            .append('li')
            .html(String);
        console.log(string_out);
    })
}


showList();
document.getElementById("clear_btn").onclick = clearlist;
document.getElementById("add_btn").onclick = add;