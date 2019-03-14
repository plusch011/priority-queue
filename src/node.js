class Node {
	constructor(data, priority) {
		[this.parent, this.left, this.right] = Array(3).fill(null);
		Object.assign(this, { data, priority });
	}

	appendChild(node) {
		if (this.left) {
			if (!this.right) this.right = node;
			return;
		}
		this.left = node;
	}

	removeChild(node) {
		if(this.left != node && this.right != node) throw new Error('Error');
		if (this.left == node) this.left = null;
		if (this.right == node) this.right = null;
		this.parent = null;
	}

	remove() {
		if(this.parent == null) return;
		this.parent.removeChild(this);
	}

	swapWithParent() {
		if(this.parent == null) return;

	}
}

module.exports = Node;
