import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShoppingCartsService } from './shopping-carts.service';
import { ShoppingCartsController } from './shopping-carts.controller';

@Module({
  controllers: [ShoppingCartsController],
  providers: [PrismaService, ShoppingCartsService],
})
export class ShoppingCartsModule { }
