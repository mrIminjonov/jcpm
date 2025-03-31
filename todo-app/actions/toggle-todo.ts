"use server"

import { getTodos, saveTodos } from "@/lib/todos"

export async function toggleTodo(id: string): Promise<void> {
  const todos = await getTodos()
  const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))

  await saveTodos(updatedTodos)
}

