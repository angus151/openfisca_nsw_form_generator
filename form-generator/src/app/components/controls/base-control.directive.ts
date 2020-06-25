import { Directive, Input } from '@angular/core';
import { RacFormControl } from 'src/app/models/form-control';

@Directive({
  selector: '[appBaseControl]'
})
export class BaseControlDirective {

  @Input() public control: RacFormControl<any>;

  constructor() { }

}
