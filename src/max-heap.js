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
		let rot = detachRoot();
		restoreRootFromLastInsertedNode(rot);
		return rot.data;
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
		return this.parentNodes.length;
	}

	isEmpty() {
		if(this.parentNodes.length) {
			return false;
		}
		return true;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (!this.size()) {
			this.root = node;
			this.parentNodes.push(node);
			

		} else {
		this.parentNodes[0]
			.appendChild(node);
		this.parentNodes.push(node);
		}

		if (this.parentNodes[0].left != null && this.parentNodes[0].right != null) {
			this.parentNodes.shift();
		}
		
		return;
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
