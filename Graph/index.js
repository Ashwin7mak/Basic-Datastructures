// Graph Implementation
// Adjacency List implementation of undirected graph

// Graph class
class Graph {
    // Defining vertex array
    // Adjacent list
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }

    // Adding new vertex
    addVertex(v) {
        // Initiliazing adjacent list with null array
        this.adjList.set(v, []);
    }

    // Adding edges between two vertices
    addEdge(v, w) {
        // Get the list for vertex v and add edge w
        this.adjList.get(v).push(w);
        // Get the list for vertex w and add edge v
        this.adjList.get(w).push(v);
    }

    // Printing graph
    printGraph() {
        let getKeys = this.adjList.keys();

        for(let i of getKeys) {
            let getValues = this.adjList.get(i);
            let str = '';

            for(let j of getValues) {
                str += j + '';
                console.log(i + '-->' + str);
            }           
        }
    }
};


let graph = new Graph(3);

let vertices = ['A', 'B', 'C'];

for(let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

graph.printGraph();