/**
 * Created by mcamp on 7/16/17.
 */

//Some examples in basic JS
var pTags = document.getElementsByTagName('p');
var firstPTag = pTags[0];
var secPTag = pTags[1];
var checkBoxes = document.getElementsByName("myList");



function update(item){
    var item = item;
    if(d3.select("#"+item).property("checked")){
        d3.select("#"+item+"Label").attr("class", "done");
    } else {
        // alert("Not CHecked");
        d3.select("#"+item+"Label").attr("class", "not-done");
    }
}

//Selection done in D3.. seems to be a little cleaner IMHO.
d3.select("#myCheckbox1").on("change", function() { update("myCheckbox1"); } );
d3.select("#myCheckbox2").on("change", function() { update("myCheckbox2"); } );
d3.select("#myCheckbox3").on("change", function() { update("myCheckbox3"); } );
d3.select("#myCheckbox4").on("change", function() { update("myCheckbox4"); } );
d3.select("#myCheckbox5").on("change", function() { update("myCheckbox5"); } );
d3.select("#myCheckbox6").on("change", function() { update("myCheckbox6"); } );
