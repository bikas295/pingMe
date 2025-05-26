import { Controller, Post, Body } from '@nestjs/common';
import { RequestsService } from './requests.service';

@Controller('api/requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  create(@Body() body: { phone: string; text: string }) {
    return this.requestsService.create(body.phone, body.text);
  }
} 