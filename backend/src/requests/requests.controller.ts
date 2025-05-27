import { Controller, Post, Body, Get, ValidationPipe, UsePipes, Logger } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('api/requests')
export class RequestsController {
  private readonly logger = new Logger(RequestsController.name);

  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() createRequestDto: CreateRequestDto) {
    try {
      const result = await this.requestsService.createRequest(
        createRequestDto.phone,
        createRequestDto.text,
      );
      this.logger.log(`Created request from phone ${createRequestDto.phone}`);
      return result;
    } catch (err) {
      this.logger.error(`Failed to create request: ${err.message}`);
      throw err;
    }
  }

  @Get()
  async findPending() {
    try {
      const result = await this.requestsService.getPendingRequests();
      this.logger.log(`Retrieved ${result.length} pending requests`);
      return result.map(r => ({
        ...r,
        timestamp: r.createdAt ? r.createdAt.toISOString() : null,
      }));
    } catch (err) {
      this.logger.error(`Failed to fetch pending requests: ${err.message}`);
      throw err;
    }
  }
} 