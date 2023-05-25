import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [InMemoryDBModule.forRoot({}), TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
