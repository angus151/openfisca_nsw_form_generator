import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from 'src/app/models/form-control';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss']
})
export class StringComponent implements OnInit {

  @Input() public control: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
