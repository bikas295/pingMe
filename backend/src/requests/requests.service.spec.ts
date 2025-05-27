import { Test, TestingModule } from '@nestjs/testing';
import { RequestsService } from './requests.service';
import { PrismaService } from '../prisma/prisma.service';

describe('RequestsService', () => {
  let service: RequestsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RequestsService,
        {
          provide: PrismaService,
          useValue: {
            request: {
              create: jest.fn().mockResolvedValue({
                id: 1,
                phone: '123',
                text: 'hello',
                status: 'pending',
                createdAt: new Date(),
              }),
              findMany: jest.fn().mockResolvedValue([
                {
                  id: 1,
                  phone: '123',
                  text: 'hello',
                  status: 'pending',
                  createdAt: new Date(),
                },
              ]),
            },
          },
        },
      ],
    }).compile();

    service = module.get<RequestsService>(RequestsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createRequest', () => {
    it('should create a request', async () => {
      const result = await service.createRequest('1234567890', 'Need towels');

      expect(result).toEqual({
        id: 1,
        phone: '123',
        text: 'hello',
        status: 'pending',
        createdAt: expect.any(Date),
      });
      expect(prisma.request.create).toHaveBeenCalledWith({
        data: {
          phone: '1234567890',
          text: 'Need towels',
          status: 'pending',
        },
      });
    });

    it('should handle errors when creating a request', async () => {
      const error = new Error('Database error');
      jest.spyOn(prisma.request, 'create').mockRejectedValueOnce(error);

      await expect(service.createRequest('1234567890', 'Need towels')).rejects.toThrow('Database error');
    });
  });

  describe('getPendingRequests', () => {
    it('should get pending requests', async () => {
      const result = await service.getPendingRequests();

      expect(result).toEqual([
        {
          id: 1,
          phone: '123',
          text: 'hello',
          status: 'pending',
          createdAt: expect.any(Date),
        },
      ]);
      expect(prisma.request.findMany).toHaveBeenCalledWith({
        where: { status: 'pending' },
        orderBy: { createdAt: 'desc' },
      });
    });

    it('should handle errors when fetching pending requests', async () => {
      const error = new Error('Database error');
      jest.spyOn(prisma.request, 'findMany').mockRejectedValueOnce(error);

      await expect(service.getPendingRequests()).rejects.toThrow('Database error');
    });
  });
}); 