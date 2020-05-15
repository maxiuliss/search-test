import { Action, State } from '@ngrx/store';
import { SearchResult } from 'src/app/view-models/serch-result';


export function reducer(state: State<SearchResult>, action: Action): State<SearchResult> {
  switch (action.type) {
    // case class.ActionTypes.TYPE: {
    //   return {
    //     // return new class state
    //   };
    // }

    default: {
      return state;
    }
  }
}
