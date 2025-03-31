import { kv } from "@vercel/kv"
import type { Todo } from "./types"
import { TODOS_KEY, DEMO_TODOS } from "./constants"

// Helper function to check if we're in demo mode
function isInDemoMode(): boolean {
  return !(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)
}

export async function getTodos(): Promise<Todo[]> {
  // If we're in demo mode, return demo todos immediately without trying KV
  if (isInDemoMode()) {
    return [...DEMO_TODOS]
  }

  try {
    // Only try to get todos from Upstash KV if we're not in demo mode
    const todos = await kv.get<Todo[]>(TODOS_KEY)

    // If we get a response (even empty array), return it sorted
    if (todos !== null && todos !== undefined) {
      return todos.sort((a, b) => b.createdAt - a.createdAt)
    }

    // If we get null/undefined (first time use), return an empty array
    return []
  } catch (error) {
    console.error("Failed to fetch todos:", error)
    // Return an empty array on error
    return []
  }
}

export async function saveTodos(todos: Todo[]): Promise<void> {
  // If we're in demo mode, don't try to save to KV
  if (isInDemoMode()) {
    console.log("Running in demo mode, changes won't persist")
    return
  }

  try {
    await kv.set(TODOS_KEY, todos)
  } catch (error) {
    console.error("Failed to save todos:", error)
    throw new Error("Failed to save todos")
  }
}

