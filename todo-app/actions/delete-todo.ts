"use server"

import { getTodos, saveTodos } from "@/lib/todos"

export async function deleteTodo(id: string): Promise<void> {
  const todos = await getTodos()
  const updatedTodos = todos.filter((todo) => todo.id !== id)

  await saveTodos(updatedTodos)
}

