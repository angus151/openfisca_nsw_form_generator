import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from 'src/app/models/form-control';

@Component({
  selector: 'app-int',
  templateUrl: './int.component.html',
  styleUrls: ['./int.component.scss']
})
export class IntComponent implements OnInit {

  @Input() public control: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
