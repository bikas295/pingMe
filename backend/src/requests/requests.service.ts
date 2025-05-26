import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RequestsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(phone: string, text: string) {
    return this.prisma.request.create({
      data: {
        phone,
        text,
      },
    });
  }
} 