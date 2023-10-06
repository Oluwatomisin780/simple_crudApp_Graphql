import { Test, TestingModule } from '@nestjs/testing';
import { SimpleCrudAppResolver } from './simple_crud_app.resolver';
import { SimpleCrudAppService } from './simple_crud_app.service';

describe('SimpleCrudAppResolver', () => {
  let resolver: SimpleCrudAppResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimpleCrudAppResolver, SimpleCrudAppService],
    }).compile();

    resolver = module.get<SimpleCrudAppResolver>(SimpleCrudAppResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
