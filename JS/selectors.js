/**
 * Created by mcamp on 7/16/17.
 */

var pTags = document.getElementsByTagName('p');
var firstPTag = pTags[0];
var secPTag = pTags[1];
var checkBoxes = document.getElementsByName("myList");



function update(item){
    if(d3.select("#"+item).property("checked")){
        d3.select("#"+item+"Label").attr("class", "done");
    } else {
        // alert("Not CHecked");
        d3.select("#"+item+"Label").attr("class", "not-done");
    }
}

table = d3.select("#list")

d3.select("#myCheckbox").on("change",update);
// update()
// document.getElementsByName("This").onclick = checkBox("This");
// console.log(document.getElementById('this'));
// document.getElementById('this').checked = false
// document.getElementById('this').onclick = checkBox();
// console.log(document.getElementById('this').checked);
// console.log("This is the text from paragraph one: " + firstPTag.outerText);
// console.log(checkBoxes[0].checked);
// console.log(checkBoxes[1].checked);

