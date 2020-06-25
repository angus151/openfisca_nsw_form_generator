import { Component } from '@angular/core';
import { BaseControl } from 'src/app/models/base-control';

@Component({
  selector: 'app-float',
  templateUrl: './float.component.html',
  styleUrls: ['./float.component.scss']
})
export class FloatComponent extends BaseControl<string> {

}
