import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSimpleCrudAppInput } from './dto/create-simple_crud_app.input';
import { UpdateSimpleCrudAppInput } from './dto/update-simple_crud_app.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, SimpleCrudApp } from '@prisma/client';

@Injectable()
export class SimpleCrudAppService {
  constructor(private prismaService: PrismaService) {}
  create(createSimpleCrudAppInput: CreateSimpleCrudAppInput) {
    return this.prismaService.simpleCrudApp.create({
      data: {
        description: createSimpleCrudAppInput.description,
        task: createSimpleCrudAppInput.task,
      },
    });
  }

  findAll(): Promise<SimpleCrudApp[]> {
    return this.prismaService.simpleCrudApp.findMany({});
  }
  async findOne(
    simpleCrudAppWhereUniqueInput: Prisma.SimpleCrudAppWhereUniqueInput,
  ) {
    return this.prismaService.simpleCrudApp.findUnique({
      where: simpleCrudAppWhereUniqueInput,
    });
    // if (!task) throw new NotFoundException('task  does not exist');
    // return { task };
  }

  async update(
    id: number,
    updateSimpleCrudAppInput: Prisma.SimpleCrudAppUpdateInput,
  ) {
    const checkList = await this.prismaService.simpleCrudApp.findUnique({
      where: { id },
    });

    if (!checkList) throw new NotFoundException('todo does not');
    return this.prismaService.simpleCrudApp.update({
      where: {
        id: id,
      },
      data: { ...updateSimpleCrudAppInput },
    });
  }

  async remove(id: number) {
    const checkList = await this.prismaService.simpleCrudApp.findUnique({
      where: {
        id,
      },
    });
    if (!checkList) throw new NotFoundException('does not exist');
    return this.prismaService.simpleCrudApp.delete({
      where: {
        id,
      },
    });
  }
}
