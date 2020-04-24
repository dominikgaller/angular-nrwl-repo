import { Clown } from '@dominikgaller/clown/api/model';
import { Selector } from '@ngxs/store';
import { ClownState } from './clown.state';
import { ClownStateModel } from './clown-state.model';


export class ClownSelectors {

  @Selector([ClownState])
  static allClowns(stateModel: ClownStateModel) {
    return stateModel.clowns;
  }

  @Selector([ClownSelectors.allClowns])
  static clownCount(clowns: Clown[]) {
    return clowns.length;
  }

}
