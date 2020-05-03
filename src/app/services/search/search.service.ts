import { ErrorService } from './../error/error.service';
import { LoadingService } from './../loading/loading.service';
import { Injectable, Injector } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { SearchResult } from '../../view-models/serch-result';
import { SearchServiceInterface } from '../search-service-interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private injector: Injector,
    private loadingService: LoadingService,
    private errorService: ErrorService
  ) {}

  search$<T extends SearchServiceInterface>(
    services: any[],
    query: string
  ): Observable<SearchResult[]> {
    const usersObservables = services.map((service) =>
      this.injector.get<T>(service).search$(query)
    );

    /* those two guys along with "catchError" and "finalize"
    should move to Http interceptor when "backend" have a proper implementation */
    this.errorService.clear();
    this.loadingService.show();

    return forkJoin(usersObservables).pipe(
      map((result) => [].concat(...result)),
      map((customers: SearchResult[]) =>
        customers.sort((a, b) => a.name.localeCompare(b.name))
      ),
      catchError((x) => {
        this.errorService.show(x);
        return of([] as SearchResult[]);
      }),
      finalize(() => {
        this.loadingService.hide();
      })
    );
  }
}
