import { Observable } from 'rxjs/internal/Observable';
import { SearchResult } from '../view-models/serch-result';

export interface SearchServiceInterface {
  search$(query: string): Observable<SearchResult[]>;
}
