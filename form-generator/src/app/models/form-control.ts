export interface FormControlInterface {
  id: string;
  description: string;
  valueType: string;
  defaultValue: string;
  definitionPeriod: string;
  entity: string;
  source: string;
  possibleValues: any;
}

export class FormControl implements FormControlInterface {
  id: string;
  description: string;
  valueType: string;
  defaultValue: string;
  definitionPeriod: string;
  entity: string;
  source: string;
  possibleValues: any;
}
