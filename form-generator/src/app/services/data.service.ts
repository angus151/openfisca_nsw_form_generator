import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { RacFormControl } from '../models/form-control';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {

  api = window.location.protocol + '//' + window.location.hostname + ':4000/';
  result: string;
  formulas: string[] = new Array<string>();
  controlIds: string[] = new Array<string>();
  controls: RacFormControl<any>[] = new Array<RacFormControl<any>>();

  constructor(private http: HttpClient) {
    super();
  }

  public data =
    {
      persons: {
        Alicia: {
          birth: {
            ETERNITY: '1980-01-01'
          }
        }
      },
      buildings: {
        building1: {
          building_type_status: { 2020: 'office' },
          all_on_site_sources_identified: { 2020: true },
          unaccounted_elec_metered_and_recorded: { 2020: true },
          ESC_creation_date: { 2020: '2020-02-15' },
          current_NABERS_star_rating: { 2020: 5.5 },
          built_after_nov_2006: { 2020: false },
          first_nabers_rating: { 2020: true },
          includes_GreenPower: { 2020: false },
          rating_not_obt_for_legal_requirement: { 2020: true },
          historical_baseline_no_more_than_7_years_before_current_rating: {
            2020: true
          },
          historical_baseline_rating_meets_similar_configuration_criteria: {
            2020: true
          },
          nabers_value_previously_used_to_set_historical_NABERS_rating: {
            2020: false
          },
          nabers_value_lower_than_previous_historical_NABERS_value: {
            2020: false
          },
          end_date_of_current_nabers_rating_period: { 2020: '2020-10-11' },
          rating_type_status: { 2020: 'base_building' },
          postcode: { 2020: 6000 },
          hours_per_week_with_20_percent_occupancy: { 2020: 44.3 },
          building_state_location: { 2020: 'WA' },
          net_lettable_area: { 2020: 2637.7 },
          number_of_computers: { 2020: 0 },
          method_one_can_be_used: { 2020: true },
          elec_kWh: { 2020: 180399.1 },
          gas_in_MJ: { 2020: 101377.6 },
          diesel_in_litres: { 2020: 0 },
          coal_in_KG: { 2020: 0 },
          // benchmark_elec_consumption_MWh: { 2020: 0 },
          number_of_certificates: { 2020: null }
        }
      }
    };

  getFormControls(variable: string) {
    if (variable === 'datetime64[D]' || variable === 'datetime64[Y]' || variable === 'str'
      || variable === 'whole_building' || variable === 'base_building' || variable === 'tenancy'
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
                const ctl = v as RacFormControl<any>;
                this.controls.push(ctl);
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

  testCalculate(): Observable<any> {
    return this.http.post<any>(`${this.api}calculate/`, this.data);
  }

  calculateResult(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}calculate/`, data);
  }
}
