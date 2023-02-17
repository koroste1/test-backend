import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

type PostCreationAttrs = {
    title: string;
    content: string;
    userId: number;
    image: string;
};

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({example:'1', description:'Id'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example:'title', description:'Post title'})
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @ApiProperty({example:'content', description:'Post content'})
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    content: string;

    @ApiProperty({example:'admin', description:'password'})
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    image: string;

    @ForeignKey(()=>User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User

}
