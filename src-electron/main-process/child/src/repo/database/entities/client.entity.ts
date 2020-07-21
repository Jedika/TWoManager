import { TableName } from '../TableName';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: TableName.Client })
export class ClientEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ name: 'client_Id' })
  clientId: number;

  @Field()
  @Column({ name: 'client_Name' })
  clientName: string;

  @Field()
  @Column({ name: 'domicile' })
  domicile: string;

  @Field()
  @Column({ name: 'contact' })
  contact: string;
}
