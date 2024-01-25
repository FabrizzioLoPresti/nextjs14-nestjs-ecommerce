import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const userExists = await this.prisma.users.findUnique({
        where: { email: createUserDto.email },
      });

      if (userExists) {
        // throw new NotFoundException('User already exists');
        const { password, phone, ...restUser } = userExists;
        return restUser;
      }

      const user = await this.prisma.users.create({ data: createUserDto });
      return user;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async findAll() {
    try {
      const users = await this.prisma.users.findMany();

      if (!users || !users.length) {
        throw new NotFoundException('No users found');
      }

      return users;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findUserByEmail(email: string) {
    try {
      const user = await this.prisma.users.findUnique({
        where: { email },
      });

      if (!user) {
        throw new NotFoundException(`User with email ${email} not found`);
      }

      return user;
    } catch (error) {
      throw error;
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
