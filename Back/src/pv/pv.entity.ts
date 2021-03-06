import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  RelationId,
  OneToOne,
} from 'typeorm';
import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Folder } from '../folder/folder.entity';

@ObjectType()
@Entity({ name: 'pv' })
export class Pv {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ name: 'pv_Id' })
  pvId: number;

  @Field({ nullable: true })
  @Column({ name: 'pv_mere', length: 40, default: '' })
  pvMere?: string;

  @Field({ nullable: true })
  @Column({ name: 'commune', length: 20,  default: '' })
  commune?: string;

  @Field({ nullable: true })
  @Column({ name: 'district', length: 20,  default: '' })
  district?: string;

  @Field({ nullable: true })
  @Column({ name: 'region', length: 20,  default: '' })
  region?: string;

  @OneToOne(() => Folder, { nullable: true })
  @Field(() => Folder, { nullable: true })
  @JoinColumn({ name: 'folder_id' })
  folder: Folder;
  @RelationId((pv: Pv) => pv.folder)
  folderId?: number;
}
