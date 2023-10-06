import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SimpleCrudAppService } from './simple_crud_app.service';
import { CreateSimpleCrudAppInput } from './dto/create-simple_crud_app.input';
import { UpdateSimpleCrudAppInput } from './dto/update-simple_crud_app.input';

@Resolver('SimpleCrudApp')
export class SimpleCrudAppResolver {
  constructor(private readonly simpleCrudAppService: SimpleCrudAppService) {}

  @Mutation('createSimpleCrudApp')
  create(
    @Args('createSimpleCrudAppInput')
    createSimpleCrudAppInput: CreateSimpleCrudAppInput,
  ) {
    return this.simpleCrudAppService.create(createSimpleCrudAppInput);
  }

  @Query('simpleCrudApp')
  async findAll() {
    const data = await this.simpleCrudAppService.findAll();

    return {
      data,
    };
  }

  @Query('simpleCrudApp')
  findOne(@Args('id') id: number) {
    return this.simpleCrudAppService.findOne({ id });
  }

  @Mutation('updateSimpleCrudApp')
  update(
    @Args('updateSimpleCrudAppInput')
    updateSimpleCrudAppInput: UpdateSimpleCrudAppInput,
  ) {
    return this.simpleCrudAppService.update(
      updateSimpleCrudAppInput.id,
      updateSimpleCrudAppInput,
    );
  }

  @Mutation('removeSimpleCrudApp')
  remove(@Args('id') id: number) {
    return this.simpleCrudAppService.remove(id);
  }
}
