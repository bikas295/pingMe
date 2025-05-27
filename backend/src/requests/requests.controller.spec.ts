import { Test, TestingModule } from '@nestjs/testing';
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';

describe('RequestsController', () => {
  let controller: RequestsController;
  let service: RequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestsController],
      providers: [
        {
          provide: RequestsService,
          useValue: {
            createRequest: jest.fn().mockResolvedValue({
              id: 1,
              phone: '123',
              text: 'hello',
              status: 'pending',
              createdAt: new Date(),
            }),
            getPendingRequests: jest.fn().mockResolvedValue([
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
      ],
    }).compile();

    controller = module.get<RequestsController>(RequestsController);
    service = module.get<RequestsService>(RequestsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a request', async () => {
      const dto: CreateRequestDto = { phone: '1234567890', text: 'Need towels' };
      const result = await controller.create(dto);

      expect(result).toEqual({
        id: 1,
        phone: '123',
        text: 'hello',
        status: 'pending',
        createdAt: expect.any(Date),
      });
      expect(service.createRequest).toHaveBeenCalledWith(dto.phone, dto.text);
    });

    it('should handle errors when creating a request', async () => {
      const dto: CreateRequestDto = { phone: '1234567890', text: 'Need towels' };
      const error = new Error('Database error');
      jest.spyOn(service, 'createRequest').mockRejectedValueOnce(error);

      await expect(controller.create(dto)).rejects.toThrow('Database error');
    });
  });

  describe('findPending', () => {
    it('should get pending requests', async () => {
      const result = await controller.findPending();

      expect(result).toEqual([
        {
          id: 1,
          phone: '123',
          text: 'hello',
          status: 'pending',
          createdAt: expect.any(Date),
        },
      ]);
      expect(service.getPendingRequests).toHaveBeenCalled();
    });

    it('should handle errors when fetching pending requests', async () => {
      const error = new Error('Database error');
      jest.spyOn(service, 'getPendingRequests').mockRejectedValueOnce(error);

      await expect(controller.findPending()).rejects.toThrow('Database error');
    });
  });
}); 