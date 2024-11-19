import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';


@Module({
  imports: [UserModule],
}) //Decorator -- giống Anotation bên java
export class AppModule {}
