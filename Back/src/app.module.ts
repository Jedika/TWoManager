import { JustificativeModule } from './justificative/justificative.module';
import { CauseModule } from './cause/cause.module';
import { ModelModule } from './model/model.module';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import configs, { GraphqlConfigs } from './configs';

import { UsersModule } from './user/user.module';
import { AuthModule } from './auths/auth.module';
import { ClientModule } from './client/client.module';

import { UtilsModule } from './utils/utils.module';
import { ConnectionOptions } from 'typeorm';
import { FolderModule } from './folder/folder.module';
import { FactureModule } from './facture/facture.module';
import { ConvocationModule } from './convocation/convocation.module';
import { LetterModule } from './letter/letter.module';
import { PvModule } from './pv/pv.module';
import { TypeTravModule } from './typeTrav/typeTrav.module';

const modules = [
  UtilsModule,
  UsersModule,
  AuthModule,
  ClientModule,
  ModelModule,
  FolderModule,
  FactureModule,
  ConvocationModule,
  LetterModule,
  PvModule,
  TypeTravModule,
  CauseModule,
  JustificativeModule
];

@Module({
  imports: [
    ...modules,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configs],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return configService.get<ConnectionOptions>('database');
      },
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const graphqlConfigs = configService.get<GraphqlConfigs>('graphql');
        return {
          ...graphqlConfigs,
          autoSchemaFile: join(process.cwd(), 'src/types/schema.gql'),
          sortSchema: true,
          context: ({ req }) => ({ req }),
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
