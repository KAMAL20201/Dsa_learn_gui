import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const StepByStepLinkedListVisualizer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOperation, setSelectedOperation] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Define operations with their step-by-step breakdown
  const operations = {
    insertAtHead: {
      name: 'Insert at Head',
      code: `void insertAtHead(int data) {
    Node* newNode = new Node(data);
    newNode->next = head;
    head = newNode;
}`,
      getSteps: (value, initialList) => {
        const newNodeId = Math.max(...initialList.map(n => n.id), 0) + 1;
        return [
          {
            description: 'Initial state - Current linked list',
            highlightedLine: null,
            list: initialList,
            highlightedNodes: [],
            newNode: null,
            codeExplanation: 'We start with the existing linked list'
          },
          {
            description: `Create new node with value ${value}`,
            highlightedLine: 1,
            list: initialList,
            highlightedNodes: [],
            newNode: { id: newNodeId, value: value, next: null },
            codeExplanation: `Allocate memory for a new node and store value ${value}`
          },
          {
            description: 'Point new node\'s next to current head',
            highlightedLine: 2,
            list: initialList,
            highlightedNodes: initialList.length > 0 ? [initialList[0].id] : [],
            newNode: { id: newNodeId, value: value, next: initialList.length > 0 ? initialList[0].id : null },
            codeExplanation: 'Set newNode->next to point to the current head node'
          },
          {
            description: 'Update head to point to new node',
            highlightedLine: 3,
            list: [{ id: newNodeId, value: value }, ...initialList],
            highlightedNodes: [newNodeId],
            newNode: null,
            codeExplanation: 'Move the head pointer to the new node, making it the first element'
          },
          {
            description: 'Operation complete!',
            highlightedLine: null,
            list: [{ id: newNodeId, value: value }, ...initialList],
            highlightedNodes: [],
            newNode: null,
            codeExplanation: `Successfully inserted ${value} at the head of the linked list`
          }
        ];
      }
    },
    insertAtTail: {
      name: 'Insert at Tail',
      code: `void insertAtTail(int data) {
    Node* newNode = new Node(data);
    if (head == NULL) {
        head = newNode;
        return;
    }
    Node* temp = head;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = newNode;
}`,
      getSteps: (value, initialList) => {
        const newNodeId = Math.max(...initialList.map(n => n.id), 0) + 1;

        if (initialList.length === 0) {
          return [
            {
              description: 'List is empty',
              highlightedLine: null,
              list: [],
              highlightedNodes: [],
              newNode: null,
              codeExplanation: 'The linked list is currently empty'
            },
            {
              description: `Create new node with value ${value}`,
              highlightedLine: 1,
              list: [],
              highlightedNodes: [],
              newNode: { id: newNodeId, value: value, next: null },
              codeExplanation: `Allocate memory for a new node and store value ${value}`
            },
            {
              description: 'List is empty, set head to new node',
              highlightedLine: 3,
              list: [{ id: newNodeId, value: value }],
              highlightedNodes: [newNodeId],
              newNode: null,
              codeExplanation: 'Since the list is empty (head == NULL), make the new node the head'
            },
            {
              description: 'Operation complete!',
              highlightedLine: null,
              list: [{ id: newNodeId, value: value }],
              highlightedNodes: [],
              newNode: null,
              codeExplanation: `Successfully inserted ${value} as the first element`
            }
          ];
        }

        const steps = [
          {
            description: 'Initial state - Current linked list',
            highlightedLine: null,
            list: initialList,
            highlightedNodes: [],
            newNode: null,
            tempPointer: null,
            codeExplanation: 'We start with the existing linked list'
          },
          {
            description: `Create new node with value ${value}`,
            highlightedLine: 1,
            list: initialList,
            highlightedNodes: [],
            newNode: { id: newNodeId, value: value, next: null },
            tempPointer: null,
            codeExplanation: `Allocate memory for a new node and store value ${value}`
          },
          {
            description: 'Initialize temp pointer to head',
            highlightedLine: 5,
            list: initialList,
            highlightedNodes: [initialList[0].id],
            newNode: { id: newNodeId, value: value, next: null },
            tempPointer: 0,
            codeExplanation: 'Create a temporary pointer starting at the head to traverse the list'
          }
        ];

        // Add traversal steps
        for (let i = 0; i < initialList.length - 1; i++) {
          steps.push({
            description: `Traverse to next node (temp->next != NULL)`,
            highlightedLine: 6,
            list: initialList,
            highlightedNodes: [initialList[i + 1].id],
            newNode: { id: newNodeId, value: value, next: null },
            tempPointer: i + 1,
            codeExplanation: 'Move temp to the next node as current node still has a next pointer'
          });
        }

        steps.push(
          {
            description: 'Reached the last node (temp->next == NULL)',
            highlightedLine: 6,
            list: initialList,
            highlightedNodes: [initialList[initialList.length - 1].id],
            newNode: { id: newNodeId, value: value, next: null },
            tempPointer: initialList.length - 1,
            codeExplanation: 'Found the last node - its next pointer is NULL'
          },
          {
            description: 'Attach new node to the last node',
            highlightedLine: 9,
            list: [...initialList, { id: newNodeId, value: value }],
            highlightedNodes: [newNodeId],
            newNode: null,
            tempPointer: null,
            codeExplanation: `Set the last node's next pointer to the new node`
          },
          {
            description: 'Operation complete!',
            highlightedLine: null,
            list: [...initialList, { id: newNodeId, value: value }],
            highlightedNodes: [],
            newNode: null,
            tempPointer: null,
            codeExplanation: `Successfully inserted ${value} at the tail of the linked list`
          }
        );

        return steps;
      }
    }
  };

  // Initial linked list state
  const [baseList, setBaseList] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 }
  ]);

  const getCurrentStepData = () => {
    if (!selectedOperation) return null;
    const steps = operations[selectedOperation].getSteps(inputValue || '5', baseList);
    return steps[currentStep];
  };

  const getTotalSteps = () => {
    if (!selectedOperation) return 0;
    const steps = operations[selectedOperation].getSteps(inputValue || '5', baseList);
    return steps.length;
  };

  const handleOperationSelect = (operation) => {
    setSelectedOperation(operation);
    setCurrentStep(0);
  };

  const handleNext = () => {
    if (currentStep < getTotalSteps() - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Apply the final state to base list
      const stepData = getCurrentStepData();
      if (stepData) {
        setBaseList(stepData.list);
        setSelectedOperation(null);
        setCurrentStep(0);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedOperation(null);
  };

  const resetList = () => {
    setBaseList([
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 }
    ]);
    setSelectedOperation(null);
    setCurrentStep(0);
  };

  const stepData = getCurrentStepData();
  const totalSteps = getTotalSteps();

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Select Operation
        </h3>

        <div className="flex flex-wrap gap-3 mb-4">
          {Object.entries(operations).map(([key, op]) => (
            <button
              key={key}
              onClick={() => handleOperationSelect(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedOperation === key
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {op.name}
            </button>
          ))}
          <button
            onClick={resetList}
            className="px-4 py-2 rounded-lg font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-all"
          >
            Reset List
          </button>
        </div>

        {selectedOperation && (
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Value (e.g., 5)"
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              onClick={() => setCurrentStep(0)}
              className="px-4 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition-all"
            >
              Start Visualization
            </button>
          </div>
        )}
      </div>

      {/* Step-by-Step Visualization */}
      {selectedOperation && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-100 dark:bg-gray-700 px-6 py-3 border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {stepData?.description}
              </span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Side-by-Side Layout */}
          <div className="grid md:grid-cols-2 gap-6 p-6">
            {/* Code Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Code
              </h4>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                {operations[selectedOperation].code.split('\n').map((line, index) => (
                  <div
                    key={index}
                    className={`py-1 px-2 rounded transition-all ${
                      stepData?.highlightedLine === index
                        ? 'bg-yellow-500/30 border-l-4 border-yellow-500'
                        : ''
                    }`}
                  >
                    <span className="text-gray-500 mr-4">{index}</span>
                    <span className="text-gray-100">{line || ' '}</span>
                  </div>
                ))}
              </div>

              {/* Code Explanation */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Explanation:</strong> {stepData?.codeExplanation}
                </p>
              </div>
            </div>

            {/* Visualization Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Visualization
              </h4>

              {/* New Node (if being created) */}
              {stepData?.newNode && (
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    New Node (in memory):
                  </p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center"
                  >
                    <div className="flex items-center border-2 border-green-500 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="px-6 py-4 border-r-2 border-green-500">
                        <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                          {stepData.newNode.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">data</div>
                      </div>
                      <div className="px-4 py-4">
                        {stepData.newNode.next ? (
                          <ArrowRight size={24} className="text-green-600 dark:text-green-400" />
                        ) : (
                          <span className="text-sm text-gray-500 dark:text-gray-400">NULL</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Main List */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 min-h-[200px]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    HEAD →
                  </span>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <AnimatePresence mode="popLayout">
                    {stepData?.list.map((node, index) => (
                      <motion.div
                        key={node.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={{
                          opacity: 1,
                          scale: stepData.highlightedNodes.includes(node.id) ? 1.1 : 1,
                          y: 0
                        }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2"
                      >
                        <div className={`relative flex items-center border-2 rounded-lg transition-all ${
                          stepData.highlightedNodes.includes(node.id)
                            ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 shadow-lg'
                            : 'border-blue-500 bg-white dark:bg-gray-800'
                        }`}>
                          {/* Temp Pointer Indicator */}
                          {stepData?.tempPointer === index && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
                                temp
                              </span>
                            </div>
                          )}

                          <div className="px-6 py-4 border-r-2 border-blue-500">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {node.value}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">data</div>
                          </div>
                          <div className="px-4 py-4">
                            <ArrowRight size={24} className="text-blue-600 dark:text-blue-400" />
                          </div>
                        </div>

                        {index < stepData.list.length - 1 && (
                          <div className="text-gray-400">→</div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {stepData?.list.length > 0 && (
                    <div className="text-gray-500 dark:text-gray-400 font-mono text-sm">
                      NULL
                    </div>
                  )}

                  {stepData?.list.length === 0 && (
                    <div className="text-gray-400 dark:text-gray-500 italic">
                      Empty List (NULL)
                    </div>
                  )}
                </div>
              </div>
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

            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 transition-all"
            >
              <RotateCcw size={20} />
              Reset
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all"
            >
              {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Info Panel */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
          How to Use
        </h4>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>• Select an operation (Insert at Head or Insert at Tail)</li>
          <li>• Enter a value to insert (or use the default value)</li>
          <li>• Click "Start Visualization" to begin the step-by-step walkthrough</li>
          <li>• Use "Next" and "Previous" buttons to navigate through each step</li>
          <li>• Watch the code highlight and visualization update for each step</li>
          <li>• Click "Finish" on the last step to apply changes to the list</li>
          <li>• Use "Reset List" to restore the initial state</li>
        </ul>
      </div>
    </div>
  );
};

export default StepByStepLinkedListVisualizer;
