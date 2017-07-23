var width = 1080;
var height =768;

var radius = 5;

var canvas = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

function makeDot(x, y, cellName, dotRadius){

    canvas.append("circle")
        .attr("class", cellName)
        .attr("group", "dot")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", dotRadius)
        .attr("fill", "red")
        .on("mouseover", handleDotMouseOver)
        .on("mouseout", handleDotMouseOut)
        .on("mousedown", dotDrag);

}

function dotCell(xUpperLeft, yUpperLeft, side, cellName, dotRadius) {
    var cellObj = {};
    cellObj.xUpperLeft = xUpperLeft;
    cellObj.yUpperLeft = yUpperLeft;
    cellObj.xUpperRight = cellObj.xUpperLeft + side;
    cellObj.yUpperRight = cellObj.yUpperLeft;
    cellObj.xLowerLeft = cellObj.xUpperLeft;
    cellObj.yLowerLeft = cellObj.yUpperLeft + side;
    cellObj.xLowerRight = cellObj.xUpperRight;
    cellObj.yLowerRight = cellObj.yUpperRight + side;
    cellObj.name = cellName;
    cellObj.side = side;
    cellObj.dotRadius = dotRadius;
    cellObj.leftSide = false;
    cellObj.rightSide = false;
    cellObj.topSide = false;
    cellObj.bottomSide = false;
    cellObj.ownedBy = "None";
    cellObj.point = 0;

    // canvas.append("line")
    //     .attr("class", cellName)
    //     .attr("id", "topSide_" + cellObj.name)
    //     .attr("group", "line")
    //     .attr("x1", cellObj.xUpperLeft)
    //     .attr("y1", cellObj.yUpperLeft)
    //     .attr("x2", cellObj.xUpperRight)
    //     .attr("y2", cellObj.yUpperRight)
    //     .attr("stroke", "white")
    //     .attr("stroke-width", 2)
    //     .on("mouseover", handleLineMouseOver)
    //     .on("mouseout", handleLineMouseOut);
    //
    // canvas.append("line")
    //     .attr("class", cellName)
    //     .attr("id", "rightSide_" + cellObj.name)
    //     .attr("group", "line")
    //     .attr("x1", cellObj.xUpperRight)
    //     .attr("y1", cellObj.yUpperRight)
    //     .attr("x2", cellObj.xLowerRight)
    //     .attr("y2", cellObj.yLowerRight)
    //     .attr("stroke", "white")
    //     .attr("stroke-width", 2)
    //     .on("mouseover", handleLineMouseOver)
    //     .on("mouseout", handleLineMouseOut);
    //
    // canvas.append("line")
    //     .attr("class", cellName)
    //     .attr("id", "bottomSide_" + cellObj.name)
    //     .attr("group", "line")
    //     .attr("x1", cellObj.xLowerLeft)
    //     .attr("y1", cellObj.yLowerLeft)
    //     .attr("x2", cellObj.xLowerRight)
    //     .attr("y2", cellObj.yLowerRight)
    //     .attr("stroke", "white")
    //     .attr("stroke-width", 2)
    //     .on("mouseover", handleLineMouseOver)
    //     .on("mouseout", handleLineMouseOut);
    //
    // canvas.append("line")
    //     .attr("class", cellName)
    //     .attr("id", "leftSide_" + cellObj.name)
    //     .attr("group", "line")
    //     .attr("x1", cellObj.xLowerLeft)
    //     .attr("y1", cellObj.yLowerLeft)
    //     .attr("x2", cellObj.xUpperLeft)
    //     .attr("y2", cellObj.yUpperLeft)
    //     .attr("stroke", "white")
    //     .attr("stroke-width", 2)
    //     .on("mouseover", handleLineMouseOver)
    //     .on("mouseout", handleLineMouseOut);
    //
    // canvas.append("circle")
    //     .attr("class", cellObj.cellName)
    //     .attr("id", "UpperLeft_"+ cellObj.name)
    //     .attr("group", "dot")
    //     .attr("cx", cellObj.xUpperLeft)
    //     .attr("cy", cellObj.yUpperLeft)
    //     .attr("r", cellObj.dotRadius)
    //     .attr("fill", "red")
    //     .on("mouseover", handleDotMouseOver)
    //     .on("mouseout", handleDotMouseOut)
    //     .on("mousedown", dotDrag);
    //
    // if(lastCell===true){
    //     canvas.append("circle")
    //         .attr("class", cellName)
    //         .attr("id", "UpperRight_" + cellObj.name)
    //         .attr("group", "dot")
    //         .attr("cx", cellObj.xUpperRight)
    //         .attr("cy", cellObj.yUpperRight)
    //         .attr("r", cellObj.dotRadius)
    //         .attr("fill", "green")
    //         .on("mouseover", handleDotMouseOver)
    //         .on("mouseout", handleDotMouseOut)
    //         .on("mousedown", dotDrag);
    //
    //     canvas.append("circle")
    //         .attr("class", cellObj.cellName)
    //         .attr("id", "LowerLeft_"+ cellObj.name)
    //         .attr("group", "dot")
    //         .attr("cx", cellObj.xLowerLeft)
    //         .attr("cy", cellObj.yLowerLeft)
    //         .attr("r", cellObj.dotRadius)
    //         .attr("fill", "blue")
    //         .on("mouseover", handleDotMouseOver)
    //         .on("mouseout", handleDotMouseOut)
    //         .on("mousedown", dotDrag);
    //
    //     canvas.append("circle")
    //         .attr("class", cellObj.cellName)
    //         .attr("id", "LowerRight_"+ cellObj.name)
    //         .attr("group", "dot")
    //         .attr("cx", cellObj.xLowerRight)
    //         .attr("cy", cellObj.yLowerRight)
    //         .attr("r", cellObj.dotRadius)
    //         .attr("fill", "black")
    //         .on("mouseover", handleDotMouseOver)
    //         .on("mouseout", handleDotMouseOut)
    //         .on("mousedown", dotDrag);
    //

    return cellObj;
}

function makeBoard(size){
    var xOrigins = [];
    var yOrigins = [];
    var xStart = 5;
    var yStart = 5;

    var cellSize = (height-15)/size;
    var boardObj = [];

    for (var i=0;i<size; i++){
        xOrigins.push(xStart);
        xStart += cellSize;
    }
    for (var i=0;i<size; i++){
        yOrigins.push(yStart);
        yStart += cellSize;
    }

    for (var x=0; x<xOrigins.length; x++) {
        for (var y=0; y<yOrigins.length; y++) {
            var cellName="dot_"+x+"-"+y;

            boardObj.push(dotCell(xOrigins[x], yOrigins[y], cellSize, cellName, radius));
            makeDot(xOrigins[x], yOrigins[y], cellName, radius);
        }
    }
    var boardArr = [];
    while(boardObj.length) boardArr.push(boardObj.splice(0,12));

    return boardArr;
}


board = makeBoard(12);
console.log(board[0][1]);
// tip = d3.tip().html(function(d) { return "dog"; });

//Define and set up the tooltip

function dotDrag(){

    var dot = d3.select(this);
    var xOriginal = dot.attr("cx");
    var yOriginal = dot.attr("cy");

    var w = d3.select(window)
        .on("mousemove", mousemove)
        .on("mouseup", mouseup);

    d3.event.preventDefault();

    function mousemove() {
        dot.attr({
            cx: d3.mouse(dot.node())[0],
            cy: d3.mouse(dot.node())[1]
        });
    }
    function mouseup() {
        dot.classed("active", false);
        w.on("mousemove", null).on("mouseup", null);
        dot.transition()
            .duration(1000)
            .attr({
                cx: xOriginal,
                cy: yOriginal
            });
    }
}

function handleDotMouseOver(d, i) {  // Add interactivity

    // Use D3 to select element, change color and size

    d3.select(this).attr({
        fill: "orange",
        r: radius * 2
    });
    var x = d3.select(this).attr("cx");
    var y = d3.select(this).attr("cy");
    var name = d3.select(this).attr("id");
    console.log(name);
    // Specify where to put label of text
    // canvas.append("text")
    //     .attr({
    //     id: "t" + d3.select(this).attr("cx") + "-" + d3.select(this).attr("cy") + "-" + i,  // Create an id for text so we can select it later for removing on mouseout
    //     x: function() { return x-15; },
    //     y: function() { return y-30; }
    // })
    //     .text(function() {
    //         return [x, y, name];  // Value of the text
    //     });

}

function handleLineMouseOver(d, i) {  // Add interactivity

    // Use D3 to select element, change color and size

    d3.select(this).attr({
        stroke: "orange",
        "stroke-width": 4
    });
    // var x = d3.select(this).attr("cx");
    // var y = d3.select(this).attr("cy");
    var name = d3.select(this).attr("id");
    console.log(name);
}

function handleDotMouseOut(d, i) {
    // Use D3 to select element, change color back to normal
    d3.select(this).attr({
        fill: "black",
        r: radius
    });

}

function handleLineMouseOut(d, i) {
    // Use D3 to select element, change color back to normal
    d3.select(this).attr({
        stroke: "white",
        "stroke-width": 2
    });

}

function moveLookup(dotX, dotY){

    var possibleX = [dotX, dotX+1, dotX, dotX-1];
    var possibleY = [dotY+1, dotY, dotY-1, dotY];

    if()



}
