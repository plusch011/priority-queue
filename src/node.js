class Node {
	constructor(data, priority) {
		[this.parent, this.left, this.right] = Array(3).fill(null);
		Object.assign(this, {data, priority});
	}

	appendChild(node) {

	}

	removeChild(node) {

	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
