import { Component } from '@angular/core';
import { BaseControl } from 'src/app/models/base-control';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.scss']
})
export class BooleanComponent extends BaseControl<string> {

}
