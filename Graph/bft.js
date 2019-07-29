// Graph Implementation
// Breadth First Traversal implementation of undirected graph
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
                console.log(i + '-->' + str);
            }
        }
    }
    
    // Breadth First Traversal
    bft(v) {
        // Queue array
        let queue = [];
        // Push source vertex into queue
        queue.push(v);
        // Visited array to keep track of visited vertices
        let visited = [];

        for(let i = 0; i < this.noOfVertices; i++) {
            // Setting default value to false
            visited[i] = false;
        }

        while(queue.length > 0) {
            // Get the currentElement from the queue to find its bft
            let currentElement = queue.shift();
            visited[currentElement] = true;
            console.log("Current Vertex", currentElement);
            // Get the adjacent list(neighbor's) of currentElement
            let getAdjList = this.adjList.get(currentElement);

            // Loop through the list of vertices
            // Queue them if they are unvisited
            for(let j in getAdjList) {
                let neighbor = getAdjList[j];

                if (!visited[neighbor]) {
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            }

        }
        console.log("==", queue, visited);
        return queue;
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

console.log("---- BFT ----");
graph.bft('C');