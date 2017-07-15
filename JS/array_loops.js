/**
 * Created by mcamp on 7/14/17.
 */
var myList = ['apples', 'oranges', 'bannanas'];

myList[3] = 'pineapples';

myList[0] = 'watermelon';

myList.push('add more fruit');

function go() {
    alert("WHAT?!! You can add functions to a list?! Craziness!!")
}

myList[4] = go

var anotherList = ["Matt", "Candace"];

myList[5] = anotherList;

function showList(){
    alert("myLists currently holds the following: " + myList);
};


var ul = d3.select('body').append('ul');

ul.selectAll('li')
    .data(myList)
    .enter()
    .append('li')
    .html(String);