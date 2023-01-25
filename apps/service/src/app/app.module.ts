import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import { App, AppSchema } from './entities/app.entity';

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
    MongooseModule.forFeature([{ name: App.name, schema: AppSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
