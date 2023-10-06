import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const graphqlDefinition = new GraphQLDefinitionsFactory();

graphqlDefinition.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
  watch: true,
});
