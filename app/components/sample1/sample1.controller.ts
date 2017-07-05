import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { Sample1Service } from './sample1.service';

export class Sample1Controller {
  static $inject: string[] = ['$scope', 'Sample1Service'];
  count: number;

  constructor(private $scope: any, private sample1Service: Sample1Service) {
  }

  $onInit() {
    this.count = 0;
    this.$scope.count = 0;
  }
}
