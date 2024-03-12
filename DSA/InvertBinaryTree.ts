// Leetcode #226
// Can be solved using either Depth First Search or Breadth First Search

// DFS
const invertBinaryTreeDFS = (root: TreeNode) => {
	if (root == null) return null;

	const tempLeft = invertBinaryTreeDFS(root.left);
	root.left = invertBinaryTreeDFS(root.right);
	root.right = tempLeft;

	return root;
};

// BFS
const invertBinaryTreeBFS = (root: TreeNode) => {
	if (root == null) return null;

	const queue = [root];
	while (queue.length > 0) {
		const currentValue = queue.shift();
		const tempLeft = currentValue.left;
		currentValue.left = currentValue.right;
		currentValue.right = tempLeft;
		invertBinaryTreeBFS(currentValue.left);
		invertBinaryTreeBFS(currentValue.right);
	}

	return root;
};
