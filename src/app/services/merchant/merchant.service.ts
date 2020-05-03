import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Merchant } from 'src/app/models/merchant';
import { MerchantRepository } from '@search-app/data';
import { SearchResult } from 'src/app/view-models/serch-result';
import { CustomerType } from 'src/app/shared/constants/customer-type';
import { map } from 'rxjs/operators';
import { SearchServiceInterface } from '../search-service-interface';

@Injectable({
  providedIn: 'root',
})
export class MerchantService implements SearchServiceInterface {
  constructor(private repo: MerchantRepository) {}

  search$(query: string): Observable<SearchResult[]> {
    return this.repo.search$(query).pipe(
      map((merchants) =>
        merchants.map(
          (merchant: Merchant) =>
            ({
              id: merchant.id,
              type: CustomerType.merchant,
              name: merchant.name,
              code: merchant.vat,
            } as SearchResult)
        )
      )
    );
  }
}
