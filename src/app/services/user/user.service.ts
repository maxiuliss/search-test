import { User } from './../../models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRepository } from '@search-app/data';
import { SearchResult } from 'src/app/view-models/serch-result';
import { map } from 'rxjs/operators';
import { CustomerType } from 'src/app/shared/constants/customer-type';
import { SearchServiceInterface } from '../search-service-interface';

@Injectable({ providedIn: 'root' })
export class UserService implements SearchServiceInterface {
  constructor(private repo: UserRepository) {}

  search$(query: string): Observable<SearchResult[]> {
    return this.repo.search$(query).pipe(
      map((users) =>
        users.map(
          (user: User) =>
            ({
              id: user.id,
              type: CustomerType.user,
              name: user.name,
              code: user.personId,
            } as SearchResult)
        )
      )
    );
  }
}
