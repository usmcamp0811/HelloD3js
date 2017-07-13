/**
 * Created by mcamp on 7/13/17.
 */

var dataArray = [30, 600, 84, 545, 230, 566, 430, 545, 66];

//select a barchart container
//TODO: Learn what a container really is
// var chart = d3.select(".barchart");

//Define where to join data at
// var bar = chart.selectAll("div");

//Join data
// barUpdate = bar.data(dataArray);

//Enter data
// var barEnter = barUpdate.enter().append("div");

//Scale the data to fit on the screen
var widthScale = d3.scale.linear()
    .domain([0, d3.max(dataArray)])
    .range([0, 500]);


d3.select(".barchart")
    .selectAll("div")
    .data(dataArray)
    .enter().append("div")
    .style("width", function(d) { return widthScale(d) + "px"; })
    .text(function(d) { return d; });
