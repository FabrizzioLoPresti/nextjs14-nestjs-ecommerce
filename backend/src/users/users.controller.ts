import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  private handleError(res: Response, error: Error) {
    if (error instanceof NotFoundException) {
      return res.status(404).json({ error: error.message });
    }

    return res.status(500).json({ error: 'Internal server error' });
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.create(createUserDto);
      return user;
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const users = await this.usersService.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
