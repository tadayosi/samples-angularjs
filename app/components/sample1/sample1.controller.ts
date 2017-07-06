import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { Sample1Service } from './sample1.service';

export class Sample1Controller {
  static $inject: string[] = ['Sample1Service', '$timeout'];
  count: number;
  disableButton: boolean;

  constructor(private sample1Service: Sample1Service, private $timeout: angular.ITimeoutService) {
    console.debug("Loading", this, "with", sample1Service);
  }

  $onInit(): void {
    this.count = 0;
    this.disableButton = false;
  }

  onClick(): void {
    console.debug("Button clicked")
    this.disableButton = true;
    this.count++;
    this.$timeout(() => { this.disableButton = false }, 3000);
  }
}
