import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { getOrderCriteria } from 'src/utils/utils';

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

  async findAll(
    page: number,
    pageSize: number,
    category: string,
    sort: string,
  ) {
    try {
      const skip = (page - 1) * pageSize;
      const order = getOrderCriteria(sort);

      const products = await this.prisma.products.findMany({
        skip,
        take: Number(pageSize),
        where: {
          Categories: {
            name: category || undefined,
          },
        },
        include: {
          Categories: true,
        },
        orderBy: order,
      });

      if (!products || !products.length) {
        throw new NotFoundException('No products found');
      }

      return products;
    } catch (error) {
      console.log(error);
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
