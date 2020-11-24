//P, T, PRE, POST, M0
let PN = {
    P: [ {id: 1, name: 'P1'}, {id: 2, name: 'P2'} ],
    M0: [1, 0, 1, 1]
};

function generate(data) {
    //console.log(typeof data);
    //console.log(data.P[1].name);
    //console.log(data.M0[2]);

    //algorithm

    let result = {
        nodes: [ { id: 1, name: 'M1', tokens: [1, 0, 1, 0] }, { id: 2, name: 'M2', tokens: [1, 1, 1, 0] }],
        links: [ { id: 1, name: 'T1', source: 1, destination: 2  }, { id: 2, name: 'T2', source: 2, destination: 1  } ]
    };
    return result;
}

function getNode(id, nodes) {
    for(let i=0; i<nodes.length; i++ ) {
        if(nodes[i].id === id) {
            return nodes[i];
        }
    }
    return null;
}

let data = generate(PN);
console.log(data);
//d3 source data
for (let i=0; i< data.links.length; i++) {
    let sourceNode = getNode(data.links[i].source, data.nodes);
    let destNode = getNode(data.links[i].destination, data.nodes);
    console.log(`source: ${sourceNode.name}, transition ${data.links[i].name}, dest: ${destNode.name}`);
}


