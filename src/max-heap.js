const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
	}

	pop() {
		for (var key in this.root) {
			return this.root.data;
		}
	}

	detachRoot() {
		// delete this.parentNodes[this.root];
		// tmp = this.root;
		this.root = null;
		// return tmp;
		
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {

	}

	isEmpty() {
		return (this.root === null && this.parentNodes.length == 0) ? true : false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (this.isEmpty) this.root = node;
		// let root = detachRoot();
		// restoreRootFromLastInsertedNode(root);
		// return this.root.data;
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
