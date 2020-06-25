import { Component } from '@angular/core';
import { BaseControl } from 'src/app/models/base-control';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent extends BaseControl<string> {

}
