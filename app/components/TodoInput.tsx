"use client"
import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

export default function TodoInput() {
  const [input, setInput] = useState('');
  const { addTodo } = useTodo();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim() === '') return;
    addTodo(input);
    setInput('');
  };

  return (
    <div className="flex gap-2 mb-4">
      <input 
        type="text" 
        value={input} 
        onChange={handleInputChange}
        className="flex-1 px-3 py-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        placeholder="할 일을 입력하세요"
      />
      <button 
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
      >
        추가
      </button>
    </div>
  );
} 