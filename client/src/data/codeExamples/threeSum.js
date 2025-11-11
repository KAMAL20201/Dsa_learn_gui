export const threeSumCode = {
  java: {
    code: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // @step:initialize
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);

        // @step:outerLoop
        for (int i = 0; i < nums.length - 2; i++) {
            // @step:skipDuplicates
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            // @step:twoPointers
            int left = i + 1;
            int right = nums.length - 1;

            // @step:innerLoop
            while (left < right) {
                // @step:calculateSum
                int sum = nums[i] + nums[left] + nums[right];

                // @step:checkSum
                if (sum == 0) {
                    // @step:addTriplet
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));

                    // @step:skipLeftDuplicates
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    // @step:skipRightDuplicates
                    while (left < right && nums[right] == nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < 0) {
                    // @step:moveLeft
                    left++;
                } else {
                    // @step:moveRight
                    right--;
                }
            }
        }

        // @step:return
        return result;
    }
}`,
    lineMap: {
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
    }
  },

  python: {
    code: `class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # @step:initialize
        result = []
        nums.sort()

        # @step:outerLoop
        for i in range(len(nums) - 2):
            # @step:skipDuplicates
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            # @step:twoPointers
            left = i + 1
            right = len(nums) - 1

            # @step:innerLoop
            while left < right:
                # @step:calculateSum
                current_sum = nums[i] + nums[left] + nums[right]

                # @step:checkSum
                if current_sum == 0:
                    # @step:addTriplet
                    result.append([nums[i], nums[left], nums[right]])

                    # @step:skipLeftDuplicates
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    # @step:skipRightDuplicates
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1

                    left += 1
                    right -= 1
                elif current_sum < 0:
                    # @step:moveLeft
                    left += 1
                else:
                    # @step:moveRight
                    right -= 1

        # @step:return
        return result`,
    lineMap: {
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
    }
  },

  cpp: {
    code: `class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        // @step:initialize
        vector<vector<int>> result;
        sort(nums.begin(), nums.end());

        // @step:outerLoop
        for (int i = 0; i < nums.size() - 2; i++) {
            // @step:skipDuplicates
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            // @step:twoPointers
            int left = i + 1;
            int right = nums.size() - 1;

            // @step:innerLoop
            while (left < right) {
                // @step:calculateSum
                int sum = nums[i] + nums[left] + nums[right];

                // @step:checkSum
                if (sum == 0) {
                    // @step:addTriplet
                    result.push_back({nums[i], nums[left], nums[right]});

                    // @step:skipLeftDuplicates
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    // @step:skipRightDuplicates
                    while (left < right && nums[right] == nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < 0) {
                    // @step:moveLeft
                    left++;
                } else {
                    // @step:moveRight
                    right--;
                }
            }
        }

        // @step:return
        return result;
    }
};`,
    lineMap: {
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
  }
};

// Visualization configuration for this problem
export const threeSumVisualization = {
  type: 'array-three-pointer', // Uses specialized three-pointer visualizer

  stepDefinitions: [
    {
      type: 'initialize',
      description: () => `Initialize: Sort array and prepare to find triplets that sum to 0`,
      codeLineType: 'initialize'
    },
    {
      type: 'outerLoop',
      description: (i, value) => `Fix first element at index ${i}: value = ${value}`,
      codeLineType: 'outerLoop'
    },
    {
      type: 'skipDuplicates',
      description: (value) => `Skip duplicate value ${value} to avoid duplicate triplets`,
      codeLineType: 'skipDuplicates'
    },
    {
      type: 'twoPointers',
      description: (left, right) => `Set two pointers: left = ${left}, right = ${right}`,
      codeLineType: 'twoPointers'
    },
    {
      type: 'calculateSum',
      description: (i, left, right, sum) => `Calculate sum: nums[${i}] + nums[${left}] + nums[${right}] = ${sum}`,
      codeLineType: 'calculateSum'
    },
    {
      type: 'addTriplet',
      description: (triplet) => `Found valid triplet: [${triplet.join(', ')}]`,
      codeLineType: 'addTriplet'
    },
    {
      type: 'skipLeftDuplicates',
      description: () => `Skip duplicate values on the left`,
      codeLineType: 'skipLeftDuplicates'
    },
    {
      type: 'skipRightDuplicates',
      description: () => `Skip duplicate values on the right`,
      codeLineType: 'skipRightDuplicates'
    },
    {
      type: 'moveLeft',
      description: (sum) => `Sum ${sum} < 0: Move left pointer right to increase sum`,
      codeLineType: 'moveLeft'
    },
    {
      type: 'moveRight',
      description: (sum) => `Sum ${sum} > 0: Move right pointer left to decrease sum`,
      codeLineType: 'moveRight'
    },
    {
      type: 'return',
      description: (count) => `Found ${count} unique triplet${count !== 1 ? 's' : ''}`,
      codeLineType: 'return'
    }
  ]
};
