function drawIcon(x, y, value){
    svg.append('text')
        .classed('icon', true)
        .style('font-family', 'Linearicons-Free')
        .attr('font-size', '35px' )
        .text(value)
        .attr('x',x)
        .attr('y',y)
        .attr("fill", getRandomColor());
}
