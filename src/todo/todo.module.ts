import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [InMemoryDBModule.forFeature('one', {})],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
