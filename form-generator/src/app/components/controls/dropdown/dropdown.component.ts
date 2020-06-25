import { Component, Input } from '@angular/core';
import { BaseControl } from 'src/app/models/base-control';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends BaseControl<string> {



}
