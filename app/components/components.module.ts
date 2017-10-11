import * as angular from 'angular';
import { sample1Module } from './sample1/sample1.module';
import { sample2Module } from './sample2/sample2.module';

export const componentsModule = angular
  .module('app.components', [
    sample1Module,
    sample2Module
  ])
  .name;
