import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { User } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
//   constructor(private moduleRef: ModuleRef) {}
//   userService = this.moduleRef.get('userEditName');
  //   @UsePipes(new ValidationPipe()) // Level router
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

  @Get()
  getAllUsers() {
    return [
      {
        name: 'xxx',
        age: 24,
      },
    ];
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    //ParseIntPipe sử dụng Pipe để valuedation: kiểm tra trước khi nhận vào
    console.log(id);
    return 'test';
  }
}
