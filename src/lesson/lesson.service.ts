import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import {v4 as uuid} from 'uuid';
import { async } from 'rxjs/internal/scheduler/async';
import { LessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson)
        private lessonRepository: Repository<Lesson>
    ){}

    getLesson = async(): Promise<Lesson[]> =>{
        return this.lessonRepository.find();
    }
    getLessonByid = async(id:string) : Promise<Lesson> =>{
        return this.lessonRepository.findOne({id})
    }

    createLesson = async(lessonInput:LessonInput): Promise<Lesson>=>{
        const {name, startDate, endDate, students} = lessonInput;
        const lesson = this.lessonRepository.create({
            id:uuid(),
            name,
            startDate,
            endDate,
            students
        })
        return this.lessonRepository.save(lesson);
    }
    assignStudents = async(lessonId: string, studentIds: string[]): Promise<Lesson>=>{
        const lesson =  await this.lessonRepository.findOne({id:lessonId});

        const studentsWithDuplicates = [...lesson.students, ...studentIds];

        const students = [...new Set(studentsWithDuplicates)];

        lesson.students = students;
        return this.lessonRepository.save(lesson);
    }
}
