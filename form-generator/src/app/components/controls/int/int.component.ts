import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { RacFormControl } from 'src/app/models/form-control';
import { BaseControlDirective } from '../base-control.directive';
import { BaseControl } from 'src/app/models/base-control';


@Component({
  selector: 'app-int',
  templateUrl: './int.component.html',
  styleUrls: ['./int.component.scss']
})
export class IntComponent extends BaseControl<number> {

}
