import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAppStore = create(
  persist(
    (set, get) => ({
      // Theme
      theme: 'light',
      toggleTheme: () => set((state) => ({
        theme: state.theme === 'light' ? 'dark' : 'light'
      })),

      // Animation speed
      animationSpeed: 1,
      setAnimationSpeed: (speed) => set({ animationSpeed: speed }),

      // User progress (stored locally)
      completedTopics: [],
      markTopicComplete: (topicId) =>
        set((state) => ({
          completedTopics: [...new Set([...state.completedTopics, topicId])],
        })),

      // Bookmarks
      bookmarks: [],
      toggleBookmark: (itemId) =>
        set((state) => {
          const isBookmarked = state.bookmarks.includes(itemId);
          return {
            bookmarks: isBookmarked
              ? state.bookmarks.filter((id) => id !== itemId)
              : [...state.bookmarks, itemId],
          };
        }),

      // Current visualization state
      isPlaying: false,
      setIsPlaying: (playing) => set({ isPlaying: playing }),

      currentStep: 0,
      setCurrentStep: (step) => set({ currentStep: step }),

      totalSteps: 0,
      setTotalSteps: (total) => set({ totalSteps: total }),
    }),
    {
      name: 'dsa-learn-storage', // localStorage key
      partialize: (state) => ({
        theme: state.theme,
        animationSpeed: state.animationSpeed,
        completedTopics: state.completedTopics,
        bookmarks: state.bookmarks,
      }),
    }
  )
);
