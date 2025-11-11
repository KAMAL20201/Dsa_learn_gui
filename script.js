// Algorithm codes with line-by-line tracking
const algorithmCodes = {
    bubbleSort: {
        code: `<span class="code-line" data-line="1"><span class="keyword">function</span> <span class="function-name">bubbleSort</span>(<span class="variable">arr</span>) {</span>
<span class="code-line" data-line="2">    <span class="keyword">let</span> <span class="variable">n</span> <span class="operator">=</span> <span class="variable">arr</span>.<span class="variable">length</span>;</span>
<span class="code-line" data-line="3">    <span class="keyword">for</span> (<span class="keyword">let</span> <span class="variable">i</span> <span class="operator">=</span> <span class="number">0</span>; <span class="variable">i</span> <span class="operator">&lt;</span> <span class="variable">n</span> <span class="operator">-</span> <span class="number">1</span>; <span class="variable">i</span><span class="operator">++</span>) {</span>
<span class="code-line" data-line="4">        <span class="keyword">for</span> (<span class="keyword">let</span> <span class="variable">j</span> <span class="operator">=</span> <span class="number">0</span>; <span class="variable">j</span> <span class="operator">&lt;</span> <span class="variable">n</span> <span class="operator">-</span> <span class="variable">i</span> <span class="operator">-</span> <span class="number">1</span>; <span class="variable">j</span><span class="operator">++</span>) {</span>
<span class="code-line" data-line="5">            <span class="keyword">if</span> (<span class="variable">arr</span>[<span class="variable">j</span>] <span class="operator">&gt;</span> <span class="variable">arr</span>[<span class="variable">j</span> <span class="operator">+</span> <span class="number">1</span>]) {</span>
<span class="code-line" data-line="6">                <span class="comment">// Swap elements</span></span>
<span class="code-line" data-line="7">                <span class="keyword">let</span> <span class="variable">temp</span> <span class="operator">=</span> <span class="variable">arr</span>[<span class="variable">j</span>];</span>
<span class="code-line" data-line="8">                <span class="variable">arr</span>[<span class="variable">j</span>] <span class="operator">=</span> <span class="variable">arr</span>[<span class="variable">j</span> <span class="operator">+</span> <span class="number">1</span>];</span>
<span class="code-line" data-line="9">                <span class="variable">arr</span>[<span class="variable">j</span> <span class="operator">+</span> <span class="number">1</span>] <span class="operator">=</span> <span class="variable">temp</span>;</span>
<span class="code-line" data-line="10">            }</span>
<span class="code-line" data-line="11">        }</span>
<span class="code-line" data-line="12">    }</span>
<span class="code-line" data-line="13">    <span class="keyword">return</span> <span class="variable">arr</span>;</span>
<span class="code-line" data-line="14">}</span>`,
        name: 'Bubble Sort'
    },
    selectionSort: {
        code: `<span class="code-line" data-line="1"><span class="keyword">function</span> <span class="function-name">selectionSort</span>(<span class="variable">arr</span>) {</span>
<span class="code-line" data-line="2">    <span class="keyword">let</span> <span class="variable">n</span> <span class="operator">=</span> <span class="variable">arr</span>.<span class="variable">length</span>;</span>
<span class="code-line" data-line="3">    <span class="keyword">for</span> (<span class="keyword">let</span> <span class="variable">i</span> <span class="operator">=</span> <span class="number">0</span>; <span class="variable">i</span> <span class="operator">&lt;</span> <span class="variable">n</span> <span class="operator">-</span> <span class="number">1</span>; <span class="variable">i</span><span class="operator">++</span>) {</span>
<span class="code-line" data-line="4">        <span class="keyword">let</span> <span class="variable">minIdx</span> <span class="operator">=</span> <span class="variable">i</span>;</span>
<span class="code-line" data-line="5">        <span class="keyword">for</span> (<span class="keyword">let</span> <span class="variable">j</span> <span class="operator">=</span> <span class="variable">i</span> <span class="operator">+</span> <span class="number">1</span>; <span class="variable">j</span> <span class="operator">&lt;</span> <span class="variable">n</span>; <span class="variable">j</span><span class="operator">++</span>) {</span>
<span class="code-line" data-line="6">            <span class="keyword">if</span> (<span class="variable">arr</span>[<span class="variable">j</span>] <span class="operator">&lt;</span> <span class="variable">arr</span>[<span class="variable">minIdx</span>]) {</span>
<span class="code-line" data-line="7">                <span class="variable">minIdx</span> <span class="operator">=</span> <span class="variable">j</span>;</span>
<span class="code-line" data-line="8">            }</span>
<span class="code-line" data-line="9">        }</span>
<span class="code-line" data-line="10">        <span class="comment">// Swap minimum with first element</span></span>
<span class="code-line" data-line="11">        <span class="keyword">let</span> <span class="variable">temp</span> <span class="operator">=</span> <span class="variable">arr</span>[<span class="variable">i</span>];</span>
<span class="code-line" data-line="12">        <span class="variable">arr</span>[<span class="variable">i</span>] <span class="operator">=</span> <span class="variable">arr</span>[<span class="variable">minIdx</span>];</span>
<span class="code-line" data-line="13">        <span class="variable">arr</span>[<span class="variable">minIdx</span>] <span class="operator">=</span> <span class="variable">temp</span>;</span>
<span class="code-line" data-line="14">    }</span>
<span class="code-line" data-line="15">    <span class="keyword">return</span> <span class="variable">arr</span>;</span>
<span class="code-line" data-line="16">}</span>`,
        name: 'Selection Sort'
    },
    insertionSort: {
        code: `<span class="code-line" data-line="1"><span class="keyword">function</span> <span class="function-name">insertionSort</span>(<span class="variable">arr</span>) {</span>
<span class="code-line" data-line="2">    <span class="keyword">let</span> <span class="variable">n</span> <span class="operator">=</span> <span class="variable">arr</span>.<span class="variable">length</span>;</span>
<span class="code-line" data-line="3">    <span class="keyword">for</span> (<span class="keyword">let</span> <span class="variable">i</span> <span class="operator">=</span> <span class="number">1</span>; <span class="variable">i</span> <span class="operator">&lt;</span> <span class="variable">n</span>; <span class="variable">i</span><span class="operator">++</span>) {</span>
<span class="code-line" data-line="4">        <span class="keyword">let</span> <span class="variable">key</span> <span class="operator">=</span> <span class="variable">arr</span>[<span class="variable">i</span>];</span>
<span class="code-line" data-line="5">        <span class="keyword">let</span> <span class="variable">j</span> <span class="operator">=</span> <span class="variable">i</span> <span class="operator">-</span> <span class="number">1</span>;</span>
<span class="code-line" data-line="6">        <span class="keyword">while</span> (<span class="variable">j</span> <span class="operator">&gt;=</span> <span class="number">0</span> <span class="operator">&amp;&amp;</span> <span class="variable">arr</span>[<span class="variable">j</span>] <span class="operator">&gt;</span> <span class="variable">key</span>) {</span>
<span class="code-line" data-line="7">            <span class="variable">arr</span>[<span class="variable">j</span> <span class="operator">+</span> <span class="number">1</span>] <span class="operator">=</span> <span class="variable">arr</span>[<span class="variable">j</span>];</span>
<span class="code-line" data-line="8">            <span class="variable">j</span> <span class="operator">=</span> <span class="variable">j</span> <span class="operator">-</span> <span class="number">1</span>;</span>
<span class="code-line" data-line="9">        }</span>
<span class="code-line" data-line="10">        <span class="variable">arr</span>[<span class="variable">j</span> <span class="operator">+</span> <span class="number">1</span>] <span class="operator">=</span> <span class="variable">key</span>;</span>
<span class="code-line" data-line="11">    }</span>
<span class="code-line" data-line="12">    <span class="keyword">return</span> <span class="variable">arr</span>;</span>
<span class="code-line" data-line="13">}</span>`,
        name: 'Insertion Sort'
    },
    linearSearch: {
        code: `<span class="code-line" data-line="1"><span class="keyword">function</span> <span class="function-name">linearSearch</span>(<span class="variable">arr</span>, <span class="variable">target</span>) {</span>
<span class="code-line" data-line="2">    <span class="keyword">let</span> <span class="variable">n</span> <span class="operator">=</span> <span class="variable">arr</span>.<span class="variable">length</span>;</span>
<span class="code-line" data-line="3">    <span class="keyword">for</span> (<span class="keyword">let</span> <span class="variable">i</span> <span class="operator">=</span> <span class="number">0</span>; <span class="variable">i</span> <span class="operator">&lt;</span> <span class="variable">n</span>; <span class="variable">i</span><span class="operator">++</span>) {</span>
<span class="code-line" data-line="4">        <span class="keyword">if</span> (<span class="variable">arr</span>[<span class="variable">i</span>] <span class="operator">===</span> <span class="variable">target</span>) {</span>
<span class="code-line" data-line="5">            <span class="keyword">return</span> <span class="variable">i</span>; <span class="comment">// Found</span></span>
<span class="code-line" data-line="6">        }</span>
<span class="code-line" data-line="7">    }</span>
<span class="code-line" data-line="8">    <span class="keyword">return</span> <span class="operator">-</span><span class="number">1</span>; <span class="comment">// Not found</span></span>
<span class="code-line" data-line="9">}</span>`,
        name: 'Linear Search'
    }
};

// Global state
let array = [];
let steps = [];
let currentStepIndex = 0;
let isPlaying = false;
let playInterval = null;
let speed = 1000;
let currentAlgorithm = 'bubbleSort';

// DOM elements
const algorithmSelect = document.getElementById('algorithm');
const visualization = document.getElementById('visualization');
const arrayInput = document.getElementById('arrayInput');
const resetBtn = document.getElementById('resetBtn');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stepBtn = document.getElementById('stepBtn');
const prevBtn = document.getElementById('prevBtn');
const resetStepsBtn = document.getElementById('resetStepsBtn');
const speedSlider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');
const currentStepSpan = document.getElementById('currentStep');
const totalStepsSpan = document.getElementById('totalSteps');
const stepDescription = document.getElementById('stepDescription');
const codeContent = document.getElementById('codeContent');
const lineExplanation = document.getElementById('lineExplanation');

// Initialize
function init() {
    loadAlgorithm(currentAlgorithm);
    parseArray();
    generateSteps();
    renderVisualization();
    updateStepInfo();
}

// Load algorithm code
function loadAlgorithm(algorithm) {
    currentAlgorithm = algorithm;
    const algoData = algorithmCodes[algorithm];
    codeContent.innerHTML = algoData.code;
    resetSteps();
}

// Parse array from input
function parseArray() {
    const input = arrayInput.value.trim();
    array = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    if (array.length === 0) {
        array = [64, 34, 25, 12, 22, 11, 90];
    }
}

// Generate algorithm steps
function generateSteps() {
    steps = [];
    const arr = [...array];

    switch(currentAlgorithm) {
        case 'bubbleSort':
            generateBubbleSortSteps(arr);
            break;
        case 'selectionSort':
            generateSelectionSortSteps(arr);
            break;
        case 'insertionSort':
            generateInsertionSortSteps(arr);
            break;
        case 'linearSearch':
            generateLinearSearchSteps(arr);
            break;
    }

    totalStepsSpan.textContent = steps.length;
}

// Bubble Sort steps
function generateBubbleSortSteps(arr) {
    const n = arr.length;
    steps.push({
        array: [...arr],
        line: 1,
        description: 'Starting Bubble Sort algorithm',
        highlights: []
    });

    steps.push({
        array: [...arr],
        line: 2,
        description: `Initialize n = ${n} (array length)`,
        highlights: []
    });

    for (let i = 0; i < n - 1; i++) {
        steps.push({
            array: [...arr],
            line: 3,
            description: `Outer loop: i = ${i}`,
            highlights: []
        });

        for (let j = 0; j < n - i - 1; j++) {
            steps.push({
                array: [...arr],
                line: 4,
                description: `Inner loop: j = ${j}`,
                highlights: []
            });

            steps.push({
                array: [...arr],
                line: 5,
                description: `Comparing arr[${j}] (${arr[j]}) with arr[${j+1}] (${arr[j+1]})`,
                highlights: [j, j + 1],
                comparing: [j, j + 1]
            });

            if (arr[j] > arr[j + 1]) {
                steps.push({
                    array: [...arr],
                    line: 7,
                    description: `${arr[j]} > ${arr[j+1]}, swapping...`,
                    highlights: [j, j + 1],
                    swapping: [j, j + 1]
                });

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                steps.push({
                    array: [...arr],
                    line: 9,
                    description: `Swapped: arr[${j}] = ${arr[j]}, arr[${j+1}] = ${arr[j+1]}`,
                    highlights: [j, j + 1],
                    swapping: [j, j + 1]
                });
            }
        }

        steps.push({
            array: [...arr],
            line: 12,
            description: `Pass ${i + 1} complete. Element at position ${n - i - 1} is sorted`,
            highlights: [],
            sorted: Array.from({length: n - i}, (_, idx) => n - idx - 1)
        });
    }

    steps.push({
        array: [...arr],
        line: 13,
        description: 'Bubble Sort complete! Array is sorted.',
        highlights: [],
        sorted: Array.from({length: n}, (_, i) => i)
    });
}

// Selection Sort steps
function generateSelectionSortSteps(arr) {
    const n = arr.length;
    steps.push({
        array: [...arr],
        line: 1,
        description: 'Starting Selection Sort algorithm',
        highlights: []
    });

    steps.push({
        array: [...arr],
        line: 2,
        description: `Initialize n = ${n}`,
        highlights: []
    });

    for (let i = 0; i < n - 1; i++) {
        steps.push({
            array: [...arr],
            line: 3,
            description: `Outer loop: i = ${i}`,
            highlights: [i]
        });

        let minIdx = i;
        steps.push({
            array: [...arr],
            line: 4,
            description: `Set minIdx = ${i}`,
            highlights: [minIdx],
            current: [minIdx]
        });

        for (let j = i + 1; j < n; j++) {
            steps.push({
                array: [...arr],
                line: 5,
                description: `Inner loop: j = ${j}, checking for minimum`,
                highlights: [minIdx, j],
                comparing: [minIdx, j]
            });

            steps.push({
                array: [...arr],
                line: 6,
                description: `Comparing arr[${j}] (${arr[j]}) with arr[${minIdx}] (${arr[minIdx]})`,
                highlights: [minIdx, j],
                comparing: [minIdx, j]
            });

            if (arr[j] < arr[minIdx]) {
                minIdx = j;
                steps.push({
                    array: [...arr],
                    line: 7,
                    description: `New minimum found at index ${minIdx} (value: ${arr[minIdx]})`,
                    highlights: [minIdx],
                    current: [minIdx]
                });
            }
        }

        if (minIdx !== i) {
            steps.push({
                array: [...arr],
                line: 11,
                description: `Swapping arr[${i}] (${arr[i]}) with arr[${minIdx}] (${arr[minIdx]})`,
                highlights: [i, minIdx],
                swapping: [i, minIdx]
            });

            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;

            steps.push({
                array: [...arr],
                line: 13,
                description: `Swapped: arr[${i}] = ${arr[i]}, arr[${minIdx}] = ${arr[minIdx]}`,
                highlights: [i],
                sorted: Array.from({length: i + 1}, (_, idx) => idx)
            });
        } else {
            steps.push({
                array: [...arr],
                line: 13,
                description: `Element at index ${i} is already in correct position`,
                highlights: [i],
                sorted: Array.from({length: i + 1}, (_, idx) => idx)
            });
        }
    }

    steps.push({
        array: [...arr],
        line: 15,
        description: 'Selection Sort complete!',
        highlights: [],
        sorted: Array.from({length: n}, (_, i) => i)
    });
}

// Insertion Sort steps
function generateInsertionSortSteps(arr) {
    const n = arr.length;
    steps.push({
        array: [...arr],
        line: 1,
        description: 'Starting Insertion Sort algorithm',
        highlights: []
    });

    steps.push({
        array: [...arr],
        line: 2,
        description: `Initialize n = ${n}`,
        highlights: []
    });

    for (let i = 1; i < n; i++) {
        steps.push({
            array: [...arr],
            line: 3,
            description: `Outer loop: i = ${i}`,
            highlights: [i]
        });

        let key = arr[i];
        steps.push({
            array: [...arr],
            line: 4,
            description: `Key = arr[${i}] = ${key}`,
            highlights: [i],
            current: [i]
        });

        let j = i - 1;
        steps.push({
            array: [...arr],
            line: 5,
            description: `j = ${j}`,
            highlights: [i, j]
        });

        while (j >= 0 && arr[j] > key) {
            steps.push({
                array: [...arr],
                line: 6,
                description: `arr[${j}] (${arr[j]}) > key (${key}), shifting right`,
                highlights: [j, j + 1],
                comparing: [j, j + 1]
            });

            arr[j + 1] = arr[j];
            steps.push({
                array: [...arr],
                line: 7,
                description: `Shifted arr[${j}] to arr[${j + 1}]`,
                highlights: [j, j + 1]
            });

            j = j - 1;
            steps.push({
                array: [...arr],
                line: 8,
                description: `Decrement j to ${j}`,
                highlights: j >= 0 ? [j, j + 1] : [j + 1]
            });
        }

        arr[j + 1] = key;
        steps.push({
            array: [...arr],
            line: 10,
            description: `Insert key (${key}) at position ${j + 1}`,
            highlights: [j + 1],
            sorted: Array.from({length: i + 1}, (_, idx) => idx)
        });
    }

    steps.push({
        array: [...arr],
        line: 12,
        description: 'Insertion Sort complete!',
        highlights: [],
        sorted: Array.from({length: n}, (_, i) => i)
    });
}

// Linear Search steps
function generateLinearSearchSteps(arr) {
    const n = arr.length;
    const target = arr[Math.floor(Math.random() * n)]; // Random target

    steps.push({
        array: [...arr],
        line: 1,
        description: `Starting Linear Search for target = ${target}`,
        highlights: []
    });

    steps.push({
        array: [...arr],
        line: 2,
        description: `Initialize n = ${n}`,
        highlights: []
    });

    for (let i = 0; i < n; i++) {
        steps.push({
            array: [...arr],
            line: 3,
            description: `Loop: i = ${i}`,
            highlights: [i]
        });

        steps.push({
            array: [...arr],
            line: 4,
            description: `Checking if arr[${i}] (${arr[i]}) === target (${target})`,
            highlights: [i],
            current: [i]
        });

        if (arr[i] === target) {
            steps.push({
                array: [...arr],
                line: 5,
                description: `Found! Target ${target} found at index ${i}`,
                highlights: [i],
                sorted: [i]
            });
            return;
        }
    }

    steps.push({
        array: [...arr],
        line: 8,
        description: `Target ${target} not found in array`,
        highlights: []
    });
}

// Render visualization
function renderVisualization() {
    if (steps.length === 0) return;

    const step = steps[currentStepIndex];
    const maxValue = Math.max(...step.array);

    visualization.innerHTML = '';

    step.array.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'array-bar';
        bar.style.height = `${(value / maxValue) * 250}px`;

        // Apply classes based on step state
        if (step.comparing && step.comparing.includes(index)) {
            bar.classList.add('comparing');
        }
        if (step.swapping && step.swapping.includes(index)) {
            bar.classList.add('swapping');
        }
        if (step.sorted && step.sorted.includes(index)) {
            bar.classList.add('sorted');
        }
        if (step.current && step.current.includes(index)) {
            bar.classList.add('current');
        }

        const valueLabel = document.createElement('div');
        valueLabel.className = 'array-bar-value';
        valueLabel.textContent = value;
        bar.appendChild(valueLabel);

        visualization.appendChild(bar);
    });
}

// Highlight code line
function highlightCodeLine(lineNumber) {
    // Remove all previous highlights
    document.querySelectorAll('.code-line').forEach(line => {
        line.classList.remove('highlighted');
        line.classList.add('executed');
    });

    // Highlight current line
    const lines = document.querySelectorAll('.code-line');
    if (lineNumber > 0 && lineNumber <= lines.length) {
        lines[lineNumber - 1].classList.add('highlighted');
        lines[lineNumber - 1].classList.remove('executed');

        // Scroll to highlighted line
        lines[lineNumber - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Update step info
function updateStepInfo() {
    if (steps.length === 0) return;

    const step = steps[currentStepIndex];
    currentStepSpan.textContent = currentStepIndex + 1;
    stepDescription.textContent = step.description;
    lineExplanation.textContent = step.description;

    highlightCodeLine(step.line);
    renderVisualization();
}

// Next step
function nextStep() {
    if (currentStepIndex < steps.length - 1) {
        currentStepIndex++;
        updateStepInfo();
        return true;
    }
    return false;
}

// Previous step
function prevStep() {
    if (currentStepIndex > 0) {
        currentStepIndex--;
        updateStepInfo();
    }
}

// Play animation
function play() {
    if (isPlaying) return;

    isPlaying = true;
    playBtn.disabled = true;
    pauseBtn.disabled = false;
    stepBtn.disabled = true;
    prevBtn.disabled = true;

    playInterval = setInterval(() => {
        if (!nextStep()) {
            pause();
        }
    }, speed);
}

// Pause animation
function pause() {
    isPlaying = false;
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    stepBtn.disabled = false;
    prevBtn.disabled = false;

    if (playInterval) {
        clearInterval(playInterval);
        playInterval = null;
    }
}

// Reset steps
function resetSteps() {
    pause();
    currentStepIndex = 0;
    generateSteps();
    updateStepInfo();

    // Remove all code highlights
    document.querySelectorAll('.code-line').forEach(line => {
        line.classList.remove('highlighted', 'executed');
    });
}

// Event listeners
algorithmSelect.addEventListener('change', (e) => {
    loadAlgorithm(e.target.value);
    parseArray();
    generateSteps();
    renderVisualization();
    updateStepInfo();
});

resetBtn.addEventListener('click', () => {
    parseArray();
    resetSteps();
});

playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);

stepBtn.addEventListener('click', () => {
    nextStep();
});

prevBtn.addEventListener('click', () => {
    prevStep();
});

resetStepsBtn.addEventListener('click', () => {
    resetSteps();
});

speedSlider.addEventListener('input', (e) => {
    speed = parseInt(e.target.value);
    speedValue.textContent = `${speed}ms`;

    if (isPlaying) {
        pause();
        play();
    }
});

// Initialize on load
init();
