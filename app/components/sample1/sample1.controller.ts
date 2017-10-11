import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { Sample1Service } from './sample1.service';

export class Sample1Controller {

  name: string;
  count: number;
  disableButton: boolean;

  constructor(private sample1Service: Sample1Service, private $timeout: angular.ITimeoutService) {
    'ngInject';
  }

  $onInit(): void {
    console.debug("Loading", this, "with", this.sample1Service);
    this.count = 0;
    this.disableButton = false;
  }

  onClick(): void {
    console.debug("Button clicked")
    this.disableButton = true;
    this.count++;
    this.$timeout(() => this.disableButton = false, 1000);
  }
}
