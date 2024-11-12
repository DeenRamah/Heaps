// heaps/main.ts

import { MinHeap } from './MinHeap';
import { MaxHeap } from './MaxHeap';
import { BinomialHeap } from './BinomialHeap';
import { FibonacciHeap } from './FibonacciHeap';

// Test MinHeap
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
console.log("MinHeap extractMin:", minHeap.extractMin()); // Should return 5

// Test MaxHeap
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
console.log("MaxHeap extractMax:", maxHeap.extractMax()); // Should return 20

// Test BinomialHeap
const binomialHeap = new BinomialHeap();
binomialHeap.insert(10);
binomialHeap.insert(5);
console.log("BinomialHeap extractMin:", binomialHeap.extractMin()); // Implementation needed

// Test FibonacciHeap
const fibonacciHeap = new FibonacciHeap();
fibonacciHeap.insert(10);
fibonacciHeap.insert(5);
console.log("FibonacciHeap extractMin:", fibonacciHeap.extractMin()); // Implementation needed
