import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PostsService } from "../service/posts.service";
import { CreatePostDto, UpdatePostDto } from "../dto/post.dto";

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {
  }
  @Get()
  async getAllPost() : Promise<Post[]>  {
    return this.postsService.getAllPosts();
  }
  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postsService.getPostById(Number(id));
  }

  @Post()
  async createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }

  @Put(':id')
  async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.replacePost(Number(id), post);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    await this.postsService.deletePost(Number(id));
    return true;
  }
}

