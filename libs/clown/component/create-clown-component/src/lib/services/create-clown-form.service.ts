import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clown } from '@dominikgaller/clown/api/model';

@Injectable()
export class CreateClownFormService {

  private CLOWN_FORM_GROUP = {
    isClown: ['No'],
    clown: [''],
    name: ['', Validators.maxLength(14)],
    forename: ['']
  };

  constructor(private readonly formBuilder: FormBuilder) { }

  public getCreateClownFormGroup(): FormGroup {
    return this.formBuilder.group(this.CLOWN_FORM_GROUP);
  }

  public getClownFromForm(createClownForm: FormGroup): Clown {
    const clown: Clown = {} as Clown;
    clown.forename = createClownForm.get('forename').value;
    clown.name = createClownForm.get('name').value;
    clown.isAClown = createClownForm.get('isClown').value;
    clown.clownType = createClownForm.get('clown').value || 'No type given';
    return clown;
  }
}
