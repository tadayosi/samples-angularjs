import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { Sample1Component } from './sample1.component';
import { Sample1Service } from './sample1.service';

export const Sample1Module = angular
  .module('sample1', [
    uiRouter
  ])
  .component('sample1', Sample1Component)
  .service('Sample1Service', Sample1Service)
  .name;
