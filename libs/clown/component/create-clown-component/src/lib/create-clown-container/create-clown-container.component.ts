import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClownFacadeService } from '../services/clown-facade.service';
import { CreateClownFormService } from '../services/create-clown-form.service';

@Component({
  selector: 'dominikgaller-clown-creation-container',
  templateUrl: './create-clown-container.component.html',
  styleUrls: ['./create-clown-container.component.scss'],
  providers: [
    CreateClownFormService
  ]
})
export class CreateClownContainerComponent implements OnInit {

  createClownForm: FormGroup = this.createFormGroup();

  constructor(private createClownFormService: CreateClownFormService,
              private clownFacade: ClownFacadeService) { }

  ngOnInit(): void {
  }

  private createFormGroup(): FormGroup {
    return this.createClownFormService.getCreateClownFormGroup();
  }

  onSubmit(_: string) {
    const clown = this.createClownFormService.getClownFromForm(this.createClownForm);
    this.clownFacade.addClown(clown);
    // Reset the form
    this.createClownForm.reset();
  }

}
