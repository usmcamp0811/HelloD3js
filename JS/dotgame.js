var width = 1080;
var height =768;

var radius = 5;

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
        .attr("group", "dot")
        .attr("cx", xUpperLeft)
        .attr("cy", yUpperLeft)
        .attr("r", dotRadius)
        .attr("fill", "red")
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);

    canvas.append("circle")
        .attr("class", cellName)
        .attr("id", "UpperRight_" + cellName)
        .attr("group", "dot")
        .attr("cx", xUpperRight)
        .attr("cy", yUpperRight)
        .attr("r", dotRadius)
        .attr("fill", "green")
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);

    canvas.append("circle")
        .attr("class", cellName)
        .attr("id", "LowerLeft_"+ cellName)
        .attr("group", "dot")
        .attr("cx", xLowerLeft)
        .attr("cy", yLowerLeft)
        .attr("r", dotRadius)
        .attr("fill", "blue")
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);

    canvas.append("circle")
        .attr("class", cellName)
        .attr("id", "LowerRight_"+ cellName)
        .attr("group", "dot")
        .attr("cx", xLowerRight)
        .attr("cy", yLowerRight)
        .attr("r", dotRadius)
        .attr("fill", "black")
        .on("mouseover", handleMouseOver)
        .on("mouseout", handleMouseOut);


}

function makeBoard(size){
    var xOrigins = [];
    var yOrigins = [];
    var xStart = 5;
    var yStart = 5;

    var cellSize = (height-15)/size;

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
            var cellName="cell"+y+"-"+x;
            dotCell(xOrigins[x], yOrigins[y], cellSize, cellName, radius);
        }
    }

}


makeBoard(12);
tip = d3.tip().html(function(d) { return "dog"; });

//Define and set up the tooltip



function handleMouseOver(d, i) {  // Add interactivity

    // Use D3 to select element, change color and size
    tip.show
    d3.select(this).attr({
        fill: "orange",
        r: radius * 2
    });
    console.log(d3.select(this).attr("cx"), d3.select(this).attr("cy"))
    // Specify where to put label of text
    // svg.append("text").attr({
    //     id: "t" + d3.select(this).attr("cx") + "-" + d3.select(this).attr("cy") + "-" + i,  // Create an id for text so we can select it later for removing on mouseout
    //     x: function() { return d3.select(this).attr("cx") - 30; },
    //     y: function() { return d3.select(this).attr("cy") - 15; }
    // })
        // .text(function() {
        //     return [d.cx, d.cy];  // Value of the text
        // });

}

function handleMouseOut(d, i) {
    // Use D3 to select element, change color back to normal
    d3.select(this).attr({
        fill: "black",
        r: radius
    });

}



