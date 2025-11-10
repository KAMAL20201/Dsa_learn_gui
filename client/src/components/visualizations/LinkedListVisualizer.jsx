import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, ArrowRight, RotateCcw } from 'lucide-react';

const LinkedListVisualizer = () => {
  const [list, setList] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
  ]);
  const [nextId, setNextId] = useState(5);
  const [highlightedNode, setHighlightedNode] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const insertAtHead = () => {
    const value = inputValue ? parseInt(inputValue) : Math.floor(Math.random() * 100);
    const newNode = { id: nextId, value };
    setList([newNode, ...list]);
    setNextId(nextId + 1);
    setHighlightedNode(nextId);
    setInputValue('');
    setTimeout(() => setHighlightedNode(null), 1000);
  };

  const insertAtTail = () => {
    const value = inputValue ? parseInt(inputValue) : Math.floor(Math.random() * 100);
    const newNode = { id: nextId, value };
    setList([...list, newNode]);
    setNextId(nextId + 1);
    setHighlightedNode(nextId);
    setInputValue('');
    setTimeout(() => setHighlightedNode(null), 1000);
  };

  const deleteNode = (id) => {
    setList(list.filter(node => node.id !== id));
  };

  const reverseList = () => {
    setList([...list].reverse());
  };

  const reset = () => {
    setList([
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 },
      { id: 4, value: 40 },
    ]);
    setNextId(5);
    setHighlightedNode(null);
    setInputValue('');
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Linked List Visualizer</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Visualize singly linked list operations with pointers
        </p>
      </div>

      {/* Controls */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-wrap gap-3">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter value (optional)"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={insertAtHead}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={18} />
            Insert at Head
          </button>
          <button
            onClick={insertAtTail}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Plus size={18} />
            Insert at Tail
          </button>
          <button
            onClick={reverseList}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <RotateCcw size={18} />
            Reverse
          </button>
          <button
            onClick={reset}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div>
      </div>

      {/* Linked List Visualization */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6 overflow-x-auto">
        <div className="flex items-center gap-4 min-w-max">
          {/* Head Label */}
          <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mr-4">
            HEAD
          </div>

          <AnimatePresence mode="popLayout">
            {list.map((node, index) => (
              <motion.div
                key={node.id}
                layout
                initial={{ opacity: 0, scale: 0.5, x: -50 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  backgroundColor: highlightedNode === node.id ? '#3b82f6' : 'transparent'
                }}
                exit={{ opacity: 0, scale: 0.5, x: 50 }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                {/* Node */}
                <div className={`relative group ${highlightedNode === node.id ? 'z-10' : ''}`}>
                  <div className="flex items-center border-2 border-blue-500 rounded-lg overflow-hidden bg-white dark:bg-gray-700">
                    {/* Value Section */}
                    <div className="px-6 py-4 border-r-2 border-blue-500 min-w-[80px] text-center">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Data
                      </div>
                      <div className="text-2xl font-bold">
                        {node.value}
                      </div>
                    </div>

                    {/* Pointer Section */}
                    <div className="px-4 py-4 min-w-[60px] text-center">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Next
                      </div>
                      <ArrowRight className="mx-auto" size={24} />
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteNode(node.id)}
                    className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600"
                  >
                    <Trash2 size={14} />
                  </button>

                  {/* Node Label */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">
                    Node {index}
                  </div>
                </div>

                {/* Arrow between nodes (except last) */}
                {index < list.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mx-2"
                  >
                    <ArrowRight className="text-blue-500" size={32} strokeWidth={3} />
                  </motion.div>
                )}

                {/* NULL indicator for last node */}
                {index === list.length - 1 && (
                  <div className="ml-4 px-4 py-2 border-2 border-gray-400 rounded-lg bg-gray-100 dark:bg-gray-700">
                    <span className="text-gray-600 dark:text-gray-300 font-mono">
                      NULL
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty list indicator */}
          {list.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-4 py-2 border-2 border-gray-400 rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              <span className="text-gray-600 dark:text-gray-300 font-mono">
                NULL (Empty List)
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Info Panel */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Time Complexity</h3>
          <p className="text-sm">Insert at Head: O(1)</p>
          <p className="text-sm">Insert at Tail: O(n)</p>
          <p className="text-sm">Delete: O(n)</p>
          <p className="text-sm">Search: O(n)</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Space Complexity</h3>
          <p className="text-sm">O(n) - n nodes</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">List Info</h3>
          <p className="text-sm">Nodes: {list.length}</p>
          <p className="text-sm">Type: Singly Linked</p>
        </div>
      </div>

      {/* Explanation */}
      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
        <h3 className="font-semibold mb-2 text-yellow-900 dark:text-yellow-100">
          💡 How it works
        </h3>
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          Each node contains <strong>data</strong> and a <strong>pointer</strong> to the next node.
          The last node points to NULL. Unlike arrays, linked lists don't need contiguous memory
          and can grow dynamically. However, accessing elements requires traversing from the head.
        </p>
      </div>
    </div>
  );
};

export default LinkedListVisualizer;
