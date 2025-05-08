"use client"
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useTodo();

  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
} 