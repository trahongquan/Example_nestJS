// import { Body, Controller, Get, Post } from '@nestjs/common';
// import { Cat } from './cats.schema';
// import { CatsService } from './cats.service';

// @Controller('cats')
// export class CatsController {
//   constructor(private catsService: CatsService) {}

//   @Post()
//   async create(@Body() createCatDto: Cat) {
//     this.catsService.create(createCatDto);
//   }

//   @Get()
//   async findAll(): Promise<Cat[]> {
//     return this.catsService.findAll();
//   }
// }