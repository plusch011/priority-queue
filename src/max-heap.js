const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];

	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if (this.isEmpty()) return;
		let detachedRoot = this.detachRoot();
		this.restoreRootFromLastInsertedNode(detachedRoot);
		this.shiftNodeDown(this.root);
		return detachedRoot.data;
	}

	detachRoot() {
		let detachedRoot = this.root; // ссылка
		this.root = null;

		if (detachedRoot == this.parentNodes[0]) {
			this.parentNodes.shift()
		}

		return detachedRoot;

	}

	restoreRootFromLastInsertedNode(detached) {
		let lastNode = this.parentNodes.pop();

		if (lastNode == undefined) return;

		if (lastNode.parent != null && lastNode.parent.right == lastNode) {
			if (lastNode.parent == detached) {
				this.parentNodes.unshift(lastNode);
			} else {
				this.parentNodes.unshift(lastNode.parent);
			}
		}

		this.root = lastNode;
		lastNode.remove();

		let tmpLeft = detached.left;
		let tmpRight = detached.right;

		if (tmpLeft != null) {
			detached.removeChild(tmpLeft);
			lastNode.appendChild(tmpLeft);
		}
		if (tmpRight != null) {
			detached.removeChild(tmpRight);
			lastNode.appendChild(tmpRight);
		}
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
		if (!this.parentNodes.length) {
			this.root = node;
			this.parentNodes.push(node);

		} else {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
		}

		if (this.parentNodes[0].left != null && this.parentNodes[0].right != null) {
			this.parentNodes.shift();
		}

		return;
	}

	shiftNodeUp(node) {
		if (node.parent == null) {
			this.root = node;
			return;
		}
		if (node.priority > node.parent.priority) {
			let idNode = this.parentNodes.indexOf(node);
			let idPar = this.parentNodes.indexOf(node.parent);
			if (~idNode) this.parentNodes[idNode] = node.parent;
			if (~idPar) this.parentNodes[idPar] = node;

			node.swapWithParent();
			return this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {
		if (node == null) return;

		let leftCh = node.left;
		let rightCh = node.right;
		let child;

		if (leftCh == null) {
			child = rightCh;
		} else if (rightCh == null) {
			child = leftCh;
		} else if (leftCh.priority > rightCh.priority) {
			child = leftCh;
		} else child = rightCh;
		if(child == undefined) return;
		if (node != null && node.priority < child.priority) {

			let idNode = this.parentNodes.indexOf(node);
			let idPar = this.parentNodes.indexOf(child);
			if (~idNode) this.parentNodes[idNode] = child;
			if (~idPar) this.parentNodes[idPar] = node;

			child.swapWithParent();
			if (this.root == node) this.root = child;

			return this.shiftNodeDown(node);
		}
	}
}


module.exports = MaxHeap;
