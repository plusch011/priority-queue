class Node {
	constructor(data, priority) {
		[this.parent, this.left, this.right] = Array(3).fill(null);
		Object.assign(this, { data, priority });
	}

	appendChild(node) {
		if (this.left != null) {
			if (!this.right || this.right == null) {
				this.right = node;
				node.parent = this;
				return;
			}
			return;
		}
		this.left = node;
		node.parent = this;
	}

	removeChild(node) {
		if (this.left != node && this.right != node) throw new Error("Error: parent doesn't have this child");
		if (this.left == node) this.left = null;
		if (this.right == node) this.right = null;
		node.parent = null;
	}

	remove() {
		if (this.parent == null) return;
		this.parent.removeChild(this);
	}

	swapWithParent() {
		if (this.parent == null) return;

		let grandson = this; //grandson >> child >> root
		let child = this.parent; 
		let root = this.parent.parent;

		let tmp = Object.assign({}, child);
    	[child.data, child.priority] = [grandson.data, grandson.priority];
    	[grandson.data, grandson.priority] = [tmp.data, tmp.priority];
		
	}
}

module.exports = Node;
