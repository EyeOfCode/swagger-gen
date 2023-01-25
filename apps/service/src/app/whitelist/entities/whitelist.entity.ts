import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Whitelist {
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

export type WhitelistDocument = Whitelist & Document;

export const WhitelistSchema = SchemaFactory.createForClass(Whitelist);
