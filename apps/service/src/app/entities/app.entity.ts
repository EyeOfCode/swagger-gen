import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class App {
  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  createdAt?: Date;

  @ApiProperty()
  @Prop()
  updatedAt?: Date;
}

export type AppDocument = App & Document;

export const AppSchema = SchemaFactory.createForClass(App);
