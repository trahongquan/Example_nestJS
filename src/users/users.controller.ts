import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { User } from './user.dto';
import { UserService } from './user.service';
import { UserDocument } from './user.model';

@UsePipes(new ValidationPipe()) // Level router
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
/**
 * //   constructor(private moduleRef: ModuleRef) {}
 * //   userService = this.moduleRef.get('userEditName');
 *   //   @UsePipes(new ValidationPipe()) // Level router
 * */
  /**
  @Post()
  createUser(@Body() user: User): User {
    // const userReal = plainToClass(User, user, {
    //   excludeExtraneousValues: true,
    // }); // plainToClass dùng để loại bỏ những param json thừa, chỉ lấy nhữn fiel expose
    console.log(user);
    // console.log(this.userService.createUser(user));
    // return User.plainToClass(user);
    // return this.userService.createUser(user);
    return this.userService.createUser(user);
  }
  */

  @Post()
  async createUser(@Body() userDto: User): Promise<UserDocument> {
    return this.userService.createUser(userDto);
  }

  @Get()
  async getAllUsers(): Promise<UserDocument[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UserDocument> {
    return this.userService.getUserById(id);
  }
}
