class TreeNode {
	value: number;
	children: TreeNode[];

	constructor(value: number, children: TreeNode[] = []) {
		this.value = value;
		this.children = children;
	}
}

const rootNode = new TreeNode(1, [
	new TreeNode(2, [new TreeNode(4), new TreeNode(5)]),
	new TreeNode(3, [new TreeNode(6), new TreeNode(7)]),
]);

const targetValue = 6;

const depthFirstSearch = (
	rootNode: TreeNode | null,
	targetValue: number
): boolean => {
	if (rootNode == null) return false;

	if (rootNode.value === targetValue) {
		return true;
	}

	for (const child of rootNode.children) {
		if (depthFirstSearch(child, targetValue)) return true;
	}
	return false;
};

const breadthFirstSearch = (
	rootNode: TreeNode | null,
	targetValue: number
): boolean => {
	if (rootNode == null) return false;

	const queue: TreeNode[] = [];
	queue.push(rootNode);

	while (queue.length > 0) {
		// remove first element from queue, similar method to pop which removes the last element from a stack
		const currentNode = queue.shift();

		if (currentNode.value === targetValue) return true;

		if (currentNode.children) {
			for (const child of currentNode.children) {
				queue.push(child);
			}
		}
	}
	return false;
};

console.log(depthFirstSearch(rootNode, targetValue));
