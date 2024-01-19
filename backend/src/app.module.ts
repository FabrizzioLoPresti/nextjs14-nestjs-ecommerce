import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { ShoppingCartsModule } from './shopping-carts/shopping-carts.module';

@Module({
  imports: [UsersModule, CategoriesModule, ProductsModule, ShoppingCartsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
