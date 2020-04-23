import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Self, SimpleChanges, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormGroup, NgControl, ValidatorFn, Validators } from '@angular/forms';
import { InputTypesEnum } from './input-types.enum';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss'],
  providers: [
    /*{
      provide: NG_VALUE_ACCESSOR,
      useExisting: GenericInputComponent,
      multi: true
    },*/
    /*{
      provide: NG_VALIDATORS,
      useExisting: GenericInputComponent,
      multi: true
    }*/]
})
/*
  Interface ControlValueAccessor assure that we can access the values
  which we dynamically bound to this input field by the form: FormGroup
  element. The required functions for the ControlValueAccessor interface
  are needed by the NG_VALUE_ACCESSOR provider since we define this component
  to be a NG_VALUE_ACCESSOR itself.

  Therefore we (obviously) need to implement
  all required methods (registerOnChange, registerOnTouched, writeValue).
  Since we are working in TypeScript, the interface is not necessary to
  satisfy the NG_VALUE_ACCESSOR at all. Nevertheless the interface
  typed implementation assures that we are conform to the
  NG_VALUE_ACCESSOR implementation.
 */
export class GenericInputComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() type = InputTypesEnum.TEXT;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() pattern: string;
  @Input() values: any[];
  @Input() form: FormGroup;
  @Input() required: boolean;
  @Input() formControlName: string;

  @ViewChild('input', { static: true }) input: ElementRef;

  constructor(@Self() private control: NgControl) {
    this.control.valueAccessor = this;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.control.control.updateValueAndValidity({onlySelf: true, emitEvent: true});
  }

  ngOnInit(): void {
    const control = this.control.control;
    const validators: ValidatorFn[] = control.validator ? [control.validator] : [];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }
    control.setValidators(validators);
    control.updateValueAndValidity({onlySelf: true, emitEvent: true});
  }

  registerOnChange(fn: any): void {
    // Implement
  }

  registerOnTouched(fn: any): void {
    // Implement
  }

  writeValue(obj: any): void {
    if (this.input && this.input.nativeElement) {
      this.input.nativeElement.value = obj;
    }
  }

  isText(): boolean {
    return this.type === InputTypesEnum.TEXT;
  }

  isSelect(): boolean {
    return this.type === InputTypesEnum.SELECT;
  }

}
