import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './users.controller';

@Module({
  controllers: [UserController], // injector vào UserController
  providers: [UserService],
// providers:[{
//     provide: 'userEditName',
//     useClass: UserService,
// }]
})
export class UserModule {}
