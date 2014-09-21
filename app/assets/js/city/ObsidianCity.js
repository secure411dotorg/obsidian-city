/*-------JSHint Directives-------*/
/* global ObsidianCity           */
/* global ObsidianBuilding       */
/*-------------------------------*/
'use strict';


/****************************
 * ObsidianCity Constructor *
 ****************************/
function ObsidianCity() {
  // Start ObsidianCityCore
  this.initializeSettings();
  this.initializeClock();
  this.initializeScene();
  this.initializeCamera();
  this.initializeControls();
  this.initializeHUD();
  this.initializeEventListeners();
}


/**************************
 * ObsidianCity Generator *
 **************************/
