import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) { }

  async create(createProductDto: CreateProductDto) {
    try {
      const product = await this.prisma.products.create({
        data: createProductDto,
      });
      return product;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const products = await this.prisma.products.findMany({
        include: {
          Categories: true,
        },
      });

      if (!products || !products.length) {
        throw new NotFoundException('No products found');
      }

      return products;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.prisma.products.findUnique({
        where: { id },
        include: {
          Categories: true,
        },
      });

      if (!product) {
        throw new NotFoundException(`Product #${id} not found`);
      }

      return product;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.prisma.products.update({
        where: { id },
        data: updateProductDto,
      });

      if (!product) {
        throw new NotFoundException(`Product #${id} not found`);
      }

      return product;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async remove(id: string) {
    try {
      const product = await this.prisma.products.delete({
        where: { id },
      });

      if (!product) {
        throw new NotFoundException(`Product #${id} not found`);
      }

      return product;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
