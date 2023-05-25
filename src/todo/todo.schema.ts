import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db"

export interface Todo extends InMemoryDBEntity {
  title: string
  description: string
  done: boolean
}

