import { Component, OnInit, forwardRef, ViewChildren, QueryList } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IntComponent } from '../controls/int/int.component';
import { DropdownComponent } from '../controls/dropdown/dropdown.component';
import { StringComponent } from '../controls/string/string.component';
import { FloatComponent } from '../controls/float/float.component';
import { BooleanComponent } from '../controls/boolean/boolean.component';
import { DateComponent } from '../controls/date/date.component';
import { RacFormControl } from 'src/app/models/form-control';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormComponent),
      multi: true
    }]
})
export class FormComponent implements OnInit {
  @ViewChildren(DropdownComponent) dropdowns: QueryList<DropdownComponent>;
  @ViewChildren(StringComponent) strings: QueryList<StringComponent>;
  @ViewChildren(FloatComponent) floats: QueryList<FloatComponent>;
  @ViewChildren(BooleanComponent) booleans: QueryList<BooleanComponent>;
  @ViewChildren(DateComponent) dates: QueryList<DateComponent>;
  @ViewChildren(IntComponent) ints: QueryList<IntComponent>;

  constructor(
    private route: ActivatedRoute,
    public dataService: DataService,
    private formBuilder: FormBuilder) {
  }

  variable: string;
  result: string;
  racForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.route
      .paramMap
      .subscribe(params => {
        if (params.has('variable')) {
          this.buildForm(params.get('variable'));
        }
      });
  }

  buildForm(variableName: string) {
    this.variable = variableName;
    this.dataService
      .getFormControls(variableName);
  }

  populate() {
    this.racForm = this.formBuilder.group({
      ctls: this.formBuilder.array(this.dataService.controls.map(f => f.id, new FormControl()))
    });
  }

  getVariablesInFormula(formula: string): string[] {
    return formula.match(/'.*?'/g).map(s => s.replace(/'/g, ''));
  }

  get dropdownValues(): any { return this.dropdowns.map(o => ({ key: o.control.id, value: o.control.value })); }
  get dropdownsValues(): any { return this.dropdowns.map(o => ({ key: o.control.id, value: o.control.value })); }
  get stringsValues(): any { return this.strings.map(o => ({ key: o.control.id, value: o.control.value })); }
  get floatsValues(): any { return this.floats.map(o => ({ key: o.control.id, value: o.control.value })); }
  get booleansValues(): any { return this.booleans.map(o => ({ key: o.control.id, value: o.control.value })); }
  get datesValues(): any { return this.dates.map(o => ({ key: o.control.id, value: o.control.value })); }
  get intsValues(): any { return this.ints.map(o => ({ key: o.control.id, value: o.control.value })); }

  getValues(): any {
    const dropdowns = this.dropdowns.map(o => ({ key: o.control.id, value: o.control.value }));
    const strings = this.strings.map(o => ({ key: o.control.id, value: o.control.value }));
    const floats = this.floats.map(o => ({ key: o.control.id, value: parseFloat(o.control.value) }));
    const booleans = this.booleans.map(o => ({ key: o.control.id, value: o.control.value && o.control.value.toString().toLowerCase() === 'true' }));
    const dates = this.dates.map(o => ({ key: o.control.id, value: o.control.value }));
    const ints = this.ints.map(o => ({ key: o.control.id, value: parseInt(o.control.value, 10) }));

    const data =
    {
      persons: {
        Alicia: {
          birth: {
            ETERNITY: '1980-01-01'
          }
        }
      },
      buildings: {
        building1: {}
      }
    };

    data.buildings.building1 = this.buildBuildingsFromList(data.buildings.building1, dropdowns, strings, floats, booleans, dates, ints);

    data.buildings.building1[this.variable] = { 2020: null };

    return data;
  }

  setValues() {
    this.setBuildingsValues(
      this.dataService.data,
      this.dropdowns,
      this.strings,
      this.floats,
      this.booleans,
      this.dates,
      this.ints
    );
  }

  setBuildingsValues(obj: any, ...items: any[]): any {
    items.forEach(o => o.forEach(control => this.setControlValue(control.control, obj)));
  }

  setControlValue(control: RacFormControl<any>, values: any) {
    if (values.buildings.building1[control.id] !== undefined && values.buildings.building1[control.id][2020] !== undefined) {
      control.value = values.buildings.building1[control.id][2020];
    }
  }

  buildBuildingsFromList(obj: any, ...items: any[]): any {
    let retVal: any;
    items.forEach(o => retVal = this.buildBuilding(o, obj));
    return retVal;
  }

  buildBuilding(keyValues: any, originalValues: any): any {
    return keyValues.reduce((o, a) => Object.assign(o, {
      [a.key]: a.value !== '' && a.value !== null && a.value !== undefined
        && a.value === a.value
        ? { 2020: a.value }
        : {}
    }), originalValues);
  }

  onSubmit() {
    this.dataService
      .calculateResult(this.getValues())
      .subscribe({
        next: r => {
          if (r?.buildings?.building1[this.variable] !== undefined && r?.buildings?.building1[this.variable][2020] !== undefined) {
            this.result = r.buildings.building1[this.variable][2020];
          }
        }
      });
  }

  createItem() {
    return this.formBuilder.group(
      this.dataService.controls.map(f => f.id, new FormControl())
    );
  }

  testSubmit() {
    this.dataService
      .testCalculate()
      .subscribe({
        next: r => {
          this.result = r.buildings.building1[this.variable][2020];
        }
      });
  }

}
