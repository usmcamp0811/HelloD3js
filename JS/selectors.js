/**
 * Created by mcamp on 7/16/17.
 */

var pTags = document.getElementsByTagName('p');
var firstPTag = pTags[0];
var secPTag = pTags[1];
var checkBoxes = document.getElementsByName("myList");

// checkBoxes.checked = true;
function checkBox(box){
//    get current state of selected box
    var checkBox = document.getElementsByName(box);
    var label = document.getElementById(box);
    var state = checkBox.checked;
    if (state === true){
        checkBox.checked = false;
        label.className = "not-done";
        console.log('not done');

    } else {
        checkBox.checked = true;
        label.className = "done";
    }
}

// document.getElementsByName("This").onclick = checkBox("This");
console.log(document.getElementsByName("This"))
document.getElementsByName("This")[0].onclick = checkBox("This");
console.log(document.getElementsByName("This"))
// console.log("This is the text from paragraph one: " + firstPTag.outerText);
// console.log(checkBoxes[0].checked);
// console.log(checkBoxes[1].checked);

