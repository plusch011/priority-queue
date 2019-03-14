const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.heap = new MaxHeap;
		this.maxSize = maxSize;
	}

	push(data, priority) {
		this.heap.push(data, priority);
	}

	shift() {
		this.heap.pop();
		
	}

	size() {
		return this.heap;
	}

	isEmpty() {
		for (let key in this.heap) {
			return;
		}
		return true;
	}
}

module.exports = PriorityQueue;
