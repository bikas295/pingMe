import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RequestsService {
  private readonly logger = new Logger(RequestsService.name);

  constructor(private prisma: PrismaService) {}

  async createRequest(phone: string, text: string) {
    try {
      const result = await this.prisma.request.create({
        data: {
          phone,
          text,
          status: 'pending',
        },
      });
      this.logger.log(`Created request with ID ${result.id}`);
      return result;
    } catch (err) {
      this.logger.error(`Failed to create request in database: ${err.message}`);
      throw err;
    }
  }

  async getPendingRequests() {
    try {
      const result = await this.prisma.request.findMany({
        where: { status: 'pending' },
        orderBy: { createdAt: 'desc' },
      });
      this.logger.log(`Found ${result.length} pending requests`);
      return result;
    } catch (err) {
      this.logger.error(`Failed to fetch pending requests from database: ${err.message}`);
      throw err;
    }
  }
} 