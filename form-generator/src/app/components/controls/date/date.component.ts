import { Component } from '@angular/core';
import { BaseControl } from 'src/app/models/base-control';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent extends BaseControl<string>  {

}
