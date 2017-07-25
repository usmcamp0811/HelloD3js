var width = 1080;
var height =768;

var radius = 5;

var canvas = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

function makeDot(x, y, cellName, dotRadius, row, col){

    canvas.append("circle")
        .attr("id", cellName)
        .attr("row", row)
        .attr("col", col)
        .attr("location", row+","+col)
        .attr("group", "dot")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", dotRadius)
        .attr("fill", "red")
        .on("mouseover", handleDotMouseOver)
        .on("mouseout", handleDotMouseOut)
        .on("mousedown", dotDrag);

}

function drawLine(xStart, yStart, xEnd, yEnd){

    canvas.append("line")
        .attr("group", "line")
        .attr("x1", xStart)
        .attr("y1", yStart)
        .attr("x2", xEnd)
        .attr("y2", yEnd)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .on("mouseover", handleLineMouseOver)
        .on("mouseout", handleLineMouseOut);

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
    //

    return cellObj;
}

function makeBoard(size){
    var boardObj = {};
    var xOrigins = [];
    var yOrigins = [];
    var xStart = 5;
    var yStart = 5;
    var xDots = [];
    var yDots = [];

    var cellSize = (height-15)/size;
    var board = [];

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
            var dotName="dot_"+xOrigins[x]+"-"+yOrigins[y];

            // boardObj.push(dotCell(xOrigins[x], yOrigins[y], cellSize, cellName, radius));
            makeDot(xOrigins[x], yOrigins[y], dotName, radius, y, x);
            xDots.push(xOrigins[x]);
            yDots.push(yOrigins[y])
        }
    }
    for (var x=0; x<xOrigins.length-1; x++) {
        for (var y=0; y<yOrigins.length-1; y++) {
            var cellName="dot_"+yOrigins[y]+"-"+xOrigins[x];

            board.push(dotCell(xOrigins[x], yOrigins[y], cellSize, cellName, radius));

        }
    }
    var boardArr = [];
    while(board.length) boardArr.push(board.splice(0,12));
    boardObj.boardArr = boardArr;
    boardObj.xOrigins = xOrigins;
    boardObj.yOrigins = yOrigins;
    boardObj.xDots = xDots;
    boardObj.yDots = yDots;

    return boardObj;
}


board = makeBoard(4);

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
        w.on("mousemove", null).on("mouseup", null);
        dot.transition()
            .duration(1000)
            .attr({
                cx: xOriginal,
                cy: yOriginal
            });

        var dotIndex = mouseDistance(d3.mouse(dot.node())[1], d3.mouse(dot.node())[0], board.xDots, board.yDots);
        //TODO: Track down where I flipped X and Y coords and fix it
        console.log(board.xDots[dotIndex], board.yDots[dotIndex]);
        drawLine(xOriginal, yOriginal, board.yDots[dotIndex], board.xDots[dotIndex]);
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
        stroke: "black",
        "stroke-width": 2
    });

}

function moveLookup(startDotX, startDotY, endDotX, endDotY){
    // console.log(startDotX, startDotY, endDotX, endDotY);
    if (startDotX === endDotX && startDotY+1 === endDotY){
        return true;
    }else if(startDotX+1 === endDotX && startDotY === endDotY){
        return true;
    }else if(startDotX === endDotX && startDotY === endDotY){
        return true;
    }else if(startDotX-1 === endDotX && startDotY){
        return true;
    }

}

function euclideanDistance(x1,y1,x2,y2){

    var distance = Math.sqrt(Math.pow((x1-x2), 2)+Math.pow((y1-y2), 2));
    return distance;
}

function mouseDistance(mouseX, mouseY, xOrigins, yOrigins){
    //make an array to hold distance values
    var distanceArray = [];

    for (var i=0; i<xOrigins.length; i++) {

        var x = xOrigins[i];
        var y = yOrigins[i];

        var distance = euclideanDistance(mouseX, mouseY, x, y);

        distanceArray.push(distance);

    }
    var shortestDistance = Math.min.apply(null, distanceArray);
    var indexShortest = distanceArray.indexOf(shortestDistance);

    return indexShortest;
}

