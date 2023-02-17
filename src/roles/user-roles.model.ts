import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Role} from "./roles.model";

@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
    @ApiProperty({example: '1', description: 'Id'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;


    @ForeignKey(()=>Role)
    @ApiProperty({example: 'admin', description: 'Unique User role'})
    @Column({
        type: DataType.INTEGER,
    })
    roleId: number;


    @ForeignKey(()=>User)
    @ApiProperty({example: 'All actions', description: 'Role description'})
    @Column({
        type: DataType.INTEGER,
    })
    userId: number;
}
