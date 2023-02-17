import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'admin', description:'Email'})
    @IsString({message:'Must be string'})
    @IsEmail({}, {message: 'Incorrect email'})
    readonly email: string;
    @ApiProperty({example: 'admin', description:'Password'})
    @IsString({message:'Must be string'})
    @Length(4, 16, {message: "Min password length 4"})
    readonly password: string;
}
