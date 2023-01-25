import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateAppDto } from './dto/create-app.dto';
import { Project, ProjectDocument } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<ProjectDocument>
  ) {}

  async find() {
    const project = await this.projectModel.find();
    return project;
  }

  async findById(id: string) {
    const project = await this.projectModel.findById(new Types.ObjectId(id));
    return project;
  }

  async create(data: CreateAppDto) {
    const project = await this.projectModel.create(data);
    return project;
  }

  async removeAll() {
    const project = await this.projectModel.deleteMany();
    return project;
  }
}
