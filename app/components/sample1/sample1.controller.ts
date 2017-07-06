import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { Sample1Service } from './sample1.service';

export class Sample1Controller {
  static $inject: string[] = ['Sample1Service'];
  count: number;

  constructor(private sample1Service: Sample1Service) {
    console.log(sample1Service);
  }

  $onInit() {
    this.count = 0;
  }

  onClick() {
    this.count++;
  }
}
