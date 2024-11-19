import { User } from './user.dto';
import { UserRepository } from './user.repository';

export class UserService {
  userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  createUser(user: any): any {
    user.id = 1;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    user.deletedAt = new Date();
    return User.plainToClass(user);
  }
}
