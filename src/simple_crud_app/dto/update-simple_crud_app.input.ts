import { CreateSimpleCrudAppInput } from './create-simple_crud_app.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSimpleCrudAppInput extends PartialType(
  CreateSimpleCrudAppInput,
) {
  id: number;
  task?: string;
  description?: string;
}
