/*-------JSHint Directives-------*/
/* global ObsidianCity           */
/*-------------------------------*/
'use strict';


/****************
 * Main Program *
 ****************/
(function() {
  var city = new ObsidianCity();
  city.enableFloorGrid();

})();



// /************************
//  * Scene Initialization *
//  ************************/

// function initializeScene() {

//   ************************
//    * Initialize Essentials *
//    ************************

//   // Scene and window resize listener
//   scene = new THREE.Scene();
//   var canvasWidth  = window.innerWidth;
//   var canvasHeight = window.innerHeight;
//   window.addEventListener('resize', resizeWindow, false);

//   // Camera and set initial view
//   var aspectRatio  = canvasWidth/canvasHeight;
//   camera = new THREE.PerspectiveCamera( CAMERA.fov, aspectRatio, CAMERA.near, CAMERA.far );
//   camera.position.set( CAMERA.zoomX, CAMERA.zoomY, CAMERA.zoomZ );
//   camera.lookAt(scene.position);
//   scene.add(camera);

//   // Add WebGL renderer to DOM
//   renderer = new THREE.WebGLRenderer(RENDERER);
//   renderer.setSize(canvasWidth, canvasHeight);
//   addToDOM(renderer.domElement);


//   /**********************
//    * Initialize Plugins *
//    **********************/

//   // OrbitControls using mouse
//   controls = new THREE.OrbitControls(camera);
//   for (var key in CONTROLS) { controls[key] = CONTROLS[key]; }
//   controls.addEventListener('change', renderScene);

//   /***************
//    * Custom Code *
//    ***************/

//   // Example: light sources
//   var lightAmbient = new THREE.AmbientLight(0x666666);
//   var lightSource = new THREE.PointLight(0x888888);
//   lightSource.position.set(0, 50, 80);
//   scene.add(lightAmbient);
//   scene.add(lightSource);

//   // Example: basic floor grid
//   scene.add(basicFloorGrid(20, 2));

//   // Example: crate with texture

// }


// /**********************
//  * Render and Animate *
//  **********************/

// initializeScene();
// animateScene();
