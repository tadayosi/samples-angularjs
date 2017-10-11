import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { appComponent } from './app.component';
import { componentsModule } from './components/components.module';
import { CommonModule } from './common/common.module';
import './app.less';

const app = angular
  .module('app', [
    uiRouter,
    'patternfly',
    componentsModule,
    CommonModule
  ])
  .component('app', appComponent)
  .name;

export default app;
