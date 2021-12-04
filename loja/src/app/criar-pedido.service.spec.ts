import { TestBed } from '@angular/core/testing';

import { CriarPedidoServiceService } from './criar-pedido-service.service';

describe('CriarPedidoServiceService', () => {
  let service: CriarPedidoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarPedidoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
