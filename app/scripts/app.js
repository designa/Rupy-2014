'use strict';

/**
 * @ngdoc overview
 * @name RupyBr2014App
 * @description
 * # RupyBr2014App
 *
 * Main module of the application.
 */
 angular.module('RupyBr', [
  'ngResource',
  'ngSanitize',
  'ngDesignaEvents'
  ])
 .config(function(DesignaEventsProvider){
  DesignaEventsProvider.setEventName('rupy');
})
