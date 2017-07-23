var width = 500;
var height = 500;


var canvas = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

function dotCell(xUpperLeft, yUpperLeft, side, cellName, dotRadius) {
    var xUpperRight = xUpperLeft + side;
    var yUpperRight = yUpperLeft;
    var xLowerLeft = xUpperLeft;
    var yLowerLeft = yUpperLeft + side;
    var xLowerRight = xUpperRight;
    var yLowerRight = yUpperRight + side;

    canvas.append("circle")
        .attr("class", cellName)
        .attr("id", "UpperLeft_"+ cellName)
        .attr("cx", xUpperLeft)
        .attr("cy", yUpperLeft)
        .attr("r", dotRadius)
        .attr("fill", "red");

    canvas.append("circle")
        .attr("class", cellName)
        .attr("id", "UpperRight_" + cellName)
        .attr("cx", xUpperRight)
        .attr("cy", yUpperRight)
        .attr("r", dotRadius)
        .attr("fill", "green");

    canvas.append("circle")
        .attr("class", cellName)
        .attr("id", "LowerLeft_"+ cellName)
        .attr("cx", xLowerLeft)
        .attr("cy", yLowerLeft)
        .attr("r", dotRadius)
        .attr("fill", "blue");

    canvas.append("circle")
        .attr("class", cellName)
        .attr("id", "LowerRight_"+ cellName)
        .attr("cx", xLowerRight)
        .attr("cy", yLowerRight)
        .attr("r", dotRadius)
        .attr("fill", "black");


}

var xOrigins = [];
var yOrigins = [];
for (var i=0;i<2000; i+=100){
    xOrigins.push(i);
}
console.log(xOrigins);
dotCell(15, 15, 100, "test0-0", 3);
dotCell(115, 15, 100, "test1-0", 3);
dotCell(215, 15, 100, "test2-0", 3);
dotCell(315, 15, 100, "test3-0", 3);
dotCell(15, 115, 100, "test0-1", 3);
dotCell(115, 115, 100, "test1-1", 3);
dotCell(215, 115, 100, "test1-2", 3);
dotCell(315, 115, 100, "test1-3", 3);

