import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { CreateClownContainerComponent } from './create-clown-container/create-clown-container.component';
import { CreateClownFormComponent } from './create-clown-form/create-clown-form.component';
import { GenericInputComponent } from './generic-form/generic-input/generic-input.component';
import { MaterialModule } from './material/material.module';
import { allClownStates } from './states';

@NgModule({
  declarations: [
    CreateClownContainerComponent,
    CreateClownFormComponent,
    GenericInputComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
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
