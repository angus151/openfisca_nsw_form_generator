import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from 'src/app/models/form-control';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  @Input() public control: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
