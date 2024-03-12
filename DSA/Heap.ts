abstract class Heap {
	private heapArray: number[];
	abstract compare(firstValue: number, secondValue: number): boolean;

	constructor() {
		this.heapArray = [];
	}

	public getHeapArray(): number[] {
		return this.heapArray;
	}

	public insert(value: number): void {
		this.heapArray.push(value);
		let index = this.getHeapArray().length - 1;

		while (
			this.hasParent(index) &&
			this.compare(
				this.heapArray[index],
				this.heapArray[this.getParentIndex(index)]
			)
		) {
			const parentIndex = this.getParentIndex(index);
			this.swap(index, parentIndex);
			index = parentIndex;
		}
	}

	public remove(value: number): void {
		let indexToRemove = this.heapArray.indexOf(value);
		if (indexToRemove === -1) return;

		this.swap(indexToRemove, this.heapArray.length - 1);
		this.heapArray.pop();

		if (indexToRemove < this.heapArray.length) {
			this.heapify(indexToRemove);
		}
	}

	private heapify(index: number): void {
		while (true) {
			let compareIndex = index;
			const leftChildIndex = this.getLeftChildIndex(index);
			const rightChildIndex = this.getRightChildIndex(index);

			if (
				this.hasLeftChild(index) &&
				this.compare(
					this.heapArray[leftChildIndex],
					this.heapArray[compareIndex]
				)
			) {
				compareIndex = leftChildIndex;
			}

			if (
				this.hasRightChild(index) &&
				this.compare(
					this.heapArray[rightChildIndex],
					this.heapArray[compareIndex]
				)
			) {
				compareIndex = rightChildIndex;
			}

			if (compareIndex === index) break;

			this.swap(index, compareIndex);
			index = compareIndex;
		}
	}

	protected peekTop(): number | undefined {
		if (this.heapArray.length === 0) return undefined;
		return this.heapArray[0];
	}

	private swap(index1: number, index2: number): void {
		[this.heapArray[index1], this.heapArray[index2]] = [
			this.heapArray[index2],
			this.heapArray[index1],
		];
	}

	private getParentIndex(index: number): number {
		return Math.floor((index - 1) / 2);
	}

	private getLeftChildIndex(index: number): number {
		return 2 * index + 1;
	}
	private getRightChildIndex(index: number): number {
		return 2 * index + 2;
	}
	private hasParent(index: number): boolean {
		return this.getParentIndex(index) >= 0;
	}
	private hasLeftChild(index: number): boolean {
		return this.getLeftChildIndex(index) < this.heapArray.length;
	}
	private hasRightChild(index: number): boolean {
		return this.getRightChildIndex(index) < this.heapArray.length;
	}
}

class MinHeap extends Heap {
	compare(firstValue: number, secondValue: number): boolean {
		return firstValue < secondValue;
	}

	getMinValue() {
		return this.peekTop();
	}
}

class MaxHeap extends Heap {
	compare(firstValue: number, secondValue: number): boolean {
		return secondValue < firstValue;
	}

	getMaxValue() {
		return this.peekTop();
	}
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(15);
minHeap.insert(5);
minHeap.insert(20);
console.log(minHeap.getMinValue());
console.log(minHeap.getHeapArray());
