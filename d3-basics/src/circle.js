let r=15;

//circle
svg.append('circle')
    .attr('id', 'circle')
    .attr('cx', 25)
    .attr('cy', 25)
    .attr('r', r)
    .attr('fill', getRandomColor());

function inc(){
    if(r<=50) r+=10;
    changeCircle(r);
}

function dec(){
    if(r>=10) r-=10;
    changeCircle(r);
}

function changeCircle(r) {
    d3.select('#circle').attr('r', r).attr('fill', getRandomColor());
}
