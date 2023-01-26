import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import { WhitelistModule } from './whitelist/whitelist.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, databaseConfig],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        return {
          ...config.get('db'),
        };
      },
      inject: [ConfigService],
    }),
    WhitelistModule,
    ProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
