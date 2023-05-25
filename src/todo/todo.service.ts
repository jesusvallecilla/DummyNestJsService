import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { Todo } from './todo.schema';

@Injectable()
export class TodoService {
  
  constructor( private readonly todoMemory: InMemoryDBService<Todo>) {}

  getAllTodos(): Todo[] {
    return this.todoMemory.getAll();
  }

  getTodoById(id: string): Todo {
    return this.todoMemory.get(id);
  }

  createTodo(todo: Todo): Todo {
    return this.todoMemory.create(todo);
  }

  updateTodo(todo: Todo): Todo{
    this.todoMemory.update(todo);
    return this.todoMemory.get(todo.id)
  }

}

