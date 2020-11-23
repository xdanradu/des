graph = ({
    nodes: Array.from({length:4}, () => ({})),
    links: [
        { source: 0, target: 1 },
        { source: 1, target: 2 },
        { source: 2, target: 0 },
        { source: 1, target: 3 },
        { source: 3, target: 2 },
    ]
});

function generate() {
    let circleRadius = 15;
    let width = 400;
    let height = 200;

    const svg = d3.select('.diagram')
            .append("svg")
            .attr("width", width)
            .attr('height', height),
        link = svg
            .selectAll(".link")
            .data(graph.links)
            .join("line")
            .classed("link", true),
        node = svg.selectAll(".node")
            .data(graph.nodes)
            .join("circle")
            .attr("r", circleRadius)
            .classed("node", true)
            .classed("fixed", d => d.fx !== undefined);

    const simulation = d3
        .forceSimulation()
        .nodes(graph.nodes)
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("link", d3.forceLink(graph.links).distance(70))
        .force('collide', d3.forceCollide([5]).iterations([5]))
        .on("tick", tick);

    const drag = d3
        .drag()
        .on("start", dragstart)
        .on("drag", dragged);

    node.call(drag).on("click", click);

    function tick() {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
        node
            .attr('cx', function (d) {
                return (d.x = Math.max(1, Math.min(width, d.x)));
            })
            .attr('cy', function (d) {
                return (d.y = Math.max(1, Math.min(height, d.y)));
            })
    }

    function click(event, d) {
        delete d.fx;
        delete d.fy;
        d3.select(this).classed("fixed", false);
        simulation.alpha(1).restart();
    }

    function dragstart() {
        d3.select(this).classed("fixed", true);
    }

    function dragged(event, d) {
        d.fx = clamp(event.x, 0, width);
        d.fy = clamp(event.y, 0, height);
        simulation.alpha(1).restart();
    }

    function clamp(x, lo, hi) {
        return x < lo ? lo : x > hi ? hi : x;
    }
}
/*
let svg = d3.select('.diagram')
    .append('svg')
    .attr('height', '500px')
    .attr('width','500px');

var lineFunction = d3.svg.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .interpolate("linear");

var lineData = [ { "x": 1,   "y": 50},  { "x": 120,  "y": 50}, { "x": 120,  "y": 150} ];
svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "#7777ff")
                            .attr("stroke-width", 15)
                            .attr("fill", "none");

*/
generate();
