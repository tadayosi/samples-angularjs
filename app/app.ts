import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
//import { CommonModule } from './common/common.module';

const root = angular
  .module('app', [])
  .component('app', AppComponent)
  .name;

export default root;
