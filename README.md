## Kata-Machine

Clone of the [Kata-Machine](https://github.com/ThePrimeagen/kata-machine/tree/master) repo created by [ThePrimeagen](https://twitch.tv/ThePrimeagen). It is the companion piece to the [Last Algorithms Course You'll Need](https://frontendmasters.com/courses/algorithms/introduction/) on [Frontend Masters](https://frontendmasters.com/).

### How It Works

Make sure you have [Node.js](https://nodejs.org/en/) and yarn installed: `npm install --global yarn`

Clone the repo and install the dependencies

```bash
yarn install
```

Your `ligma.config.js` file should look like this:
```javascript
module.exports = {
    dsa: [
        "LinearSearchList",
        "BinarySearchList",
        "BubbleSort",
        "QuickSort",
        "InsertionSort",
        "MergeSort",
        "TwoCrystalBalls",
        "SinglyLinkedList",
        "DoublyLinkedList",
        "Queue",
        "Stack",
        "ArrayList",
        "Map",
        "LRU",
        "MinHeap",
        "BTPreOrder",
        "BTInOrder",
        "BTPostOrder",
        "BTBFS",
        "CompareBinaryTrees",
        "DFSOnBST",
        "Trie",
        "DFSGraphList",
        "BFSGraphMatrix",
        "BFSGraphList",
        "MazeSolver",
        "DijkstraList",
        "PrimsList",
        "RingBuffer",
    ],
}
```

Create a day of katas, this will use the list in the `ligma.config.js`
```bash
yarn generate
```

This will progressively create folders named

```
src/day1
src/day2
...
```

`yarn generate` will also update the `tsconfig.json` and `jest.config` to point
the latest `day` folder via tspaths.  This allows us to avoid updating anything
for testing each day.

### Testing

After inputting your solution in the `src/dayX` folder, you can run the command `npx jest "TestName"` to run the tests for that specific kata.