import * as angular from 'angular';
import { Sample1Controller } from './sample1.controller';
//import template from 'html-loader!./sample1.html';

export const Sample1Component: angular.IComponentOptions = {
  controller: Sample1Controller,
  templateUrl: 'app/components/sample1/sample1.html',
  bindings: {
  }
};
