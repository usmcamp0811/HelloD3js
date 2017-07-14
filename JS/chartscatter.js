/**
 * Created by mcamp on 7/13/17.
 */

//TODO: Learn how to move the data to a json file and import it from there
//Set up the data
horror = [{
    "name": "ape man",
    "physicalstrength": 20,
    "fearfactor": 7,
    "killingpower": 12,
    "horrorrating": 4,
    "cluster": 1

}, {
    "name": "godzilla",
    "physicalstrength": 3,
    "fearfactor": 5,
    "killingpower": 4,
    "horrorrating": 8,
    "cluster": 2

}, {
    "name": "the ghoul",
    "physicalstrength": 7,
    "fearfactor": 12,
    "killingpower": 2,
    "horrorrating": 7,
    "cluster": 1

}, {
    "name": "the freak",
    "physicalstrength": 9,
    "fearfactor": 2,
    "killingpower": 1,
    "horrorrating": 17,
    "cluster": 1

}, {
    "name": "dracula",
    "physicalstrength": 4,
    "fearfactor": 17,
    "killingpower": 5,
    "horrorrating": 16,
    "cluster": 2

}, {
    "name": "the hangman",
    "physicalstrength": 2,
    "fearfactor": 4,
    "killingpower": 13,
    "horrorrating": 8,
    "cluster": 2

}, {
    "name": "incredible melting man",
    "physicalstrength": 3,
    "fearfactor": 8,
    "killingpower": 15,
    "horrorrating": 6,
    "cluster": 1

}, {
    "name": "the thing",
    "physicalstrength": 19,
    "fearfactor": 4,
    "killingpower": 11,
    "horrorrating": 7,
    "cluster": 1

}];

//Set constants

var w = 420,
    h = 400,
    padding = 30;

//Create adaptable scales

var xScale = d3.scale.linear()
    .domain([0, d3.max(horror, function (d) {
        return d3.max([d.physicalstrength, d.fearfactor, d.killingpower, d.horrorrating]);
    })])
    .range([padding, w - padding]);

var yScale = d3.scale.linear()
    .domain([0, d3.max(horror, function (d) {
        return d3.max([d.physicalstrength, d.fearfactor, d.killingpower, d.horrorrating]);
    })])
    .range([h - padding, padding]);

//Select the svg
var svg = d3.select("svg");

//Define and set up the tooltip
var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function (d) {
        return d.name;
    });

svg.call(tip);

//Set up the circles
diag_circles = svg.selectAll("circle");

diag_circles.data(horror)
    .enter()
    .append("circle")
    .attr("cx", function(d){return xScale(d.physicalstrength)})
    .attr("cy", function(d){return yScale(d.fearfactor)})
    .attr("r", 10)
    .style("stroke", function(d){if (d.cluster === 1) {return "#1abc9c";} else {return "gray";}})
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);

//Set up the axes

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);

function reDraw() {
    console.log('hi');
    xVar = document.getElementById('xAxisVar').value;
    yVar = document.getElementById('yAxisVar').value;

    d3.selectAll("circle")
        .transition()
        .duration(1000)
        .attr("cx", function (d) {
            return eval("xScale(d." + xVar + ");");
        })
        .attr("cy", function (d) {
            return eval("yScale(d." + yVar + ");");
        });

}