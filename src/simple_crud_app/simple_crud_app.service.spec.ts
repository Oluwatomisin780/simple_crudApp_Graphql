import { Test, TestingModule } from '@nestjs/testing';
import { SimpleCrudAppService } from './simple_crud_app.service';

describe('SimpleCrudAppService', () => {
  let service: SimpleCrudAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimpleCrudAppService],
    }).compile();

    service = module.get<SimpleCrudAppService>(SimpleCrudAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
