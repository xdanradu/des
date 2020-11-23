function drawLink(x1, y1, x2, y2, textX, textY, text){
    svg.append("defs")
        .append("marker")
        .attr("id", "arrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 5)
        .attr("refY", 0)
        .attr("markerWidth", 4)
        .attr("markerHeight", 4)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("class","arrowHead")
        .attr("fill", getRandomColor());
    svg.append('line')
        .attr("class", "arrow")
        .attr("marker-end", "url(#arrow)")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr('stroke', getRandomColor())
        .attr('stroke-width', 3);
    svg.append('text').attr('x', textX).attr('y', textY).text(text);
}

