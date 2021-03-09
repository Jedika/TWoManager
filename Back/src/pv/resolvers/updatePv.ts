import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';

import { GqlAuthGuard } from '../../auths/jwt-auth.guard';
import { Pv } from '../../pv/pv.entity';
import { PvServices } from '../pv.service';
import { PvUpdateInput } from '../pv.types';
import { FolderServices } from '../../folder/folder.service';

@Resolver(() => Pv)
export class UpdatePv {
  constructor(
    private pvServices: PvServices,
    private folderService: FolderServices,
  ) {}

  @Mutation(() => Pv)
  @UseGuards(GqlAuthGuard)
  async updatePv(
    @Args('input')
    input: PvUpdateInput,
  ): Promise<Pv> {
    const folder = await this.folderService.FolderById(input.folderId);

    if (!folder)
      throw new HttpException(
        "Le dossier associé à ce PV n'existe pas encore.",
        HttpStatus.NOT_ACCEPTABLE,
      );
      
      const pv = await this.pvServices.pvById(input.pvId);
      folder.factureId = input.folderId;

      Object.assign<Pv, Partial<Pv>>(pv, {
        pvId: input.pvId,
        pvMere: input.pvMere,
        commune: input.commune,
        district: input.district,
        region: input.region,
        folder,
      });

    return this.pvServices.updatePv(pv);
  }
}