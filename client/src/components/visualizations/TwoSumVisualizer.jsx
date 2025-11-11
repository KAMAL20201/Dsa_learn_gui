import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

const TwoSumVisualizer = ({ onStepChange }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [inputArray, setInputArray] = useState([2, 7, 11, 15]);
  const [targetValue, setTargetValue] = useState(9);
  const [customInput, setCustomInput] = useState('2,7,11,15');
  const [customTarget, setCustomTarget] = useState('9');

  // Code line mappings for different languages
  const getCodeLineMapping = (stepType, language = 'java') => {
    const mappings = {
      java: {
        initialize: [1, 3],
        loopStart: [6],
        calculateComplement: [7],
        checkComplement: [10],
        found: [10, 11],
        addToMap: [15],
        noSolution: [19]
      },
      python: {
        initialize: [0, 1],
        loopStart: [3],
        calculateComplement: [4],
        checkComplement: [7],
        found: [7, 8],
        addToMap: [11],
        noSolution: [14]
      },
      cpp: {
        initialize: [1, 2],
        loopStart: [5],
        calculateComplement: [6],
        checkComplement: [9],
        found: [9, 10],
        addToMap: [14],
        noSolution: [18]
      }
    };

    return mappings[language]?.[stepType] || [];
  };

  // Generate steps for the Two Sum algorithm
  const generateSteps = (arr, target) => {
    const steps = [];
    const hashMap = {};

    // Initial step
    steps.push({
      description: 'Start: We need to find two numbers that add up to ' + target,
      array: arr,
      currentIndex: null,
      currentValue: null,
      complement: null,
      hashMap: {},
      checking: null,
      found: false,
      result: null,
      highlightIndices: [],
      codeExplanation: 'Initialize an empty hash map to store value -> index pairs',
      codeLineType: 'initialize'
    });

    // Iterate through array
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      const complement = target - num;

      // Step: Check current number
      steps.push({
        description: `Checking index ${i}: value = ${num}`,
        array: arr,
        currentIndex: i,
        currentValue: num,
        complement: complement,
        hashMap: { ...hashMap },
        checking: 'current',
        found: false,
        result: null,
        highlightIndices: [i],
        codeExplanation: `Calculate complement: ${target} - ${num} = ${complement}`,
        codeLineType: 'calculateComplement'
      });

      // Step: Check if complement exists in hash map
      if (hashMap.hasOwnProperty(complement)) {
        const complementIndex = hashMap[complement];

        steps.push({
          description: `Found complement ${complement} at index ${complementIndex}!`,
          array: arr,
          currentIndex: i,
          currentValue: num,
          complement: complement,
          hashMap: { ...hashMap },
          checking: 'found',
          found: true,
          result: [complementIndex, i],
          highlightIndices: [complementIndex, i],
          codeExplanation: `Success! nums[${complementIndex}] + nums[${i}] = ${arr[complementIndex]} + ${num} = ${target}`,
          codeLineType: 'found'
        });

        // Final step
        steps.push({
          description: `Solution: indices [${complementIndex}, ${i}]`,
          array: arr,
          currentIndex: null,
          currentValue: null,
          complement: null,
          hashMap: { ...hashMap },
          checking: null,
          found: true,
          result: [complementIndex, i],
          highlightIndices: [complementIndex, i],
          codeExplanation: `Return [${complementIndex}, ${i}] as the answer`,
          codeLineType: 'found'
        });

        return steps;
      } else {
        // Step: Add to hash map
        hashMap[num] = i;

        steps.push({
          description: `Complement ${complement} not found. Store ${num} -> ${i} in hash map`,
          array: arr,
          currentIndex: i,
          currentValue: num,
          complement: complement,
          hashMap: { ...hashMap },
          checking: 'not_found',
          found: false,
          result: null,
          highlightIndices: [i],
          codeExplanation: `Add mapping: ${num} -> index ${i} to hash map for future lookups`,
          codeLineType: 'addToMap'
        });
      }
    }

    // No solution found
    steps.push({
      description: 'No solution found',
      array: arr,
      currentIndex: null,
      currentValue: null,
      complement: null,
      hashMap: { ...hashMap },
      checking: null,
      found: false,
      result: null,
      highlightIndices: [],
      codeExplanation: 'Completed iteration without finding a valid pair',
      codeLineType: 'noSolution'
    });

    return steps;
  };

  const steps = isStarted ? generateSteps(inputArray, targetValue) : [];
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
  }, [currentStep, stepData, onStepChange]);

  const handleStart = () => {
    try {
      const arr = customInput.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
      const target = parseInt(customTarget);

      if (arr.length < 2) {
        alert('Please enter at least 2 numbers');
        return;
      }

      if (isNaN(target)) {
        alert('Please enter a valid target number');
        return;
      }

      setInputArray(arr);
      setTargetValue(target);
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
    setCustomInput('2,7,11,15');
    setCustomTarget('9');
    setInputArray([2, 7, 11, 15]);
    setTargetValue(9);
  };

  const getArrayItemColor = (index) => {
    if (!stepData) return 'bg-blue-500';

    if (stepData.found && stepData.result && stepData.result.includes(index)) {
      return 'bg-green-500';
    }

    if (stepData.highlightIndices.includes(index)) {
      if (stepData.checking === 'found') {
        return 'bg-green-500';
      }
      return 'bg-yellow-500';
    }

    return 'bg-blue-500';
  };

  const getArrayItemTextColor = (index) => {
    if (!stepData) return 'text-white';

    if (stepData.found && stepData.result && stepData.result.includes(index)) {
      return 'text-white';
    }

    if (stepData.highlightIndices.includes(index)) {
      return 'text-white';
    }

    return 'text-white';
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Two Sum Problem
        </h3>

        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Array (comma-separated)
              </label>
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                disabled={isStarted}
                placeholder="e.g., 2,7,11,15"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Target
              </label>
              <input
                type="number"
                value={customTarget}
                onChange={(e) => setCustomTarget(e.target.value)}
                disabled={isStarted}
                placeholder="e.g., 9"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none disabled:opacity-50"
              />
            </div>
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
                Array: nums = [{inputArray.join(', ')}], target = {targetValue}
              </h4>

              <div className="flex items-start gap-4 flex-wrap justify-center mb-6">
                {inputArray.map((num, index) => (
                  <motion.div
                    key={index}
                    layout
                    animate={{
                      scale: stepData.highlightIndices.includes(index) ? 1.15 : 1,
                      y: stepData.highlightIndices.includes(index) ? -10 : 0
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
                      className={`w-16 h-16 rounded-lg ${getArrayItemColor(index)} ${getArrayItemTextColor(index)} flex items-center justify-center text-2xl font-bold shadow-lg transition-all duration-300`}
                    >
                      {num}
                    </div>

                    {/* Current Pointer */}
                    {stepData.currentIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-purple-600 dark:text-purple-400"
                      >
                        ↑ current
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Current Operation Info */}
              {stepData.currentValue !== null && (
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                    <div className="text-sm text-purple-700 dark:text-purple-300 mb-1">Current Value</div>
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">{stepData.currentValue}</div>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                    <div className="text-sm text-orange-700 dark:text-orange-300 mb-1">Target</div>
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">{targetValue}</div>
                  </div>

                  <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
                    <div className="text-sm text-cyan-700 dark:text-cyan-300 mb-1">Need to Find (Complement)</div>
                    <div className="text-2xl font-bold text-cyan-900 dark:text-cyan-100">{stepData.complement}</div>
                  </div>
                </div>
              )}

              {/* Result */}
              {stepData.result && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-2 border-green-500 dark:border-green-700"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Check size={24} className="text-green-600 dark:text-green-400" />
                    <span className="text-lg font-bold text-green-900 dark:text-green-100">
                      Solution Found!
                    </span>
                  </div>
                  <p className="text-green-800 dark:text-green-200">
                    Indices: [{stepData.result[0]}, {stepData.result[1]}]
                  </p>
                  <p className="text-green-800 dark:text-green-200">
                    Values: {inputArray[stepData.result[0]]} + {inputArray[stepData.result[1]]} = {targetValue}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Hash Map Visualization */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Hash Map (Value → Index)
              </h4>

              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 min-h-[120px]">
                {Object.keys(stepData.hashMap).length === 0 ? (
                  <div className="text-center text-gray-500 dark:text-gray-400 italic">
                    Empty (no entries yet)
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <AnimatePresence>
                      {Object.entries(stepData.hashMap).map(([value, index]) => (
                        <motion.div
                          key={value}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className={`rounded-lg p-3 border-2 ${
                            stepData.complement === parseInt(value) && stepData.checking === 'found'
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                              : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          }`}
                        >
                          <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Value → Index</div>
                          <div className="font-mono font-bold text-gray-900 dark:text-white">
                            {value} → {index}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>

              {/* Lookup Status */}
              {stepData.checking && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 rounded-lg p-4 ${
                    stepData.checking === 'found'
                      ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                      : 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800'
                  }`}
                >
                  {stepData.checking === 'found' ? (
                    <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                      <Check size={20} />
                      <span>✓ Complement {stepData.complement} found in hash map!</span>
                    </div>
                  ) : stepData.checking === 'not_found' ? (
                    <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
                      <X size={20} />
                      <span>✗ Complement {stepData.complement} not in hash map. Adding {stepData.currentValue} to map.</span>
                    </div>
                  ) : (
                    <div className="text-yellow-800 dark:text-yellow-200">
                      Checking if {stepData.complement} exists in hash map...
                    </div>
                  )}
                </motion.div>
              )}
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
            <strong>Approach:</strong> Hash Map (One-pass)
          </p>
          <p>
            <strong>Time Complexity:</strong> O(n) - We traverse the array once
          </p>
          <p>
            <strong>Space Complexity:</strong> O(n) - Hash map can store up to n elements
          </p>
          <p className="pt-2">
            <strong>How it works:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>For each number, calculate its complement (target - current number)</li>
            <li>Check if the complement exists in the hash map</li>
            <li>If yes, we found our pair! Return the indices</li>
            <li>If no, store the current number and its index in the hash map</li>
            <li>Continue until we find a pair or finish the array</li>
          </ul>
          <p className="pt-2">
            <strong>Why it's efficient:</strong> Hash map lookup is O(1), so we avoid the O(n²) nested loop approach!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoSumVisualizer;
