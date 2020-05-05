import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  variable: string;
  result: string;
  model: any[] = new Array<any>();

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService) { }

  ngOnInit(): void {
    this.route
      .paramMap
      .subscribe(params => {
        if (params.has('variable')) {
          this.buildForm(params.get('variable'));
        }
      });
  }

  buildForm(variable: string) {
    this.variable = variable;
    this.dataService
      .getFormControls(variable);
  }

  getVariablesInFormula(formula: string): string[] {
    return formula.match(/'.*?'/g).map(s => s.replace(/'/g, ''));
  }

  onSubmit() {

  }

  testSubmit() {
    alert('Test button clicked;');
  }

}
