class Graph {

    adjList: Map<number, number[]>;

    constructor() {
        this.adjList = new Map();
    }

   
    private addVertex(vertex: number) {
        this.adjList.set(vertex, []);
    }

   
    addEdge(vertex: [number, number]) {
        if (!this.adjList.has(vertex[0])) {
            this.addVertex(vertex[0]);
        }

        this.adjList.get(vertex[0])!.push(vertex[1]);
    }

    printGraph() {
        this.adjList.forEach((value, key) => {
          console.log(`${key} -> ${value.join(", ")}`);
        });
     }
}


function canFinish(numCourses: number, prerequisites: [number, number][]): boolean {
    let graph = new Graph();

    for (let i of prerequisites) {
        graph.addEdge(i)
    }

    graph.printGraph()

    
    const isCyclicUtil = (idx: number, visited: boolean[], recStack: boolean[]): boolean => {
        if (recStack[idx]) return true
        if (visited[idx]) return false

        recStack[idx] = true
        visited[idx] = true

        if (graph.adjList.has(idx)) {
            for (let c of graph.adjList.get(idx)!) {
                if (isCyclicUtil(c, visited, recStack)) {
                    return true
                }
            }
        }

        recStack[idx] = false

        return false
    }

    function isCyclic() {

        //* checks if node was visited previously 
        let visited = new Array(numCourses).fill(false);
        //* checks if node has to be visited
        let recStack = new Array(numCourses).fill(false);

        for (let i = 0; i < numCourses; i++)
            if (isCyclicUtil(i, visited, recStack))
                return true;
  
        return false;
    }

    return !isCyclic()

};


console.log((canFinish(3, [[1,0], [0,2]])))