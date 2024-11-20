import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Post {
  @Prop()
  title: string;

  @Prop()
  desc: string;

  @Prop()
  content: string;

}

export const PostSchema = SchemaFactory.createForClass(Post);

export interface Post extends Document {
  title: string;
  desc: string;
  content: string;
}