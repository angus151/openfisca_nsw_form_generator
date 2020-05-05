import { Component, OnInit, Input } from '@angular/core';
import { BaseControlDirective } from '../base-control.directive';
import { FormControl } from 'src/app/models/form-control';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.scss']
})
export class BooleanComponent extends BaseControlDirective implements OnInit {

  @Input() public control: FormControl;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
