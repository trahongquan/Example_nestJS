import { Module, Post } from "@nestjs/common";
import { PostsService } from './service/posts.service';
import { PostsController } from './controllers/posts.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { PostSchema } from "./model/post.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }]),
  ],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
