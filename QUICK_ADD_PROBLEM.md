# Quick Guide: Add a New Problem in 5 Minutes ⚡

## Step-by-Step Checklist

### ☑️ Step 1: Copy Template (30 seconds)
```bash
cd client/src/data/codeExamples
cp _TEMPLATE.js myNewProblem.js
```

### ☑️ Step 2: Fill in Code (3 minutes)
Edit `myNewProblem.js`:
- Replace `PROBLEM_NAME` with `myNewProblem`
- Add your Java code
- Add your Python code
- Add your C++ code
- Mark lines with `// @step:stepName` comments

### ☑️ Step 3: Generate Line Mappings (10 seconds)
```bash
node scripts/generateLineMappings.js client/src/data/codeExamples/myNewProblem.js
```
Copy the output into your file's `lineMap` sections.

### ☑️ Step 4: Register Problem (30 seconds)
Edit `client/src/data/codeExamples/index.js`:
```javascript
import { myNewProblemCode, myNewProblemVisualization } from './myNewProblem';

export const codeRegistry = {
  // ... existing problems
  'my-new-problem': myNewProblemCode,
};

export const visualizationRegistry = {
  // ... existing problems
  'my-new-problem': myNewProblemVisualization,
};
```

### ☑️ Step 5: Add Problem Metadata (1 minute)
Edit `client/src/data/problems.js`:
```javascript
export const problems = {
  'array': [
    // ... existing problems
    {
      id: 'my-new-problem',
      title: 'My New Problem',
      difficulty: 'medium',
      description: 'Problem description',
      problem: 'Given... return...',
      example: {
        input: 'nums = [1,2,3]',
        output: '[1,2,3]',
        explanation: 'Because...'
      },
      constraints: ['1 <= n <= 1000'],
      approaches: [{
        name: 'Optimal',
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        description: 'How it works'
      }],
      visualizer: 'generic',
      leetcodeLink: 'https://leetcode.com/problems/...',
      tags: ['Array']
    }
  ]
};
```

### ☑️ Done! Test Your Problem
```bash
npm run dev
```
Navigate to: `http://localhost:5173/problems/array/my-new-problem`

---

## 📊 Choosing Visualization Type

| Problem Type | Visualization | Examples |
|-------------|---------------|----------|
| Array + HashMap | `array-hash-map` | Two Sum, Group Anagrams |
| Two Pointers | `array-two-pointer` | Container With Most Water |
| Binary Trees | `tree-traversal` | Inorder Traversal |
| Graphs | `graph-bfs-dfs` | Number of Islands |

---

## 💡 Pro Tips

1. **Use @step comments**: They help auto-generate line mappings
2. **Keep steps simple**: 5-10 steps per problem is ideal
3. **Test with different inputs**: Use the visualization UI to verify
4. **Copy similar problems**: If adding Three Sum, copy Two Sum as a starting point
5. **Document edge cases**: Add them to the problem's constraints

---

## 🚨 Common Mistakes

❌ **Wrong line numbers** → Use the line mapping script
❌ **Missing registration** → Check index.js
❌ **Typo in problem ID** → IDs must match everywhere (kebab-case)
❌ **Wrong visualization type** → Match your problem's data structure

---

## 🎯 Time Estimates

- First problem: ~10-15 minutes (learning the system)
- Problems 2-10: ~5-7 minutes each
- Problems 11+: ~3-5 minutes each (you're a pro!)

**100 problems = ~8-10 hours of work** (1-2 days)

---

## 🤝 Getting Help

- Check existing problems for examples
- See `/client/src/data/codeExamples/twoSum.js` for reference
- Read `SCALING_GUIDE.md` for detailed documentation
- Open an issue if you find bugs

Happy coding! 🚀
