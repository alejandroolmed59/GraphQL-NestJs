import { Resolver, Query, Mutation, Args, Field, ID, ResolveField, Parent } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { LessonInput } from './lesson.input';
import { StudentService } from '../student/student.service';
import { Lesson } from './lesson.entity';

@Resolver(of=> LessonType)
export class LessonResolver{
    constructor(
        private lessonService: LessonService,
        private studentService: StudentService
    ){}

    @Query(returns=>[LessonType])
    lesson(){
        return this.lessonService.getLesson();
    }
    
    @Query(returns=> LessonType)
    lessonById(
        @Args({name:'id', type:()=>ID}) id:string
    ){
        return this.lessonService.getLessonByid(id);
    }

    @Mutation(returns => LessonType)
    createLesson(
        @Args('LessonInput') lessonInput: LessonInput
    ){
        return this.lessonService.createLesson(lessonInput);
    }

    @Mutation(returns => LessonType)
    assignStudents(
        @Args({name:'StudentsIds', type:()=>[ID]})  studentsIds:string[],
        @Args({name:'LessonId', description:"algoooo", type:()=>ID}) lessonId:string
    ){
        return this.lessonService.assignStudents(lessonId, studentsIds);
    }
    @ResolveField()
    async students(@Parent() lesson: Lesson){
        return this.studentService.getManyStudenys(lesson.students)
    }

}