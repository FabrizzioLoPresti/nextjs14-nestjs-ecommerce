import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';

@Injectable()
export class ShoppingCartsService {
  constructor(private prisma: PrismaService) { }

  async create(createShoppingCartDto: CreateShoppingCartDto) {
    try {
      const shoppingCartExists = await this.prisma.shoppingCarts.findUnique({
        where: { user_id: createShoppingCartDto.user_id },
      });

      if (shoppingCartExists) {
        throw new NotFoundException(
          `Shopping cart for user #${createShoppingCartDto.user_id} already exists`,
        );
      }

      const shoppingCart = await this.prisma.$transaction(async (prisma) => {
        const shoppingCart = await prisma.shoppingCarts.create({
          data: {
            user_id: createShoppingCartDto.user_id,
          },
        });

        const shoppingCartDetailsPromises =
          createShoppingCartDto.shopping_cart_details.map(
            (shoppingCartDetail) => {
              return prisma.shoppingCartDetails.create({
                data: {
                  quantity: shoppingCartDetail.quantity,
                  product_id: shoppingCartDetail.product_id,
                  shopping_cart_id: shoppingCart.id,
                },
              });
            },
          );

        const shoppingCartDetails = await Promise.all(
          shoppingCartDetailsPromises,
        );

        return {
          shoppingCart,
          shoppingCartDetails,
        };
      });

      return shoppingCart;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const shoppingCarts = await this.prisma.shoppingCarts.findMany({
        include: {
          ShoppingCartDetails: {
            include: {
              Products: true,
            },
          },
        },
      });

      if (!shoppingCarts || !shoppingCarts.length) {
        throw new NotFoundException('No shopping carts found for this user');
      }

      return shoppingCarts;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async findOne(email: string) {
    try {
      const findUser = await this.prisma.users.findUnique({
        where: { email },
      });

      if (!findUser) {
        throw new NotFoundException(`User with email ${email} not found`);
      }

      const shoppingCart = await this.prisma.shoppingCarts.findUnique({
        where: { user_id: findUser.id },
        include: {
          ShoppingCartDetails: {
            include: {
              Products: true,
            },
          },
        },
      });

      if (!shoppingCart) {
        throw new NotFoundException(
          `Shopping cart for user #${findUser.id} not found`,
        );
      }

      return shoppingCart;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async update(id: number, updateShoppingCartDto: UpdateShoppingCartDto) {
    return `This action updates a #${id} shoppingCart`;
  }

  async remove(id: string) {
    try {
      const shoppingCart = await this.prisma.shoppingCarts.delete({
        where: { id },
      });

      if (!shoppingCart) {
        throw new NotFoundException(`Shopping cart #${id} not found`);
      }

      return shoppingCart;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
