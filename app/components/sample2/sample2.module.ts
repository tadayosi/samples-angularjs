import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';
import { sample2Component } from './sample2.component';
import { Sample2Service } from './sample2.service';
import './sample2.less';

export const sample2Module = angular
  .module('sample2', [
    uiRouter,
    'angularResizable'
  ])
  .component('sample2', sample2Component)
  .service('sample2Service', Sample2Service)
  .config(($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) => {
    $stateProvider
      .state('sample2', { url: '/sample2', component: 'sample2' });
    $urlRouterProvider.otherwise('/');
  })
  .name;
