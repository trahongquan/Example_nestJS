import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './users.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { PostSchema } from "../posts/model/post.model";
import { UserSchema } from "./user.model";
import { UserRepository } from "./user.repository";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController], // injector vào UserController
  providers: [UserService, UserRepository],
  // providers:[{
  //     provide: 'userEditName',
  //     useClass: UserService,
  // }]
})
export class UserModule {}
