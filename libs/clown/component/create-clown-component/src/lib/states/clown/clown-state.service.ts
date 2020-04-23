import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddClown } from './clown.action';
import { ClownStateModel } from './clown-state.model';

@State<ClownStateModel>({
  name: 'clowns',
  defaults: {
    clowns: []
  }
})
@Injectable()
export class ClownState {

  /*
    TODO
      see: https://www.ngxs.io/concepts/state
      @Action(MyAction)
      public addValue(ctx: StateContext, { payload }: MyAction) {
        ctx.setState((state) => ({ ...state, value: payload }));
      }
      with the "immer" lib --> even the NgXS Dudes recommendin it...
   */
  @Action(AddClown)
  addClown(ctx: StateContext<ClownStateModel>, action: AddClown) {
    // Call to service for handling API would go here
    const state = ctx.getState();
    ctx.patchState({
      clowns: [...state.clowns, action.clown]
    });
  }
}
