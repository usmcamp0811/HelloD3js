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

    ul.selectAll('li').remove();

    ul.selectAll('li')
        .data(myList)
        .enter()
        .append('li')
        .html(String);
}

showList();
document.getElementById("clear_btn").onclick = clearlist;
document.getElementById("add_btn").onclick = add;