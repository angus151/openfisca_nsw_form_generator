import { ControlValueAccessor, AbstractControl } from '@angular/forms';

export class BaseControlValueAccessor<T> extends AbstractControl implements ControlValueAccessor {

  public disabled = false;
  public value: T;

  public onChange(newVal: T) { }
  public onTouched(_?: any) { }

  public writeValue(obj: T): void { this.value = obj; }
  public registerOnChange(fn: any): void { this.onChange = fn; }
  public registerOnTouched(fn: any): void { this.onTouched = fn; }
  public setDisabledState?(isDisabled: boolean): void { this.disabled = isDisabled; }

  setValue(value: any, options?: Object): void {
    this.value = value;
    alert('reset');
  }
  patchValue(value: any, options?: Object): void {
    this.value = value;
    alert('reset');
  }
  reset(value?: any, options?: Object): void {
    if (value) {
      this.value = value;
      alert('reset');
    }
  }
}
