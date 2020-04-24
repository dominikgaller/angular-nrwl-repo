import { Injectable } from '@angular/core';

@Injectable()
export class IsAClownService {

  private readonly YES = 'Yes';
  public readonly CLOWN_VALUES = ['Yes', 'No'];

  constructor() { }

  /**
   * Checks whether the input String is Yes or No.
   * Returns true if input String is exactly Yes.
   */
  public isAClown(s: string) {
    return s === this.YES;
  }
}
