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
		if (this.isEmpty()) return;
		let rot = detachRoot();
		restoreRootFromLastInsertedNode(rot);
		return rot.data;
	}

	detachRoot() {
		let tmp = this.root; // ссылка
		let detachedRoot;
		this.root = null;
		
		if(tmp == this.parentNodes[0]) {
			this.parentNodes.shift()
		}
		
		return tmp;

	}

	restoreRootFromLastInsertedNode(detached) {
		// this.root = this.parentNodes.pop();
	}

	size() {

		function count(node) {
			if (node == null) {
				return 0;
			}
			return 1 + count(node.left) + count(node.right);
		}
		return count(this.root);
	}

	isEmpty() {
		if (this.size()) {
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
		if(node.parent == null) {
			this.root = node;
			return;
		}
		if (node.priority > node.parent.priority) {
            let idNode = this.parentNodes.indexOf(node);
            let idPar = this.parentNodes.indexOf(node.parent);
            if(~idNode) this.parentNodes[idNode] = node.parent;
            if(~idPar) this.parentNodes[idPar] = node;

			node.swapWithParent();
			return this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {

	}
}


module.exports = MaxHeap;
