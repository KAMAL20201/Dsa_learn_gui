// Problems organized by data structure
export const problems = {
  'array': [
    {
      id: 'two-sum',
      title: 'Two Sum',
      difficulty: 'easy',
      popularity: 'Most Popular',
      description: 'Find two numbers that add up to a target',
      problem: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      example: {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      constraints: [
        '2 <= nums.length <= 10⁴',
        '-10⁹ <= nums[i] <= 10⁹',
        '-10⁹ <= target <= 10⁹',
        'Only one valid answer exists.'
      ],
      approaches: [
        {
          name: 'Brute Force',
          timeComplexity: 'O(n²)',
          spaceComplexity: 'O(1)',
          description: 'Check every pair of numbers'
        },
        {
          name: 'Hash Map (Optimal)',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          description: 'Use hash map to store complements'
        }
      ],
      visualizer: 'TwoSumVisualizer',
      leetcodeLink: 'https://leetcode.com/problems/two-sum/',
      tags: ['Array', 'Hash Table']
    },
    {
      id: 'best-time-stock',
      title: 'Best Time to Buy and Sell Stock',
      difficulty: 'easy',
      popularity: 'Popular',
      description: 'Find maximum profit from buying and selling stock once',
      problem: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.',
      example: {
        input: 'prices = [7,1,5,3,6,4]',
        output: '5',
        explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.'
      },
      constraints: [
        '1 <= prices.length <= 10⁵',
        '0 <= prices[i] <= 10⁴'
      ],
      approaches: [
        {
          name: 'One Pass',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          description: 'Track minimum price and maximum profit'
        }
      ],
      visualizer: null,
      leetcodeLink: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
      tags: ['Array', 'Dynamic Programming']
    },
    {
      id: 'contains-duplicate',
      title: 'Contains Duplicate',
      difficulty: 'easy',
      popularity: 'Popular',
      description: 'Check if array contains any duplicates',
      problem: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
      example: {
        input: 'nums = [1,2,3,1]',
        output: 'true',
        explanation: 'Element 1 appears twice.'
      },
      constraints: [
        '1 <= nums.length <= 10⁵',
        '-10⁹ <= nums[i] <= 10⁹'
      ],
      approaches: [
        {
          name: 'Hash Set',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          description: 'Use set to track seen elements'
        }
      ],
      visualizer: null,
      leetcodeLink: 'https://leetcode.com/problems/contains-duplicate/',
      tags: ['Array', 'Hash Table']
    },
    {
      id: 'maximum-subarray',
      title: 'Maximum Subarray',
      difficulty: 'medium',
      popularity: 'Very Popular',
      description: 'Find the contiguous subarray with the largest sum',
      problem: 'Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.',
      example: {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: '[4,-1,2,1] has the largest sum = 6.'
      },
      constraints: [
        '1 <= nums.length <= 10⁵',
        '-10⁴ <= nums[i] <= 10⁴'
      ],
      approaches: [
        {
          name: 'Kadane\'s Algorithm',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          description: 'Track current and maximum sum'
        }
      ],
      visualizer: null,
      leetcodeLink: 'https://leetcode.com/problems/maximum-subarray/',
      tags: ['Array', 'Dynamic Programming', 'Divide and Conquer']
    },
    {
      id: 'product-of-array-except-self',
      title: 'Product of Array Except Self',
      difficulty: 'medium',
      popularity: 'Very Popular',
      description: 'Calculate product of all elements except current index',
      problem: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].',
      example: {
        input: 'nums = [1,2,3,4]',
        output: '[24,12,8,6]',
        explanation: 'Product of all except 1: 2*3*4=24, except 2: 1*3*4=12, etc.'
      },
      constraints: [
        '2 <= nums.length <= 10⁵',
        '-30 <= nums[i] <= 30',
        'The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.'
      ],
      approaches: [
        {
          name: 'Left and Right Products',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          description: 'Calculate prefix and suffix products'
        }
      ],
      visualizer: null,
      leetcodeLink: 'https://leetcode.com/problems/product-of-array-except-self/',
      tags: ['Array', 'Prefix Sum']
    }
  ],
  'linked-list': [
    {
      id: 'reverse-linked-list',
      title: 'Reverse Linked List',
      difficulty: 'easy',
      popularity: 'Most Popular',
      description: 'Reverse a singly linked list',
      problem: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
      example: {
        input: 'head = [1,2,3,4,5]',
        output: '[5,4,3,2,1]',
        explanation: 'The list is reversed.'
      },
      constraints: [
        'The number of nodes in the list is the range [0, 5000].',
        '-5000 <= Node.val <= 5000'
      ],
      approaches: [
        {
          name: 'Iterative',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          description: 'Use three pointers to reverse in place'
        },
        {
          name: 'Recursive',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          description: 'Recursively reverse the list'
        }
      ],
      visualizer: null,
      leetcodeLink: 'https://leetcode.com/problems/reverse-linked-list/',
      tags: ['Linked List', 'Recursion']
    },
    {
      id: 'merge-two-sorted-lists',
      title: 'Merge Two Sorted Lists',
      difficulty: 'easy',
      popularity: 'Very Popular',
      description: 'Merge two sorted linked lists',
      problem: 'Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.',
      example: {
        input: 'list1 = [1,2,4], list2 = [1,3,4]',
        output: '[1,1,2,3,4,4]',
        explanation: 'Merged list is sorted.'
      },
      constraints: [
        'The number of nodes in both lists is in the range [0, 50].',
        '-100 <= Node.val <= 100',
        'Both list1 and list2 are sorted in non-decreasing order.'
      ],
      approaches: [
        {
          name: 'Iterative',
          timeComplexity: 'O(n + m)',
          spaceComplexity: 'O(1)',
          description: 'Compare and merge nodes'
        }
      ],
      visualizer: null,
      leetcodeLink: 'https://leetcode.com/problems/merge-two-sorted-lists/',
      tags: ['Linked List', 'Recursion']
    },
    {
      id: 'linked-list-cycle',
      title: 'Linked List Cycle',
      difficulty: 'easy',
      popularity: 'Very Popular',
      description: 'Detect if a linked list has a cycle',
      problem: 'Given head, the head of a linked list, determine if the linked list has a cycle in it.',
      example: {
        input: 'head = [3,2,0,-4], pos = 1',
        output: 'true',
        explanation: 'There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).'
      },
      constraints: [
        'The number of the nodes in the list is in the range [0, 10⁴].',
        '-10⁵ <= Node.val <= 10⁵',
        'pos is -1 or a valid index in the linked-list.'
      ],
      approaches: [
        {
          name: 'Floyd\'s Cycle Detection (Two Pointers)',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          description: 'Use slow and fast pointers'
        }
      ],
      visualizer: null,
      leetcodeLink: 'https://leetcode.com/problems/linked-list-cycle/',
      tags: ['Linked List', 'Two Pointers', 'Hash Table']
    },
    {
      id: 'remove-nth-node',
      title: 'Remove Nth Node From End of List',
      difficulty: 'medium',
      popularity: 'Very Popular',
      description: 'Remove the nth node from the end of the list',
      problem: 'Given the head of a linked list, remove the nth node from the end of the list and return its head.',
      example: {
        input: 'head = [1,2,3,4,5], n = 2',
        output: '[1,2,3,5]',
        explanation: 'Remove the 2nd node from the end (node with value 4).'
      },
      constraints: [
        'The number of nodes in the list is sz.',
        '1 <= sz <= 30',
        '0 <= Node.val <= 100',
        '1 <= n <= sz'
      ],
      approaches: [
        {
          name: 'Two Pointers',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(1)',
          description: 'Use two pointers with n gap'
        }
      ],
      visualizer: null,
      leetcodeLink: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
      tags: ['Linked List', 'Two Pointers']
    }
  ],
  'stack': [
    {
      id: 'valid-parentheses',
      title: 'Valid Parentheses',
      difficulty: 'easy',
      popularity: 'Most Popular',
      description: 'Check if parentheses are balanced',
      problem: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
      example: {
        input: 's = "()[]{}"',
        output: 'true',
        explanation: 'All brackets are properly closed.'
      },
      constraints: [
        '1 <= s.length <= 10⁴',
        's consists of parentheses only \'()[]{}\'.'
      ],
      approaches: [
        {
          name: 'Stack',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(n)',
          description: 'Use stack to match pairs'
        }
      ],
      visualizer: null,
      leetcodeLink: 'https://leetcode.com/problems/valid-parentheses/',
      tags: ['String', 'Stack']
    }
  ],
  'tree': [
    {
      id: 'maximum-depth-binary-tree',
      title: 'Maximum Depth of Binary Tree',
      difficulty: 'easy',
      popularity: 'Very Popular',
      description: 'Find the maximum depth of a binary tree',
      problem: 'Given the root of a binary tree, return its maximum depth. A binary tree\'s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
      example: {
        input: 'root = [3,9,20,null,null,15,7]',
        output: '3',
        explanation: 'The maximum depth is 3 (3 -> 20 -> 7 or 3 -> 20 -> 15).'
      },
      constraints: [
        'The number of nodes in the tree is in the range [0, 10⁴].',
        '-100 <= Node.val <= 100'
      ],
      approaches: [
        {
          name: 'Recursive DFS',
          timeComplexity: 'O(n)',
          spaceComplexity: 'O(h)',
          description: 'Recursively find depth of left and right subtrees'
        }
      ],
      visualizer: null,
      leetcodeLink: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
      tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree']
    }
  ]
};

// Get problems for a specific data structure
export const getProblemsByDataStructure = (dataStructureId) => {
  return problems[dataStructureId] || [];
};

// Get a specific problem by ID
export const getProblemById = (dataStructureId, problemId) => {
  const dsProblems = problems[dataStructureId] || [];
  return dsProblems.find(p => p.id === problemId);
};

// Get difficulty color
export const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'easy':
      return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30';
    case 'medium':
      return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/30';
    case 'hard':
      return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30';
    default:
      return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/30';
  }
};
