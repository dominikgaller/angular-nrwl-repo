import { Injectable } from '@angular/core';
import { Clown } from '@dominikgaller/clown/api/model';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddClown, ClownSelectors } from '../states/clown';

@Injectable({
  providedIn: 'root'
})
export class ClownFacadeService {

  @Select(ClownSelectors.allClowns) allClowns$: Observable<Clown[]>;
  @Select(ClownSelectors.clownCount) clownCount$: Observable<number>;

  constructor(private store: Store) {
    this.setUpShowCase();
  }

  private setUpShowCase() {
    this.allClowns$.subscribe(allPats => console.log('Size: ', allPats.length));
    this.clownCount$.subscribe(ctn => console.log('I COUNT: ', ctn));
  }

  public addClown(clown: Clown) {
    this.store.dispatch(new AddClown(clown));
  }
}
