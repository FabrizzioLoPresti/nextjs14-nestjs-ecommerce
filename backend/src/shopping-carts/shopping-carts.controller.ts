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
import { ShoppingCartsService } from './shopping-carts.service';
import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { AddNewProductDto } from './dto/add-new-product.dto';
import { handleError } from 'src/utils/utils';
import { RemoveProductDto } from './dto/remove-product.dto';

@Controller('shopping-carts')
export class ShoppingCartsController {
  constructor(private readonly shoppingCartsService: ShoppingCartsService) { }

  @Post()
  async create(
    @Body() createShoppingCartDto: CreateShoppingCartDto,
    @Query('email') email: string,
    @Res() res: Response,
  ) {
    try {
      const shoppingCart = await this.shoppingCartsService.create(
        createShoppingCartDto,
        email,
      );
      return res.status(201).json(shoppingCart);
    } catch (error) {
      return handleError(res, error);
    }
  }

  @Post('add-product')
  async addProduct(
    @Body() addNewProductDto: AddNewProductDto,
    @Query('email') email: string,
    @Res() res: Response,
  ) {
    try {
      const shoppingCart =
        await this.shoppingCartsService.addProductToShoppingCart(
          addNewProductDto,
          email,
        );
      return res.status(201).json(shoppingCart);
    } catch (error) {
      return handleError(res, error);
    }
  }

  // @Get()
  // async findAll(@Res() res: Response) {
  //   try {
  //     const shoppingCarts = await this.shoppingCartsService.findAll();
  //     return res.status(200).json(shoppingCarts);
  //   } catch (error) {
  //     return handleError(res, error);
  //   }
  // }

  @Get()
  async findOne(@Query('email') email: string, @Res() res: Response) {
    try {
      const shoppingCart = await this.shoppingCartsService.findOne(email);
      return res.status(200).json(shoppingCart);
    } catch (error) {
      return handleError(res, error);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateShoppingCartDto: UpdateShoppingCartDto,
    @Res() res: Response,
  ) {
    try {
      const shoppingCart = await this.shoppingCartsService.update(
        id,
        updateShoppingCartDto,
      );
      return res.status(200).json(shoppingCart);
    } catch (error) {
      return handleError(res, error);
    }
  }

  @Delete('remove-product')
  async removeProduct(
    @Query('email') email: string,
    @Body() removeProductDto: RemoveProductDto,
    @Res() res: Response,
  ) {
    try {
      const shoppingCart =
        await this.shoppingCartsService.removeProductFromShoppingCart(
          removeProductDto,
          email,
        );
      return res.status(200).json(shoppingCart);
    } catch (error) {
      return handleError(res, error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      const shoppingCart = await this.shoppingCartsService.remove(id);
      return res.status(200).json(shoppingCart);
    } catch (error) {
      return handleError(res, error);
    }
  }
}
