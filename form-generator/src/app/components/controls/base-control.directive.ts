import { Directive, Input } from '@angular/core';
import { FormControl } from 'src/app/models/form-control';

@Directive({
  selector: '[appBaseControl]'
})
export class BaseControlDirective {

  @Input() public control: FormControl;

  constructor() { }

}
