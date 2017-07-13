/**
 * Created by mcamp on 7/13/17.
 */

// var circle_data = d3.json("../Data/scatter_plot_example_data.json", function(d) { d; });


circle_data = [{"x": 100,
    "y": 300,
    "r": 10},
    {"x": 200,
        "y": 250,
        "r": 10},
    {"x": 300,
        "y": 180,
        "r": 10}]


svg = d3.select("svg");
diag_circles = svg.selectAll("circle");

diag_circles.data(circle_data)
    .enter()
    .append("circle")
    .attr("cx", function(d){return d.x})
    .attr("cy", function(d){return d.y})
    .attr("r", function(d){return d.r});