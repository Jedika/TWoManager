import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  RelationId,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ObjectType, ID } from '@nestjs/graphql';

import { Folder } from '../folder/folder.entity';
import { Pv } from '../pv/pv.entity';

@ObjectType()
@Entity({ name: 'convocation' })
export class Convocation {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Field()
  @Column({ name: 'num_register' })
  numRegister: number;

  @Field()
  @Column({ name: 'name_pers_conv' })
  namePersConv: string;

  @Field()
  @Column({ name: 'convoke_on' })
  convokeOn: Date;

  @Field()
  @Column({ name: 'at_town' })
  atTown: string;

  @Field()
  @Column({ name: 'at_time' })
  atTime: string;

  @Field()
  @Column({ name: 'num_requisition' })
  numRequisition: string;

  @ManyToOne(() => Folder)
  @JoinColumn({ name: 'folder_id' })
  folder: Folder;
  @RelationId((convocation: Convocation) => convocation.folder)
  folderId: number;

  @ManyToOne(() => Pv)
  @JoinColumn({ name: 'num_pv' })
  pv: Pv;
  @RelationId((convocation: Convocation) => convocation.pv)
  numPv: number;
}