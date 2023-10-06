import { Module } from '@nestjs/common';
import { SimpleCrudAppService } from './simple_crud_app.service';
import { SimpleCrudAppResolver } from './simple_crud_app.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SimpleCrudAppResolver, SimpleCrudAppService],
})
export class SimpleCrudAppModule {}
