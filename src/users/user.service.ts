// import { User } from './user.dto';
// import { UserRepository } from './user.repository';

// export class UserService {
//   userRepository: UserRepository;
//   constructor() {
//     this.userRepository = new UserRepository();
//   }
//   createUser(user: any): any {
//     user.id = 1;
//     user.createdAt = new Date();
//     user.updatedAt = new Date();
//     user.deletedAt = new Date();
//     return User.plainToClass(user);
//   }
// }
// user.service.ts
// user.service.ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserDocument } from './user.model';

@Injectable() /** đánh dấu là provider */
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userDto: any): Promise<UserDocument> {
    return this.userRepository.createUser(userDto);
  }

  async getAllUsers(): Promise<UserDocument[]> {
    return this.userRepository.getAllUsers();
  }

  async getUserById(id: number): Promise<UserDocument> {
    return this.userRepository.getUserById(id);
  }
}