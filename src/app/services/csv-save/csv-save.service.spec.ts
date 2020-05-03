import { TestBed } from '@angular/core/testing';

import { CsvSaveService } from './csv-save.service';

describe('CsvSaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CsvSaveService = TestBed.get(CsvSaveService);
    expect(service).toBeTruthy();
  });
});
