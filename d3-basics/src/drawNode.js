function drawNode(x, y, name, textX, textY, text){
    svg.append("rect")
        .classed('node', true)
        .attr("x", x)
        .attr("y", y)
        .attr("width", 70)
        .attr("height", 30)
        .attr("fill", getRandomColor());
    svg.append('text')
        .classed('node-text', true)
        .attr('x', textX)
        .attr('y', textY)
        .text(text)
        .attr('fill', 'white');
    svg.append('text')
        .attr('x', textX+15)
        .attr('y', textY+27)
        .text(name)
        .attr('fill', 'black');
}
