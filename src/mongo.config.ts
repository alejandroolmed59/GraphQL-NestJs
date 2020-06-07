import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { Student } from './student/student.entity';

export const ConfigMongo:TypeOrmModuleOptions={
    type:'mongodb',
    url:'mongodb+srv://master:CfQQd2h2gXsx0RC7@controlbd-fogfz.mongodb.net/school',
    synchronize:true,
    useUnifiedTopology:true,
    entities: [
        Lesson,
        Student
    ]
}