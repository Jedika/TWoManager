import { TableName } from '../TableName';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Field, ObjectType, ID } from '@nestjs/graphql';

import { ClientEntity } from './client.entity';
import { FolderEntity } from './folder.entity';

@ObjectType()
@Entity({ name: TableName.User })
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ name: 'user_Id' })
  userId?: number;

  @Field()
  @Column({ name: 'user_Name' })
  userName: string;

  @Field()
  @Column({ name: 'login' })
  login: string;

  @Field()
  @Column({ name: 'password' })
  password: string;

  @Field()
  @Column({ name: 'type' })
  type: string;

  @Field()
  @Column({ name: 'status' })
  status: boolean;

  @ManyToMany(type => ClientEntity)
  @JoinTable()
  categories: ClientEntity[];

  @Field(type => [FolderEntity])
  folders?: FolderEntity[];
}
