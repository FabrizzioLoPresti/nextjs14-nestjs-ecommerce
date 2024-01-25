import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { AddNewProductDto } from './dto/add-new-product.dto';
import { RemoveProductDto } from './dto/remove-product.dto';

@Injectable()
export class ShoppingCartsService {
  constructor(private prisma: PrismaService) { }

  async create(createShoppingCartDto: CreateShoppingCartDto, email: string) {
    try {
      // Buscar el usuario
      const user = await this.prisma.users.findUnique({
        where: { email },
      });

      if (!user) {
        throw new NotFoundException(`User with email ${email} not found`);
      }

      const shoppingCart = await this.prisma.$transaction(async (prisma) => {
        // Buscar el carrito de compras existente para el usuario
        const existingShoppingCart = await prisma.shoppingCarts.findUnique({
          where: { user_id: user.id },
          include: { ShoppingCartDetails: true }, // Incluir detalles del carrito
        });

        if (existingShoppingCart) {
          // Si el carrito existe, eliminar los detalles antiguos
          await prisma.shoppingCartDetails.deleteMany({
            where: { shopping_cart_id: existingShoppingCart.id },
          });

          // Crear nuevos detalles del carrito
          const shoppingCartDetailsPromises =
            createShoppingCartDto.shopping_cart_details.map(
              (shoppingCartDetail) => {
                return prisma.shoppingCartDetails.create({
                  data: {
                    quantity: shoppingCartDetail.quantity,
                    product_id: shoppingCartDetail.product_id,
                    shopping_cart_id: existingShoppingCart.id,
                  },
                });
              },
            );

          const shoppingCartDetails = await Promise.all(
            shoppingCartDetailsPromises,
          );

          // Actualizar el carrito existente con los nuevos detalles
          const updatedShoppingCart = await prisma.shoppingCarts.update({
            where: { id: existingShoppingCart.id },
            data: {
              updatedAt: new Date(), // Actualizar la marca de tiempo
            },
          });

          return {
            shoppingCart: updatedShoppingCart,
            shoppingCartDetails,
          };
        } else {
          // Si el carrito no existe, crear uno nuevo
          const newShoppingCart = await prisma.shoppingCarts.create({
            data: {
              user_id: createShoppingCartDto.user_id,
            },
          });

          // Crear detalles del carrito para el nuevo carrito
          const shoppingCartDetailsPromises =
            createShoppingCartDto.shopping_cart_details.map(
              (shoppingCartDetail) => {
                return prisma.shoppingCartDetails.create({
                  data: {
                    quantity: shoppingCartDetail.quantity,
                    product_id: shoppingCartDetail.product_id,
                    shopping_cart_id: newShoppingCart.id,
                  },
                });
              },
            );

          const shoppingCartDetails = await Promise.all(
            shoppingCartDetailsPromises,
          );

          return {
            shoppingCart: newShoppingCart,
            shoppingCartDetails,
          };
        }
      });

      return shoppingCart;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async addProductToShoppingCart(
    addNewProductDto: AddNewProductDto,
    email: string,
  ) {
    const { productId, quantity } = addNewProductDto;

    try {
      const user = await this.prisma.users.findUnique({
        where: { email },
      });

      if (!user) {
        throw new NotFoundException(`User with email ${email} not found`);
      }

      const shoppingCart = await this.prisma.$transaction(async (prisma) => {
        const existingShoppingCart = await prisma.shoppingCarts.findFirst({
          where: { user_id: user.id },
          include: { ShoppingCartDetails: true },
        });

        if (existingShoppingCart) {
          // Verificar si el producto ya está en el carrito actual
          const existingProductDetail =
            existingShoppingCart.ShoppingCartDetails.find(
              (detail) => detail.product_id === productId,
            );

          if (existingProductDetail) {
            // Actualizar la cantidad si el producto ya está en el carrito
            const updatedProductDetail =
              await prisma.shoppingCartDetails.update({
                where: {
                  unique_shopping_cart_product: {
                    shopping_cart_id: existingShoppingCart.id,
                    product_id: productId,
                  },
                },
                data: {
                  quantity: quantity,
                },
              });

            const updatedShoppingCart = await prisma.shoppingCarts.update({
              where: { id: existingShoppingCart.id },
              data: { updatedAt: new Date() },
            });

            return {
              shoppingCart: updatedShoppingCart,
              shoppingCartDetails: updatedProductDetail,
            };
          } else {
            // Añadir el producto al carrito si no está presente
            const existingProductDetail =
              existingShoppingCart.ShoppingCartDetails.find(
                (detail) => detail.product_id === productId,
              );

            if (existingProductDetail) {
              // Eliminar el detalle existente para el mismo producto
              await prisma.shoppingCartDetails.deleteMany({
                where: {
                  shopping_cart_id: existingShoppingCart.id,
                  product_id: productId,
                },
              });
            }

            // Agregar el nuevo detalle del carrito
            const newShoppingCartDetails =
              await prisma.shoppingCartDetails.create({
                data: {
                  quantity,
                  product_id: productId,
                  shopping_cart_id: existingShoppingCart.id,
                },
              });

            const updatedShoppingCart = await prisma.shoppingCarts.update({
              where: { id: existingShoppingCart.id },
              data: { updatedAt: new Date() },
            });

            return {
              shoppingCart: updatedShoppingCart,
              shoppingCartDetails: newShoppingCartDetails,
            };
          }
        } else {
          // Si el carrito no existe, crear uno nuevo y añadir el producto
          const newShoppingCart = await prisma.shoppingCarts.create({
            data: { user_id: user.id },
          });

          const shoppingCartDetails =
            await prisma.shoppingCartDetails.createMany({
              data: [
                {
                  quantity,
                  product_id: productId,
                  shopping_cart_id: newShoppingCart.id,
                },
              ],
            });

          return { shoppingCart: newShoppingCart, shoppingCartDetails };
        }
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

  async update(id: string, updateShoppingCartDto: UpdateShoppingCartDto) {
    try {
      const shoppingCartExists = await this.prisma.shoppingCarts.findUnique({
        where: { id },
      });

      if (!shoppingCartExists) {
        throw new NotFoundException(`Shopping cart #${id} not found`);
      }

      const shoppingCart = await this.prisma.$transaction(async (prisma) => {
        const shoppingCart = await prisma.shoppingCarts.upsert({
          where: {
            id,
          },
          update: {
            user_id: updateShoppingCartDto.user_id,
          },
          create: {
            user_id: updateShoppingCartDto.user_id,
          },
        });

        const shoppingCartDetailsPromises =
          updateShoppingCartDto.shopping_cart_details.map(
            (shoppingCartDetail) => {
              return prisma.shoppingCartDetails.upsert({
                where: {
                  id: shoppingCartDetail.id,
                },
                update: {
                  quantity: shoppingCartDetail.quantity,
                  product_id: shoppingCartDetail.product_id,
                  shopping_cart_id: shoppingCart.id,
                },
                create: {
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
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
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

  async removeProductFromShoppingCart(
    removeProductDto: RemoveProductDto,
    email: string,
  ) {
    const { productId } = removeProductDto;

    try {
      const user = await this.prisma.users.findUnique({
        where: { email },
      });

      if (!user) {
        throw new NotFoundException(`User with email ${email} not found`);
      }

      const shoppingCart = await this.prisma.$transaction(async (prisma) => {
        const existingShoppingCart = await prisma.shoppingCarts.findFirst({
          where: { user_id: user.id },
          include: { ShoppingCartDetails: true },
        });

        if (existingShoppingCart) {
          // Verificar si el producto está en el carrito actual
          const existingProductDetail =
            existingShoppingCart.ShoppingCartDetails.find(
              (detail) => detail.product_id === productId,
            );

          if (existingProductDetail) {
            // Eliminar el producto del carrito si está presente
            await prisma.shoppingCartDetails.delete({
              where: {
                unique_shopping_cart_product: {
                  shopping_cart_id: existingShoppingCart.id,
                  product_id: productId,
                },
              },
            });

            const updatedShoppingCart = await prisma.shoppingCarts.update({
              where: { id: existingShoppingCart.id },
              data: { updatedAt: new Date() },
            });

            return {
              shoppingCart: updatedShoppingCart,
              removedProductDetail: existingProductDetail,
            };
          } else {
            throw new NotFoundException(
              `Product #${productId} not found in the shopping cart`,
            );
          }
        } else {
          throw new NotFoundException(
            `Shopping cart not found for user with email ${email}`,
          );
        }
      });

      return shoppingCart;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
