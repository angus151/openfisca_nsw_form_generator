import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from 'src/app/models/form-control';

@Component({
  selector: 'app-float',
  templateUrl: './float.component.html',
  styleUrls: ['./float.component.scss']
})
export class FloatComponent implements OnInit {

  @Input() public control: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
