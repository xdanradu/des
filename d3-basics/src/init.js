let width = 285;
let height = 250;
const svg = d3.select('.diagram')
    .append("svg")
    .classed('canvas', true)
    .attr("width", width)
    .attr('height', height);

colors = ['#7777ff', 'crimson', 'orange', 'navy', 'darkgreen'];
function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}








