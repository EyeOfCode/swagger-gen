import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateAppDto } from './dto/create-app.dto';
import { App, AppDocument } from './entities/app.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(App.name)
    private readonly appModel: Model<AppDocument>
  ) {}

  async find() {
    const app = await this.appModel.find();
    return app;
  }

  async findById(id: string) {
    const app = await this.appModel.findById(new Types.ObjectId(id));
    return app;
  }

  async create(data: CreateAppDto) {
    const app = await this.appModel.create(data);
    return app;
  }
}
