import { Body, Controller, Get, HttpCode, Post, Put, Query } from '@nestjs/common';
import { Todo } from './todo.schema';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {

  constructor( private readonly todoService: TodoService) {}
  
  @Get()
  @HttpCode(200)
  getAllTodos(): Todo[] { 
    return this.todoService.getAllTodos();
  }

  @Get()
  @HttpCode(200)
  getTodoById(@Query() id: string): Todo { 
    return this.todoService.getTodoById(id);
  }

  @Post()
  @HttpCode(201)
  createTodo(@Body() todo: Todo): Todo {
    return this.todoService.createTodo(todo);
  }

  @Put()
  @HttpCode(200)
  updateTodo(@Body() todo: Todo): Todo {
    return this.todoService.updateTodo(todo);
  }

}
