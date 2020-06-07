import { StudentService } from './student.service';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentInput } from './student-create.input';

@Resolver(of => StudentType )
export class StudentResolver{
    constructor(
        private studentService:StudentService
    ){}

    
    @Mutation(returns => StudentType)
    createStudent(
        @Args('Student') studentInput: StudentInput
    ){
        return this.studentService.createStudent(studentInput);
    }
    @Query(returns => [StudentType])
    getStudents(){
        return this.studentService.getAllStudents();
    }
    @Query(returns => StudentType)
    studentByCarnet(
        @Args('carnet') carnet: string 
    ){
        return this.studentService.getStudentById(carnet);
    }
}