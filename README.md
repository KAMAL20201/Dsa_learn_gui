# DSA Learning App - Visual Data Structures & Algorithms

An interactive web application to help engineers learn Data Structures and Algorithms through visual representations and animations. Built with modern web technologies for an engaging learning experience.

## 🚀 Features

### Current Features
- **Array Visualizer**: Interactive bubble sort visualization with step-by-step animations
- **Linked List Visualizer**: Visualize nodes, pointers, and operations (insert, delete, reverse)
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Animation Controls**: Adjust animation speed to your preference
- **Interactive Operations**: Insert, delete, and manipulate data structures in real-time

### Coming Soon
- Binary Trees (BST, AVL, Red-Black)
- Graph Algorithms (BFS, DFS, Dijkstra's, Kruskal's, Prim's)
- Hash Tables with collision handling
- Heaps and Priority Queues
- Dynamic Programming visualizations
- Code Playground with multiple language support
- Practice Problems with test cases

## 🛠️ Tech Stack

### Frontend Only Architecture
This is a **pure frontend application** with no backend or authentication required.

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Flow** - For graph and tree visualizations (to be used)
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **Monaco Editor** - Code editor (for future code playground)
- **Lucide React** - Icon library

### Data Storage
- **localStorage** - Stores user preferences, progress, and bookmarks locally
- **No backend required** - All data is client-side
- **No authentication** - Open to all users

## 📁 Project Structure

```
Dsa_learn_gui/
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── visualizations/     # Data structure visualizers
│   │   │   │   ├── ArrayVisualizer.jsx
│   │   │   │   ├── LinkedListVisualizer.jsx
│   │   │   │   └── ... (more to come)
│   │   │   ├── layout/             # Layout components
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── ui/                 # Reusable UI components
│   │   ├── pages/                  # Page components (for routing)
│   │   ├── stores/                 # Zustand stores
│   │   │   └── appStore.js         # Main app state
│   │   ├── data/                   # Static data (DSA info)
│   │   │   └── dataStructures.js   # DS & Algo metadata
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── utils/                  # Utility functions
│   │   ├── App.jsx                 # Main App component
│   │   ├── main.jsx               # Entry point
│   │   └── index.css              # Global styles
│   ├── public/                     # Static assets
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Dsa_learn_gui
   ```

2. **Navigate to client directory**
   ```bash
   cd client
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The app will hot-reload as you make changes

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Architecture Overview

### State Management
The app uses **Zustand** for lightweight state management with **persistence** to localStorage.

**Store Structure** (`stores/appStore.js`):
- `theme` - Current theme (light/dark)
- `animationSpeed` - Speed multiplier for animations
- `completedTopics` - Array of completed topic IDs
- `bookmarks` - Array of bookmarked items
- `isPlaying`, `currentStep`, `totalSteps` - Animation playback state

### Component Architecture

#### Visualizer Components
Each visualizer is a self-contained component with:
- Internal state for the data structure
- Animation controls (play, pause, reset)
- Step-by-step operation execution
- Real-time visual feedback
- Complexity information display

Example:
```jsx
<ArrayVisualizer />
<LinkedListVisualizer />
<TreeVisualizer /> // Coming soon
```

#### Layout Components
- **Navbar** - Navigation and theme toggle
- **Footer** - Credits and information

### Data Files
Static data for all data structures and algorithms is stored in `src/data/`:
- `dataStructures.js` - Metadata, complexities, descriptions
- Future: Problem sets, test cases, code templates

## 🎯 Key Features Explained

### Animation System
Using **Framer Motion** for smooth animations:
- `AnimatePresence` for enter/exit animations
- `layout` animations for smooth position changes
- `motion` components for scale, rotation, color transitions
- Configurable animation speed via store

### Theme System
- CSS variables for consistent theming
- Dark mode class on `<html>` element
- Persisted preference in localStorage
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Breakpoints: `sm`, `md`, `lg`, `xl`
- Touch-friendly controls
- Collapsible mobile menu

## 📚 Adding New Visualizations

To add a new data structure visualizer:

1. **Create the component** in `src/components/visualizations/`
   ```jsx
   // YourDataStructure.jsx
   import { useState } from 'react';
   import { motion } from 'framer-motion';

   const YourDataStructure = () => {
     // Your visualization logic
     return <div>...</div>;
   };

   export default YourDataStructure;
   ```

2. **Add metadata** to `src/data/dataStructures.js`
   ```javascript
   {
     id: 'your-ds',
     name: 'Your Data Structure',
     complexity: { ... },
     description: '...'
   }
   ```

3. **Import and use** in `App.jsx`
   ```jsx
   import YourDataStructure from './components/visualizations/YourDataStructure';

   // Add to App
   <section id="your-ds">
     <YourDataStructure />
   </section>
   ```

## 🔧 Configuration

### Tailwind Configuration
Customize colors, animations, and theme in `tailwind.config.js`

### Vite Configuration
Modify build settings in `vite.config.js`

### Animation Speed
Users can adjust via the UI (to be implemented in settings panel)

## 🌐 Deployment

This is a static site that can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- Any static hosting service

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 🎓 Learning Path (Roadmap)

### Phase 1: Linear Data Structures ✅
- [x] Arrays
- [x] Linked Lists
- [ ] Stacks
- [ ] Queues

### Phase 2: Trees 🚧
- [ ] Binary Trees
- [ ] Binary Search Trees
- [ ] AVL Trees
- [ ] Red-Black Trees
- [ ] Heaps

### Phase 3: Graphs 📅
- [ ] Graph Representations
- [ ] BFS/DFS
- [ ] Dijkstra's Algorithm
- [ ] Kruskal's Algorithm
- [ ] Prim's Algorithm

### Phase 4: Advanced Topics 📅
- [ ] Hash Tables
- [ ] Tries
- [ ] Dynamic Programming
- [ ] Backtracking
- [ ] Greedy Algorithms

### Phase 5: Interactive Features 📅
- [ ] Code Playground
- [ ] Practice Problems
- [ ] Complexity Comparison Tool
- [ ] Progress Tracking Dashboard

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by [VisuAlgo](https://visualgo.net/)
- Built with modern React ecosystem
- Animations powered by Framer Motion
- Icons by Lucide

## 📧 Contact

For questions or suggestions, please open an issue in the repository.

---

**Made with ❤️ for engineers learning Data Structures & Algorithms**
