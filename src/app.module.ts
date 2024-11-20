import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
// import { AuthModule } from './jwt/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  //Decorator -- giống Anotation bên java
  imports: [
    UserModule,
    // AuthModule,
    JwtModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    ConfigModule.forRoot(),
    // MongooseModule.forRoot(process.env.MONGODB_URL),
    PostsModule,
    // ... Các module khác
  ],
})
export class AppModule {}
