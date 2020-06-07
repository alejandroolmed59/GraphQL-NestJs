import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigMongo } from './mongo.config';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ConfigMongo),
    GraphQLModule.forRoot({
      autoSchemaFile:true
    }),
    LessonModule,
    StudentModule
  ],
})
export class AppModule {}
