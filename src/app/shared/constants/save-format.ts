import { CsvSaveService } from 'src/app/services/csv-save/csv-save.service';

export class SaveFormat {
  static readonly csv = CsvSaveService;
  static readonly xls = null;
}
