import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
const logger = new Logger('Database Connection');

async function bootstrap(): Promise<void> {
  try {
    const app = await NestFactory.create(AppModule);
    // app.useGlobalPipes(new ValidationPipe()); // Validator Pipe level globle
    const PORT = 3333;
    await app.listen(PORT, () => {
      logger.log(`App started on port ${PORT}`);
      logger.log('Connected to MongoDB database successfully');
    });
  } catch (error) {
    logger.error(`Error starting the app: ${error.message}`);
  }
}

bootstrap();