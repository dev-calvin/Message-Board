/*
    Calvin McClure
    Mar 2 2017

    purpose: controller for main.html
    
*/

export class MainController {
  constructor ($log) {
      'ngInject';
      this.$log = $log;
  }

  postMessage (){
      this.$log.log('post');
  }
}
