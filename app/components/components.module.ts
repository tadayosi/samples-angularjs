import * as angular from 'angular';
import { sample1Module } from './sample1/sample1.module';

export const componentsModule = angular
  .module('app.components', [
    sample1Module
  ])
  .name;
