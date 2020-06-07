import { InputType, Field } from "@nestjs/graphql";
import {  Length, min } from "class-validator";

@InputType()
export class StudentInput{
    @Field()
    @Length(8,8)
    carnet:string;
    @Field()
    nombre:string;
    @Field()
    apellido:string;
}