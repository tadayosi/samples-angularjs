import * as angular from 'angular';
import { Sample1Module } from './sample1/sample1.module';

export const ComponentsModule = angular
  .module('app.components', [
    Sample1Module
  ])
  .name;
