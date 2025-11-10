import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Plus, Trash2 } from 'lucide-react';
import { useAppStore } from '../../stores/appStore';

const ArrayVisualizer = () => {
  const [array, setArray] = useState([5, 2, 8, 1, 9, 3, 7, 4, 6]);
  const [highlightedIndices, setHighlightedIndices] = useState([]);
  const [comparing, setComparing] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentOperation, setCurrentOperation] = useState('');

  const { animationSpeed } = useAppStore();
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms / animationSpeed));

  // Bubble Sort Visualization
  const bubbleSort = async () => {
    setIsAnimating(true);
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setCurrentOperation(`Comparing ${arr[j]} and ${arr[j + 1]}`);
        setComparing([j, j + 1]);
        await delay(500);

        if (arr[j] > arr[j + 1]) {
          // Swap
          setCurrentOperation(`Swapping ${arr[j]} and ${arr[j + 1]}`);
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await delay(500);
        }

        setComparing([]);
      }
      setSorted(prev => [...prev, n - 1 - i]);
    }
    setSorted(prev => [...prev, 0]);
    setCurrentOperation('Sorting complete!');
    setIsAnimating(false);
  };

  // Insert element
  const insertElement = () => {
    const newValue = Math.floor(Math.random() * 100);
    setArray([...array, newValue]);
    setHighlightedIndices([array.length]);
    setTimeout(() => setHighlightedIndices([]), 1000);
  };

  // Delete element
  const deleteElement = (index) => {
    setArray(array.filter((_, i) => i !== index));
  };

  // Reset
  const reset = () => {
    setArray([5, 2, 8, 1, 9, 3, 7, 4, 6]);
    setHighlightedIndices([]);
    setComparing([]);
    setSorted([]);
    setCurrentOperation('');
    setIsAnimating(false);
  };

  const getBarColor = (index) => {
    if (sorted.includes(index)) return 'bg-green-500';
    if (comparing.includes(index)) return 'bg-yellow-500';
    if (highlightedIndices.includes(index)) return 'bg-blue-500';
    return 'bg-primary-500';
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Array Visualizer</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Interactive array operations and sorting visualization
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={bubbleSort}
          disabled={isAnimating}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isAnimating ? (
            <>
              <Pause size={18} />
              Sorting...
            </>
          ) : (
            <>
              <Play size={18} />
              Start Bubble Sort
            </>
          )}
        </button>

        <button
          onClick={insertElement}
          disabled={isAnimating}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
        >
          <Plus size={18} />
          Insert Random
        </button>

        <button
          onClick={reset}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <RotateCcw size={18} />
          Reset
        </button>
      </div>

      {/* Current Operation Display */}
      {currentOperation && (
        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
          <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
            {currentOperation}
          </p>
        </div>
      )}

      {/* Array Visualization */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6">
        <div className="flex items-end justify-center gap-2 h-64">
          <AnimatePresence mode="popLayout">
            {array.map((value, index) => (
              <motion.div
                key={`${value}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Bar */}
                <motion.div
                  className={`w-12 ${getBarColor(index)} rounded-t-lg relative cursor-pointer transition-colors`}
                  style={{ height: `${value * 2.5}px` }}
                  animate={{
                    scale: comparing.includes(index) ? 1.1 : 1,
                  }}
                >
                  {/* Value Label */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 font-bold text-sm">
                    {value}
                  </div>

                  {/* Index Label */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                    {index}
                  </div>

                  {/* Delete button */}
                  <button
                    onClick={() => deleteElement(index)}
                    disabled={isAnimating}
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 text-white p-1 rounded"
                  >
                    <Trash2 size={12} />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary-500 rounded"></div>
          <span>Unsorted</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span>Comparing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          <span>Highlighted</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span>Sorted</span>
        </div>
      </div>

      {/* Info Panel */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Time Complexity</h3>
          <p className="text-sm">Best: O(n)</p>
          <p className="text-sm">Average: O(n²)</p>
          <p className="text-sm">Worst: O(n²)</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Space Complexity</h3>
          <p className="text-sm">O(1) - In place</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Array Size</h3>
          <p className="text-sm">{array.length} elements</p>
        </div>
      </div>
    </div>
  );
};

export default ArrayVisualizer;
