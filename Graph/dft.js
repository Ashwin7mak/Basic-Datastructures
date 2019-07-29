// Graph Implementation
// Depth First Traversal implementation of undirected graph
/*           A
            / \
          B     C
         /  \     \
        D    E     F
*/

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

        for (let i of getKeys) {
            let getValues = this.adjList.get(i);
            let str = '';

            for (let j of getValues) {
                str += j + '';
                console.log(i + '->' + str);
            }
        }
    }

    // Depth First Traversal
    dft(v) {
        // Visited array to keep track of visited vertices
        let visited = [];

        for(let i = 0; i < visited.length; i++) {
            visited[i] = false;
        }
        
        this.dftRecursiveFunction(v, visited);
    }

    // Recursive function which process and explore 
    // all the adjacent vertex of the vertex with which it is called 
    dftRecursiveFunction(v, visited) {
        // Set the visited of v to true
        visited[v] = true;
        console.log("Current Vertex", v);
        // Get the adjacent list(neighbor's) of currentElement
        let getAdjList = this.adjList.get(v);

        // Loop through the list of vertices
        // Recursively call the neighbors of each of them
        for(let i in getAdjList) {
            let neighbor = getAdjList[i];

            if(!visited[neighbor]) {
                this.dftRecursiveFunction(neighbor, visited);
            }
        }
    }

};

let graph = new Graph(6);

let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');


graph.printGraph();

console.log("---- DFT ----");
graph.dft('A');   // A B D E C F