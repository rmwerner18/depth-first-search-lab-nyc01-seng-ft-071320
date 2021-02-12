function findAdjacent(rootNode, vertices, edges) {   
    let adjacentVertices = []
    edges.forEach(e => {
        if (e.includes(rootNode.name)) {
            vertices.forEach(v => {
                if (e.includes(v.name) && v.discovered === null) {
                    adjacentVertices.push(v)
                }
            })
        }
    })
    return adjacentVertices
}

function depthFirstSearch(rootNode, vertices, edges) {
    let stack = [rootNode]
    let searchOrder = []
    while (stack.length > 0) {
        let firstNode = stack.shift()
        firstNode.discovered = true
        searchOrder.push(firstNode)
        let adjacentVertices = findAdjacent(firstNode, vertices, edges)
        stack = [...adjacentVertices, ...stack]
    }
    return searchOrder
}