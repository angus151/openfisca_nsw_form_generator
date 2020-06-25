import { BaseControlValueAccessor } from './base-control-value-accessor';
import { AbstractControl } from '@angular/forms';

export interface RacFormControlInterface {
  id: string;
  description: string;
  valueType: string;
  defaultValue: string;
  definitionPeriod: string;
  entity: string;
  source: string;
  possibleValues: any;
  value: any;
}

export class RacFormControl<T> extends AbstractControl implements BaseControlValueAccessor<T>, RacFormControlInterface {

  id: string;
  description: string;
  valueType: string;
  defaultValue: string;
  definitionPeriod: string;
  entity: string;
  source: string;
  possibleValues: any;
  public value: any;

  public disabled: boolean;



  setValue(value: any, options?: Object): void {
    this.value = value;
  }
  patchValue(value: any, options?: Object): void {
    this.value = value;
  }
  reset(value?: any, options?: Object): void {
    if (value) {
      this.value = value;
    }
  }








  public onChange(newVal: T): void {
    alert('onChange');
  }
  public onTouched(_?: any): void {
    // throw new Error("Method not implemented.");
    alert('onTouched');
  }
  public writeValue(obj: T): void {
     // throw new Error("Method not implemented.");
     alert('writeValue');
  }
  public registerOnChange(fn: any): void {
        // throw new Error("Method not implemented.");
        alert('registerOnChange');
  }
  public registerOnTouched(fn: any): void {
      // throw new Error("Method not implemented.");
      alert('registerOnTouched');
  }
  public setDisabledState?(isDisabled: boolean): void {
       // throw new Error("Method not implemented.");
       alert('setDisabledState');
  }

}


