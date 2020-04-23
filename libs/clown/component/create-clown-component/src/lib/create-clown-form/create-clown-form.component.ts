import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IsAClownService } from '../services/is-a-clown.service';

@Component({
  selector: 'dominikgaller-create-clown-form',
  templateUrl: './create-clown-form.component.html',
  styleUrls: ['./create-clown-form.component.scss'],
  providers: [
    IsAClownService
  ]
})
export class CreateClownFormComponent implements OnInit {

  @Input() createClownForm: FormGroup;
  @Output() submitted = new EventEmitter<string>();

  public clownValues = this.isAClownService.CLOWN_VALUES;

  constructor(private isAClownService: IsAClownService) { }

  ngOnInit(): void {
  }

  public isAClown(): boolean {
    return this.isAClownService.isAClown(this.createClownForm.get('isClown').value);
  }

  public onSubmit(): void {
    this.submitted.emit('submit');
  }
}
