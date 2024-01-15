import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) { }

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = await this.prisma.categories.create({
        data: createCategoryDto,
      });
      return category;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const categories = await this.prisma.categories.findMany();

      if (!categories || !categories.length) {
        throw new NotFoundException('No categories found');
      }

      return categories;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async findOne(id: string) {
    try {
      const category = await this.prisma.categories.findUnique({
        where: { id },
      });

      if (!category) {
        throw new NotFoundException(`Category #${id} not found`);
      }

      return category;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      const category = await this.prisma.categories.update({
        where: { id },
        data: updateCategoryDto,
      });

      if (!category) {
        throw new NotFoundException(`Category #${id} not found`);
      }

      return category;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async remove(id: string) {
    try {
      const category = await this.prisma.categories.delete({
        where: { id },
      });

      if (!category) {
        throw new NotFoundException(`Category #${id} not found`);
      }

      return category;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
