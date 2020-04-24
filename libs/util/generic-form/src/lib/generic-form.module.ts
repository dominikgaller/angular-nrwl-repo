import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from '@dominikgaller/material-ui';
import { GenericInputComponent } from './generic-input/generic-input.component';

@NgModule({
  declarations: [
    GenericInputComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterialUiModule,
    ReactiveFormsModule,
  ],
  exports: [
    GenericInputComponent
  ]
})
export class GenericFormModule {}
