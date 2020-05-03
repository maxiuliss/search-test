import { CsvSaveService } from './../../services/csv-save/csv-save.service';
import { Component, OnInit, Input, Injector, Type } from '@angular/core';
import { SearchResult } from 'src/app/view-models/serch-result';
import { SaveFormat } from 'src/app/shared/constants/save-format';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css'],
})
export class SaveComponent implements OnInit {
  @Input() reportLines: SearchResult[];
  @Input() saveFormat: typeof CsvSaveService;
  @Input() fileName: string;
  constructor(private injector: Injector) {}

  ngOnInit() {}

  saveClick() {
    if (this.saveFormat === SaveFormat.xls) {
      alert('not implementend yet...');
      throw new Error('not implemented yet');
    }
    const reportDate = new Date();
    this.injector
      .get<CsvSaveService>(this.saveFormat)
      .saveToFile(
        `${this.fileName}-${reportDate.getFullYear()}-${
          reportDate.getMonth() + 1
        }-${reportDate.getDate()}.csv`,
        this.buildDocument()
      );
  }

  private buildDocument() {
    if (this.reportLines.length > 0) {
      const items: {}[] = [];
      this.reportLines.forEach((line) => {
        const csvLine = {
          Type: line.type,
          Name: line.name,
          Indentifier: line.code,
        };
        items.push(csvLine);
      });

      return items;
    }

    return [];
  }
}
