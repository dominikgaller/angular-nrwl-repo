import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialUiModule } from '@dominikgaller/material-ui';
import { GenericFormModule } from '@dominikgaller/util/generic-form';
import { NgxsModule } from '@ngxs/store';
import { CreateClownContainerComponent } from './create-clown-container/create-clown-container.component';
import { CreateClownFormComponent } from './create-clown-form/create-clown-form.component';
import { allClownStates } from './states';

@NgModule({
  declarations: [
    CreateClownContainerComponent,
    CreateClownFormComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterialUiModule,
    ReactiveFormsModule,
    GenericFormModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateClownContainerComponent
      }
    ]),
    NgxsModule.forFeature(allClownStates),
  ]
})
export class CreateClownComponentModule {}
