# Scaling Guide: Adding Problems to DSA Learning GUI

This guide shows how to easily add new problems to the application using our scalable architecture.

## 🎯 Quick Start: Adding a New Problem

### Step 1: Create Code Example File

Create a new file: `client/src/data/codeExamples/yourProblem.js`

```javascript
export const yourProblemCode = {
  java: {
    code: `// Your Java code here
// Use @step:stepName comments to mark important lines
class Solution {
    public void solve() {
        // @step:initialize
        int result = 0;

        // @step:process
        result = doSomething();

        // @step:return
        return result;
    }
}`,
    lineMap: {
      initialize: [4],      // Line numbers for this step
      process: [7],
      return: [10]
    }
  },

  python: {
    code: `# Your Python code here
class Solution:
    def solve(self):
        # @step:initialize
        result = 0

        # @step:process
        result = do_something()

        # @step:return
        return result`,
    lineMap: {
      initialize: [3],
      process: [6],
      return: [9]
    }
  },

  cpp: {
    code: `// Your C++ code here
class Solution {
public:
    int solve() {
        // @step:initialize
        int result = 0;

        // @step:process
        result = doSomething();

        // @step:return
        return result;
    }
};`,
    lineMap: {
      initialize: [4],
      process: [7],
      return: [10]
    }
  }
};

export const yourProblemVisualization = {
  type: 'array-hash-map', // or 'array-two-pointer', 'tree-traversal', 'graph-bfs-dfs'
  stepDefinitions: [
    {
      type: 'initialize',
      description: () => 'Initialize data structures',
      codeLineType: 'initialize'
    },
    {
      type: 'process',
      description: () => 'Process the data',
      codeLineType: 'process'
    },
    {
      type: 'return',
      description: () => 'Return the result',
      codeLineType: 'return'
    }
  ]
};
```

### Step 2: Register Your Problem

Add to `client/src/data/codeExamples/index.js`:

```javascript
import { yourProblemCode, yourProblemVisualization } from './yourProblem';

export const codeRegistry = {
  'two-sum': twoSumCode,
  'your-problem-id': yourProblemCode,  // Add this line
  // ... more problems
};

export const visualizationRegistry = {
  'two-sum': twoSumVisualization,
  'your-problem-id': yourProblemVisualization,  // Add this line
  // ... more problems
};
```

### Step 3: Add Problem Data

Add to `client/src/data/problems.js`:

```javascript
export const problems = {
  'array': [
    {
      id: 'your-problem-id',
      title: 'Your Problem Title',
      difficulty: 'easy', // or 'medium', 'hard'
      description: 'Problem description',
      problem: 'Detailed problem statement',
      example: {
        input: 'Example input',
        output: 'Example output',
        explanation: 'Why this is the output'
      },
      constraints: [
        '1 <= n <= 1000',
        'Other constraints'
      ],
      approaches: [
        {
          name: 'Optimal Approach',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          description: 'How it works'
        }
      ],
      visualizer: 'generic',  // Use 'generic' for new problems
      leetcodeLink: 'https://leetcode.com/problems/your-problem',
      tags: ['Array', 'Hash Table']
    }
  ]
};
```

### Step 4: Create Step Generator Function

For custom visualizations, create a step generator:

```javascript
// client/src/utils/stepGenerators/yourProblem.js
export const generateYourProblemSteps = (inputData) => {
  const steps = [];

  steps.push({
    description: 'Start',
    highlightIndices: [],
    hashMap: {},
    codeExplanation: 'Initialize',
    codeLineType: 'initialize'
  });

  // Add more steps based on your algorithm

  return steps;
};
```

## 📊 Visualization Types

### 1. **array-hash-map**
For problems using arrays and hash maps (Two Sum, etc.)
- Shows array elements
- Displays hash map entries
- Highlights current indices

### 2. **array-two-pointer**
For two-pointer technique (Container With Most Water, etc.)
- Shows two pointers moving
- Highlights comparison areas
- Shows running calculations

### 3. **tree-traversal**
For tree problems (Binary Tree Traversal, etc.)
- Visual tree structure
- Node highlighting during traversal
- Shows traversal order

### 4. **graph-bfs-dfs**
For graph problems (Number of Islands, etc.)
- Graph visualization
- Queue/Stack state
- Visited nodes tracking

## 🔧 Advanced: Custom Visualizer

If you need a completely custom visualizer:

```javascript
// client/src/components/visualizations/YourCustomVisualizer.jsx
const YourCustomVisualizer = ({ onStepChange }) => {
  // Your custom visualization logic

  useEffect(() => {
    if (onStepChange && stepData) {
      onStepChange({
        step: currentStep,
        stepData: stepData,
        getHighlightedLines: (language) =>
          getCodeLineMapping(problemId, language, stepData.codeLineType)
      });
    }
  }, [currentStep, stepData, onStepChange]);

  // Return your custom UI
};
```

Then register it in `ProblemDetail.jsx`:

```javascript
const visualizers = {
  'two-sum': TwoSumVisualizer,
  'your-problem-id': YourCustomVisualizer,
};
```

## 📦 Folder Structure for 100+ Problems

```
client/src/
├── data/
│   ├── codeExamples/
│   │   ├── index.js           # Central registry
│   │   ├── twoSum.js
│   │   ├── threeSum.js
│   │   ├── binarySearch.js
│   │   └── ... (100+ files)
│   └── problems.js
├── components/
│   └── visualizations/
│       ├── GenericVisualizer.jsx
│       ├── SideBySideVisualization.jsx
│       ├── TwoSumVisualizer.jsx (custom)
│       └── ... (only for custom visualizers)
└── utils/
    └── stepGenerators/
        ├── twoSum.js
        ├── threeSum.js
        └── ... (one per problem)
```

## ⚡ Benefits of This Architecture

### ✅ **Scalability**
- Add new problems in ~5 minutes
- No need to create custom components for every problem
- Reuse visualization types across similar problems

### ✅ **Maintainability**
- Code examples in separate files
- Line mappings co-located with code
- Easy to update when code changes

### ✅ **Flexibility**
- Use generic visualizers for standard patterns
- Create custom visualizers only when needed
- Mix and match approaches

### ✅ **Performance**
- Code splitting per problem
- Lazy load visualizations
- Only load what you need

## 🎨 Example: Adding Binary Search

**File: `client/src/data/codeExamples/binarySearch.js`**

```javascript
export const binarySearchCode = {
  java: {
    code: `class Solution {
    public int search(int[] nums, int target) {
        // @step:initialize
        int left = 0, right = nums.length - 1;

        // @step:loop
        while (left <= right) {
            // @step:calculateMid
            int mid = left + (right - left) / 2;

            // @step:check
            if (nums[mid] == target) {
                // @step:found
                return mid;
            } else if (nums[mid] < target) {
                // @step:moveLeft
                left = mid + 1;
            } else {
                // @step:moveRight
                right = mid - 1;
            }
        }

        // @step:notFound
        return -1;
    }
}`,
    lineMap: {
      initialize: [2],
      loop: [5],
      calculateMid: [7],
      check: [10],
      found: [12],
      moveLeft: [15],
      moveRight: [18],
      notFound: [22]
    }
  },
  // ... python and cpp
};

export const binarySearchVisualization = {
  type: 'array-two-pointer',
  stepDefinitions: [
    // Define steps
  ]
};
```

Then just register it in the index file. Done! 🎉

## 🚀 Scaling to 100+ Problems

With this architecture:
- **10 problems** = 1 hour (6 min each)
- **50 problems** = 5 hours
- **100 problems** = 10 hours
- **500 problems** = 50 hours (~1 week)

Plus, you can:
- Hire contributors to add problems in parallel
- Generate code from LeetCode/templates
- Automate line mapping with parsers
- Use AI to help generate step definitions

## 🛠️ Future Enhancements

1. **Auto-generate line mappings** from @step comments
2. **Problem templates** for common patterns
3. **Import from LeetCode** API
4. **Community contributions** via PR templates
5. **Visual problem builder** UI

## 💡 Tips

- Start with generic visualizers for most problems
- Only create custom visualizers for unique visualizations
- Group similar problems to reuse step generators
- Use TypeScript for better type safety at scale
- Add unit tests for step generators
- Document unusual visualization requirements

---

**Questions?** Check the examples in `/client/src/data/codeExamples/` or create an issue on GitHub!
