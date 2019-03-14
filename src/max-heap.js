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
		if(this.isEmpty()) return;
		// let rot = detachRoot();
		// restoreRootFromLastInsertedNode(rot);
		// return rot.data;
	}

	detachRoot() {
		// delete this.parentNodes[this.root];
		// tmp = this.root;
		this.root = null;
		// return tmp;
		
	}

	restoreRootFromLastInsertedNode(detached) {
		// this.root = this.parentNodes.pop();
	}

	size() {
		return this.heap;
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
		
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
