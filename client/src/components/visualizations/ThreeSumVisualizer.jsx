import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

const ThreeSumVisualizer = ({ onStepChange }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [inputArray, setInputArray] = useState([-1, 0, 1, 2, -1, -4]);
  const [customInput, setCustomInput] = useState('-1,0,1,2,-1,-4');

  // Code line mappings for different languages
  const getCodeLineMapping = (stepType, language = 'java') => {
    const mappings = {
      java: {
        initialize: [2, 3],
        outerLoop: [6],
        skipDuplicates: [8],
        twoPointers: [11, 12],
        innerLoop: [15],
        calculateSum: [17],
        checkSum: [20],
        addTriplet: [22],
        skipLeftDuplicates: [25],
        skipRightDuplicates: [27],
        moveLeft: [32],
        moveRight: [35],
        return: [41]
      },
      python: {
        initialize: [3, 4],
        outerLoop: [7],
        skipDuplicates: [9, 10],
        twoPointers: [13, 14],
        innerLoop: [17],
        calculateSum: [19],
        checkSum: [22],
        addTriplet: [24],
        skipLeftDuplicates: [27, 28],
        skipRightDuplicates: [30, 31],
        moveLeft: [36],
        moveRight: [39],
        return: [43]
      },
      cpp: {
        initialize: [4, 5],
        outerLoop: [8],
        skipDuplicates: [10],
        twoPointers: [13, 14],
        innerLoop: [17],
        calculateSum: [19],
        checkSum: [22],
        addTriplet: [24],
        skipLeftDuplicates: [27],
        skipRightDuplicates: [29],
        moveLeft: [35],
        moveRight: [38],
        return: [44]
      }
    };

    return mappings[language]?.[stepType] || [];
  };

  // Generate steps for the 3Sum algorithm
  const generateSteps = (arr) => {
    const steps = [];
    const nums = [...arr].sort((a, b) => a - b);
    const result = [];

    // Initial step - show sorted array
    steps.push({
      description: 'Start: Sort the array and find all unique triplets that sum to 0',
      array: nums,
      sortedArray: nums,
      currentI: null,
      leftPointer: null,
      rightPointer: null,
      currentSum: null,
      triplets: [],
      highlightIndices: [],
      codeExplanation: 'First, sort the array to enable the two-pointer technique',
      codeLineType: 'initialize'
    });

    // Outer loop: fix first element
    for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicates for i
      if (i > 0 && nums[i] === nums[i - 1]) {
        steps.push({
          description: `Skipping duplicate value ${nums[i]} at index ${i}`,
          array: nums,
          sortedArray: nums,
          currentI: i,
          leftPointer: null,
          rightPointer: null,
          currentSum: null,
          triplets: [...result],
          highlightIndices: [i, i - 1],
          codeExplanation: `Skip duplicate to avoid duplicate triplets: nums[${i}] == nums[${i - 1}]`,
          codeLineType: 'skipDuplicates'
        });
        continue;
      }

      // Fix first element
      steps.push({
        description: `Fix first element at index ${i}: value = ${nums[i]}`,
        array: nums,
        sortedArray: nums,
        currentI: i,
        leftPointer: null,
        rightPointer: null,
        currentSum: null,
        triplets: [...result],
        highlightIndices: [i],
        codeExplanation: `Fix nums[${i}] = ${nums[i]}, now find two numbers that sum to ${-nums[i]}`,
        codeLineType: 'outerLoop'
      });

      let left = i + 1;
      let right = nums.length - 1;

      // Initialize two pointers
      steps.push({
        description: `Initialize two pointers: left = ${left}, right = ${right}`,
        array: nums,
        sortedArray: nums,
        currentI: i,
        leftPointer: left,
        rightPointer: right,
        currentSum: null,
        triplets: [...result],
        highlightIndices: [i, left, right],
        codeExplanation: `Set left pointer after i and right pointer at the end`,
        codeLineType: 'twoPointers'
      });

      // Two pointer approach
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        steps.push({
          description: `Calculate sum: ${nums[i]} + ${nums[left]} + ${nums[right]} = ${sum}`,
          array: nums,
          sortedArray: nums,
          currentI: i,
          leftPointer: left,
          rightPointer: right,
          currentSum: sum,
          triplets: [...result],
          highlightIndices: [i, left, right],
          codeExplanation: `nums[${i}] + nums[${left}] + nums[${right}] = ${sum}`,
          codeLineType: 'calculateSum'
        });

        if (sum === 0) {
          // Found a triplet
          result.push([nums[i], nums[left], nums[right]]);

          steps.push({
            description: `Found triplet: [${nums[i]}, ${nums[left]}, ${nums[right]}]`,
            array: nums,
            sortedArray: nums,
            currentI: i,
            leftPointer: left,
            rightPointer: right,
            currentSum: sum,
            triplets: [...result],
            highlightIndices: [i, left, right],
            foundTriplet: true,
            codeExplanation: `Sum equals 0! Add [${nums[i]}, ${nums[left]}, ${nums[right]}] to result`,
            codeLineType: 'addTriplet'
          });

          // Skip duplicates for left pointer
          const leftBeforeSkip = left;
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }

          if (left > leftBeforeSkip) {
            steps.push({
              description: `Skip duplicate left values`,
              array: nums,
              sortedArray: nums,
              currentI: i,
              leftPointer: left,
              rightPointer: right,
              currentSum: null,
              triplets: [...result],
              highlightIndices: [i, leftBeforeSkip, left],
              codeExplanation: `Skip duplicates on the left to avoid duplicate triplets`,
              codeLineType: 'skipLeftDuplicates'
            });
          }

          // Skip duplicates for right pointer
          const rightBeforeSkip = right;
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          if (right < rightBeforeSkip) {
            steps.push({
              description: `Skip duplicate right values`,
              array: nums,
              sortedArray: nums,
              currentI: i,
              leftPointer: left,
              rightPointer: right,
              currentSum: null,
              triplets: [...result],
              highlightIndices: [i, right, rightBeforeSkip],
              codeExplanation: `Skip duplicates on the right to avoid duplicate triplets`,
              codeLineType: 'skipRightDuplicates'
            });
          }

          left++;
          right--;
        } else if (sum < 0) {
          // Sum too small, move left pointer right
          steps.push({
            description: `Sum ${sum} < 0: Move left pointer right to increase sum`,
            array: nums,
            sortedArray: nums,
            currentI: i,
            leftPointer: left,
            rightPointer: right,
            currentSum: sum,
            triplets: [...result],
            highlightIndices: [i, left, right],
            codeExplanation: `Sum is too small, move left pointer right: ${left} → ${left + 1}`,
            codeLineType: 'moveLeft'
          });
          left++;
        } else {
          // Sum too large, move right pointer left
          steps.push({
            description: `Sum ${sum} > 0: Move right pointer left to decrease sum`,
            array: nums,
            sortedArray: nums,
            currentI: i,
            leftPointer: left,
            rightPointer: right,
            currentSum: sum,
            triplets: [...result],
            highlightIndices: [i, left, right],
            codeExplanation: `Sum is too large, move right pointer left: ${right} → ${right - 1}`,
            codeLineType: 'moveRight'
          });
          right--;
        }
      }
    }

    // Final step
    steps.push({
      description: `Complete! Found ${result.length} unique triplet${result.length !== 1 ? 's' : ''}`,
      array: nums,
      sortedArray: nums,
      currentI: null,
      leftPointer: null,
      rightPointer: null,
      currentSum: null,
      triplets: [...result],
      highlightIndices: [],
      codeExplanation: `Algorithm complete. Return all ${result.length} unique triplets`,
      codeLineType: 'return'
    });

    return steps;
  };

  const steps = isStarted ? generateSteps(inputArray) : [];
  const stepData = steps[currentStep];

  // Notify parent component when step changes
  useEffect(() => {
    if (onStepChange && stepData) {
      onStepChange({
        step: currentStep,
        stepData: stepData,
        getHighlightedLines: (language) => getCodeLineMapping(stepData.codeLineType, language)
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  const handleStart = () => {
    try {
      const arr = customInput.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));

      if (arr.length < 3) {
        alert('Please enter at least 3 numbers');
        return;
      }

      setInputArray(arr);
      setIsStarted(true);
      setCurrentStep(0);
    } catch (error) {
      alert('Invalid input format. Please use comma-separated numbers.');
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsStarted(false);
    setCustomInput('-1,0,1,2,-1,-4');
    setInputArray([-1, 0, 1, 2, -1, -4]);
  };

  const getArrayItemColor = (index) => {
    if (!stepData) return 'bg-blue-500';

    if (stepData.foundTriplet && stepData.highlightIndices.includes(index)) {
      return 'bg-green-500';
    }

    if (index === stepData.currentI) {
      return 'bg-purple-500';
    }

    if (index === stepData.leftPointer) {
      return 'bg-yellow-500';
    }

    if (index === stepData.rightPointer) {
      return 'bg-orange-500';
    }

    if (stepData.highlightIndices.includes(index)) {
      return 'bg-blue-400';
    }

    return 'bg-gray-400';
  };

  const getPointerLabel = (index) => {
    const labels = [];
    if (index === stepData?.currentI) labels.push('i');
    if (index === stepData?.leftPointer) labels.push('L');
    if (index === stepData?.rightPointer) labels.push('R');
    return labels.join(',');
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          3Sum Problem
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Array (comma-separated)
            </label>
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              disabled={isStarted}
              placeholder="e.g., -1,0,1,2,-1,-4"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50"
            />
          </div>

          <div className="flex gap-3">
            {!isStarted ? (
              <button
                onClick={handleStart}
                className="flex items-center gap-2 px-6 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition-all"
              >
                <Play size={20} />
                Start Visualization
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-6 py-2 rounded-lg font-medium bg-gray-600 text-white hover:bg-gray-700 transition-all"
              >
                <RotateCcw size={20} />
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Visualization */}
      {isStarted && stepData && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-100 dark:bg-gray-700 px-6 py-3 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Step {currentStep + 1} of {steps.length}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {stepData.description}
              </span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 space-y-6">
            {/* Array Visualization */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Sorted Array: [{stepData.sortedArray.join(', ')}]
              </h4>

              <div className="flex items-start gap-3 flex-wrap justify-center mb-6">
                {stepData.sortedArray.map((num, index) => (
                  <motion.div
                    key={index}
                    layout
                    animate={{
                      scale: stepData.highlightIndices.includes(index) ? 1.1 : 1,
                      y: stepData.highlightIndices.includes(index) ? -8 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    {/* Index Label */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400">
                      [{index}]
                    </div>

                    {/* Value Box */}
                    <div
                      className={`w-14 h-14 rounded-lg ${getArrayItemColor(index)} text-white flex items-center justify-center text-xl font-bold shadow-lg transition-all duration-300`}
                    >
                      {num}
                    </div>

                    {/* Pointer Labels */}
                    {getPointerLabel(index) && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 dark:text-gray-300"
                      >
                        ↑ {getPointerLabel(index)}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Pointer Legend */}
              <div className="flex gap-4 justify-center mb-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-purple-500"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">i (fixed)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-yellow-500"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">left</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-orange-500"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">right</span>
                </div>
              </div>

              {/* Current Operation Info */}
              {stepData.currentSum !== null && (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Current Sum</div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {stepData.currentI !== null && stepData.leftPointer !== null && stepData.rightPointer !== null && (
                        <>
                          {stepData.sortedArray[stepData.currentI]} + {stepData.sortedArray[stepData.leftPointer]} + {stepData.sortedArray[stepData.rightPointer]} = {stepData.currentSum}
                        </>
                      )}
                    </div>
                    {stepData.currentSum !== 0 && (
                      <div className={`text-sm mt-2 ${stepData.currentSum < 0 ? 'text-yellow-600 dark:text-yellow-400' : 'text-orange-600 dark:text-orange-400'}`}>
                        {stepData.currentSum < 0 ? '↑ Too small, move left pointer →' : '↓ Too large, move right pointer ←'}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Found Triplet */}
              {stepData.foundTriplet && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-2 border-green-500 dark:border-green-700"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Check size={24} className="text-green-600 dark:text-green-400" />
                    <span className="text-lg font-bold text-green-900 dark:text-green-100">
                      Triplet Found!
                    </span>
                  </div>
                  <p className="text-green-800 dark:text-green-200">
                    [{stepData.sortedArray[stepData.currentI]}, {stepData.sortedArray[stepData.leftPointer]}, {stepData.sortedArray[stepData.rightPointer]}] = 0
                  </p>
                </motion.div>
              )}
            </div>

            {/* Found Triplets */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Found Triplets ({stepData.triplets.length})
              </h4>

              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 min-h-[100px]">
                {stepData.triplets.length === 0 ? (
                  <div className="text-center text-gray-500 dark:text-gray-400 italic">
                    No triplets found yet
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <AnimatePresence>
                      {stepData.triplets.map((triplet, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="rounded-lg p-3 border-2 border-green-500 bg-green-50 dark:bg-green-900/20"
                        >
                          <div className="font-mono font-bold text-gray-900 dark:text-white text-center">
                            [{triplet.join(', ')}]
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>

            {/* Code Explanation */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
                What's happening:
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                {stepData.codeExplanation}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="bg-gray-50 dark:bg-gray-700/50 px-6 py-4 border-t border-gray-200 dark:border-gray-600 flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <span className="text-sm text-gray-600 dark:text-gray-400">
              {currentStep + 1} / {steps.length}
            </span>

            <button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Algorithm Explanation */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
          Algorithm Explanation
        </h4>
        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <strong>Approach:</strong> Sorting + Two Pointers
          </p>
          <p>
            <strong>Time Complexity:</strong> O(n²) - Sorting O(n log n) + nested iteration O(n²)
          </p>
          <p>
            <strong>Space Complexity:</strong> O(1) or O(n) - Depending on sorting implementation
          </p>
          <p className="pt-2">
            <strong>How it works:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>First, sort the array to enable two-pointer technique</li>
            <li>Fix the first element (i) and use two pointers for remaining elements</li>
            <li>Left pointer starts after i, right pointer at the end</li>
            <li>If sum = 0: found triplet, skip duplicates, move both pointers</li>
            <li>If sum {'<'} 0: move left pointer right (increase sum)</li>
            <li>If sum {'>'} 0: move right pointer left (decrease sum)</li>
            <li>Skip duplicate values to avoid duplicate triplets</li>
          </ul>
          <p className="pt-2">
            <strong>Why it's efficient:</strong> By sorting first, we can use two pointers to find pairs in O(n) time, making the overall complexity O(n²) instead of O(n³)!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeSumVisualizer;
