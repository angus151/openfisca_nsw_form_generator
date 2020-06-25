import { Input, Output } from '@angular/core';
import { RacFormControl } from './form-control';
import { EventEmitter } from 'events';

export class BaseControl<T> {
  @Input() public control: RacFormControl<T>;
  @Output() valueChanged = new EventEmitter();

  onChange(event$: any): void {
    this.control.value = event$.target.value;
    this.valueChanged.emit(this.control.value);
  }
}
