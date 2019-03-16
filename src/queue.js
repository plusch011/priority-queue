const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.heap = new MaxHeap;
		this.maxSize = maxSize;
	}

	push(data, priority) {
		if(this.size() == this.maxSize) throw new Error('Error: max size!');
		this.heap.push(data, priority);
	}

	shift() {
		if(this.heap.root == null) throw new Error('Error: queue is empty');
		return this.heap.pop();
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		if(this.heap.size()) {
			return false;
		}
		return true;
	}
}

module.exports = PriorityQueue;
