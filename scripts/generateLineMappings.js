#!/usr/bin/env node

/**
 * Auto-generate line mappings from @step comments
 *
 * Usage: node scripts/generateLineMappings.js <code-file-path>
 *
 * This script parses code with @step:stepName comments and generates
 * the lineMap object automatically.
 */

const fs = require('fs');
const path = require('path');

function generateLineMapping(code) {
  const lines = code.split('\n');
  const lineMap = {};

  lines.forEach((line, index) => {
    // Match @step:stepName in comments
    const match = line.match(/\/\/\s*@step:(\w+)|#\s*@step:(\w+)/);
    if (match) {
      const stepName = match[1] || match[2];
      if (!lineMap[stepName]) {
        lineMap[stepName] = [];
      }
      // Add the line number (0-indexed)
      lineMap[stepName].push(index);
    }
  });

  return lineMap;
}

function processCodeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract code for each language
    const javaMatch = content.match(/java:\s*{[\s\S]*?code:\s*`([\s\S]*?)`/);
    const pythonMatch = content.match(/python:\s*{[\s\S]*?code:\s*`([\s\S]*?)`/);
    const cppMatch = content.match(/cpp:\s*{[\s\S]*?code:\s*`([\s\S]*?)`/);

    const results = {};

    if (javaMatch) {
      results.java = generateLineMapping(javaMatch[1]);
    }

    if (pythonMatch) {
      results.python = generateLineMapping(pythonMatch[1]);
    }

    if (cppMatch) {
      results.cpp = generateLineMapping(cppMatch[1]);
    }

    return results;
  } catch (error) {
    console.error(`Error processing file: ${error.message}`);
    return null;
  }
}

function formatLineMap(lineMap) {
  const entries = Object.entries(lineMap).map(([key, values]) => {
    const valuesStr = values.length === 1 ? `[${values[0]}]` : `[${values.join(', ')}]`;
    return `      ${key}: ${valuesStr}`;
  });
  return entries.join(',\n');
}

// Main execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: node generateLineMappings.js <code-file-path>');
    console.log('\nExample:');
    console.log('  node generateLineMappings.js client/src/data/codeExamples/twoSum.js');
    process.exit(1);
  }

  const filePath = args[0];

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  console.log(`Processing: ${filePath}\n`);

  const results = processCodeFile(filePath);

  if (results) {
    console.log('Generated line mappings:\n');

    for (const [language, lineMap] of Object.entries(results)) {
      console.log(`${language}: {`);
      console.log('  lineMap: {');
      console.log(formatLineMap(lineMap));
      console.log('  }');
      console.log('},\n');
    }

    console.log('\nCopy the above mappings into your code file.');
  }
}

module.exports = { generateLineMapping, processCodeFile };
