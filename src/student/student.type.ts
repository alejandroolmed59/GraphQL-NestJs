import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType{
    @Field({ description:"descripccion brandom"})
    carnet:string
    @Field()
    nombre:string
    @Field()
    apellido:string
}