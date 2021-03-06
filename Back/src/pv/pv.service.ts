import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Folder } from '../folder/folder.entity';
import { Pv } from './pv.entity';

@Injectable()
export class PvServices {
  constructor(
    @InjectRepository(Pv)
    private pvRepository: Repository<Pv>,
  ) {}

  async addPv(pv: Pv): Promise<Pv> {
    return this.pvRepository.save(pv);
  }

  async updatePv(pv: Pv): Promise<Pv> {
    return this.pvRepository.save(pv);
  }

  async pvByFolder(folder: Folder): Promise<Pv> {
    return this.pvRepository.findOne({ where: { folder } });
  }

  async pvById(pvId: number): Promise<Pv> {
    return this.pvRepository.findOne(pvId)
  }
}
