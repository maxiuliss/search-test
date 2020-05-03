import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchResult } from 'src/app/view-models/serch-result';
import { SearchService } from 'src/app/services/search/search.service';
import { CustomerType } from 'src/app/shared/constants/customer-type';
import { MerchantService } from 'src/app/services/merchant/merchant.service';
import { UserService } from 'src/app/services/user/user.service';
import { SaveFormat } from 'src/app/shared/constants/save-format';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchDisabled = true;

  private query = '';
  public get searchQuery() {
    return this.query;
  }
  public set searchQuery(value) {
    this.searchDisabled = !value.length;
    this.query = value;
  }

  customers$: Observable<SearchResult[]>;
  customerType = CustomerType;
  saveFormat = SaveFormat;

  constructor(private searchService: SearchService) {}

  ngOnDestroy(): void {}

  ngOnInit() {}

  executeSearch() {
    this.customers$ = this.searchService.search$(
      [MerchantService, UserService],
      this.searchQuery
    );
  }

  clearSearch() {
    this.customers$ = of([]);
    this.searchQuery = '';
  }
}
