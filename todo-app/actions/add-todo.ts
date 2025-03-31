"use server"

import { v4 as uuidv4 } from "uuid"
import { getTodos, saveTodos } from "@/lib/todos"
import type { Todo } from "@/lib/types"

export async function addTodo(text: string): Promise<Todo> {
  const todos = await getTodos()

  const newTodo: Todo = {
    id: uuidv4(),
    text,
    completed: false,
    createdAt: Date.now(),
  }

  await saveTodos([newTodo, ...todos])
  return newTodo
}

