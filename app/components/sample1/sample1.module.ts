import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { Sample1Component } from './sample1.component';

export const Sample1Module = angular
  .module('sample1', [
    uiRouter
  ])
  .component('sample1', Sample1Component)
  .name;
