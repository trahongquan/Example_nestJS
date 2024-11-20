// user.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './user.model';
import { User } from './user.dto';

@Injectable() /** đánh dấu là provider */
export class UserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(userDto: any): Promise<UserDocument> {
    userDto.createdAt = new Date();
    userDto.updatedAt = new Date();
    userDto.deletedAt = new Date();
    const createdUser = new this.userModel(User.plainToClass(userDto));
    return createdUser.save();
  }

  async getAllUsers(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async getUserById(id: number): Promise<UserDocument> {
    return this.userModel.findOne({ id: id }).exec();
  }
}
