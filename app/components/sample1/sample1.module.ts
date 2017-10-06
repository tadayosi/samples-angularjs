import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';
import { sample1Component } from './sample1.component';
import { Sample1Service } from './sample1.service';

export const sample1Module = angular
  .module('sample1', [
    uiRouter
  ])
  .component('sample1', sample1Component)
  .service('sample1Service', Sample1Service)
  .config(($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) => {
    $stateProvider
      .state('sample1', { url: '/sample1', component: 'sample1' });
    $urlRouterProvider.otherwise('/');
  })
  .name;
