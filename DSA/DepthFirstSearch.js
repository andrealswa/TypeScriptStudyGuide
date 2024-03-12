class TreeNode {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}
const rootNode = new TreeNode(1, [
    new TreeNode(2, [new TreeNode(4), new TreeNode(5)]),
    new TreeNode(3, [new TreeNode(6), new TreeNode(7)]),
]);
const targetValue = 6;
const depthFirstSearch = (rootNode, targetValue) => {
    if ((rootNode === null || rootNode === void 0 ? void 0 : rootNode.value) === targetValue) {
        return true;
    }
    return false;
};
console.log(depthFirstSearch(rootNode, targetValue));
