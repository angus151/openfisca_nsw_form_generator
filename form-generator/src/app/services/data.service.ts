import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '../models/form-control';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {

  api = window.location.protocol + '//' + window.location.hostname + ':4000/';
  result: string;
  formulas: string[] = new Array<string>();
  controlIds: string[] = new Array<string>();
  controls: FormControl[] = new Array<FormControl>();

  constructor(private http: HttpClient) {
    super();
  }

  getFormControls(variable: string) {
    if (variable === 'datetime64[D]' || variable === 'datetime64[Y]' || variable === 'str'
    || variable === 'whole_building'  || variable === 'base_building'  || variable === 'tenancy'
    ) {
      return;
    }

    this.getVariableInfo(variable)
      .subscribe(
        {
          next: v => {
            if (this.hasFormula(v)) {
              this.parseFormula(v);
            } else {
              // no formula, add basic form control to list
              if (!this.controlIds.includes(v.id)) {
                // this.result += `control: <br/> Type: ${v.valueType} <br/> Description: ${v.description} <br/><br/><hr>`;
                this.controlIds.push(v.id);
                this.controls.push(v as FormControl);
                console.log(`Adding control: ${v.id}`);
              }
            }
          },
          error: () => console.log(`Variable '${variable}' does not exist in the API`)
        });
  }

  parseFormula(r: any) {
    const variables = this.getVariablesInFormula(this.getFormula(r));
    if (variables && variables.length > 0) {
      // this.result += `formula: <br/> Id: ${r.id} <br/> formulas: ${r.formulas} <br/><br/><hr>`;
      variables.forEach(v => {
        if (!this.formulas.includes(v)) {
          this.getFormControls(v);
          this.formulas.push(v);
          return true;
        }
      });
    }
  }

  parseVariable(r: any): boolean {
    // check if variable has own formula
    if (this.hasFormula(r)) {
      const variables = this.getVariablesInFormula(this.getFormula(r));
      // yes, recursively check formula for variables
      if (variables && variables.length > 0) {
        // this.result += `formula: <br/> Id: ${r.id} <br/> formulas: ${r.formulas} <br/><br/><hr>`;
        variables.forEach(v => {
          if (!this.formulas.includes(v)) {
            // this.getVariableInfo(v).subscribe({ next: info => });
            this.formulas.push(v);
            return true;
          }
        });
      }
    } else {
      // no, add basic form control to list
      if (!this.controlIds.includes(r.id)) {
        // this.result += `control: <br/> Type: ${r.valueType} <br/> Description: ${r.description} <br/><br/><hr>`;
        this.controlIds.push(r.id);
      }
    }
    return false;
  }

  getSubVariables(formula: string): string[] {
    return null;
  }

  getFormula(variableInfo: any): string {
    // todo: check object has keys
    // assume first property is formula object.
    const f = variableInfo.formulas[Object.keys(variableInfo.formulas)[0]];
    if (f && f.content) {
      // return this.getVariablesInFormula(f.content).join(',');
      return f.content;
    }
  }

  getVariableInfo(variable: string): Observable<any> {
    return this.http.get(`${this.api}variable/${variable}`);
  }

  hasFormula(variableInfo: any): boolean {
    return variableInfo && variableInfo.formulas;
  }

  hasVariablesInFormula(formula: string): boolean {
    const matches = formula.match(/'.*?'/g);
    if (matches && matches.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  getVariablesInFormula(formula: string): string[] {
    if (this.hasVariablesInFormula(formula)) {
      return formula.match(/'.*?'/g).map(s => s.replace(/'/g, ''));
    } else {
      return null;
    }
  }
}
