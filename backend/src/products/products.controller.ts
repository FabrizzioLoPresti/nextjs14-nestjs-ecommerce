import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Query,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { handleError } from 'src/utils/utils';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
    @Res() res: Response,
  ) {
    try {
      const product = await this.productsService.create(createProductDto);
      return res.status(201).json(product);
    } catch (error) {
      return handleError(res, error);
    }
  }

  @Get()
  async findAll(
    @Query('page') page: number = 1, // Página por defecto es la 1
    @Query('pageSize') pageSize: number = 10, // Tamaño de la página por defecto es 10
    @Query('category') category: string,
    @Query('sort') sort: string,
    @Res() res: Response,
  ) {
    try {
      const products = await this.productsService.findAll(
        page,
        pageSize,
        category,
        sort,
      );
      return res.status(200).json(products);
    } catch (error) {
      return handleError(res, error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const product = await this.productsService.findOne(id);
      return product;
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      const product = await this.productsService.update(id, updateProductDto);
      return product;
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const product = await this.productsService.remove(id);
      return product;
    } catch (error) {
      throw error;
    }
  }
}
