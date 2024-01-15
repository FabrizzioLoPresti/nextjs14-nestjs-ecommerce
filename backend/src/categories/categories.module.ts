import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
  controllers: [CategoriesController],
  providers: [PrismaService, CategoriesService],
})
export class CategoriesModule { }
