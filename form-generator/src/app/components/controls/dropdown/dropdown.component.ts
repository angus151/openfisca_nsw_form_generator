import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from 'src/app/models/form-control';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() public control: FormControl;
  @Input() public model: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
