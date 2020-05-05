import { Component, OnInit, Input } from '@angular/core';
import { BaseControlDirective } from '../base-control.directive';
import { FormControl } from 'src/app/models/form-control';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent extends BaseControlDirective implements OnInit {

  @Input() public control: FormControl;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
