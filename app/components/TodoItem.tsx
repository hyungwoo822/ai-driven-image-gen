"use client"
import { useTodo } from '../context/TodoContext';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo } = useTodo();

  return (
    <li className="flex items-center gap-2 p-2 border rounded bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="w-4 h-4 text-blue-500 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 dark:focus:ring-blue-400"
      />
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-gray-100'}`}>
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-2 py-1 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors"
      >
        삭제
      </button>
    </li>
  );
} 