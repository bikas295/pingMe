import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestsModule } from './requests/requests.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, RequestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
