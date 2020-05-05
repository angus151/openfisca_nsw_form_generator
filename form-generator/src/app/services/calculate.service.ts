import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CalculateService extends BaseService {

  api = 'http://localhost:5000/';

  constructor() {
    super();
  }

  calculate(data: any) {

  }
}
