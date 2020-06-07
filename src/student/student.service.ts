import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { StudentInput } from './student-create.input';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepo: Repository<Student>
    ){}
    createStudent =async(studentInput: StudentInput): Promise<Student> =>{
        const {carnet, nombre, apellido} = studentInput
        const student = this.studentRepo.create({
            carnet,
            nombre,
            apellido
        })
        return this.studentRepo.save(student);
    }

    getAllStudents = async(): Promise<Student[]> =>{
        return this.studentRepo.find();
    }
    getStudentById= async(carnet:string) : Promise<Student> =>{
        return this.studentRepo.findOne({where:{carnet}})
    }

    getManyStudenys = async(studentsIds: string[]): Promise<Student[]> => {
        return this.studentRepo.find({
            where:{
                carnet:{
                    $in:studentsIds
                }
            }
        })
    }

}
