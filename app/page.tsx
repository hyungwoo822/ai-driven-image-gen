"use client"
import { TodoProvider } from './context/TodoContext';
import { ThemeProvider } from './context/ThemeContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">TodoList</h1>
            <TodoInput />
            <TodoList />
          </div>
          <ThemeToggle />
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}
