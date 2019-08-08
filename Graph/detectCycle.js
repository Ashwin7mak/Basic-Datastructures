// Graph Implementation

class Graph {
    // Defining Adjacent list using object
    constructor() {
        this.adjList = {};
    }
    

    addVertex(v) {
        this.adjList[v] = [];
    }

    addEdge(v, w) {
        this.adjList[v].push(w);
    }

    printGraph() {
        let getKeys = Object.keys(this.adjList);

        for (let i of getKeys) {
            let getValues = Object.values(this.adjList[i]);
            let str = '';

            for (let j of getValues) {
                str += j + '';
                console.log(i + '-->' + str);
            }
        }
    }
}


const g1 = new Graph();

g1.addVertex('A');
g1.addVertex('B');
g1.addVertex('C');
g1.addVertex('D');
g1.addVertex('E');

g1.addEdge('A', 'B');
g1.addEdge('A', 'C');
g1.addEdge('A', 'D');
g1.addEdge('B', 'D');
g1.addEdge('C', 'E');
g1.addEdge('D', 'E');
g1.addEdge('E', 'B');

g1.printGraph();

console.log("-->", g1);


