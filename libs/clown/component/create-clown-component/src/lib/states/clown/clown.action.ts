import { Clown } from '@dominikgaller/clown/api/model';


export class AddClown {
  static readonly type = '[Clown] add';

  constructor(public clown: Clown) {}
}
