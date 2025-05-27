import { Module } from '@nestjs/common';
import { RequestsController, RequestsService } from './index';

@Module({
  controllers: [RequestsController],
  providers: [RequestsService],
})
export class RequestsModule {} 