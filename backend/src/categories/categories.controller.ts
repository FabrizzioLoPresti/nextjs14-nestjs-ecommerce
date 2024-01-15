import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { handleError } from 'src/utils/utils';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
    @Res() res: Response,
  ) {
    try {
      const category = await this.categoriesService.create(createCategoryDto);
      return res.status(201).json(category);
    } catch (error) {
      return handleError(res, error);
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const categories = await this.categoriesService.findAll();
      return res.status(200).json(categories);
    } catch (error) {
      return handleError(res, error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const category = await this.categoriesService.findOne(id);
      return res.status(200).json(category);
    } catch (error) {
      return handleError(res, error);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Res() res: Response,
  ) {
    try {
      const category = await this.categoriesService.update(
        id,
        updateCategoryDto,
      );
      return res.status(200).json(category);
    } catch (error) {
      return handleError(res, error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      const category = await this.categoriesService.remove(id);
      return res.status(200).json(category);
    } catch (error) {
      return handleError(res, error);
    }
  }
}
