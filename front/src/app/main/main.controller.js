/*
    Calvin McClure
    Mar 2 2017

    purpose: controller for main.html

    3/3/17 implimented $http service for postMessage()
*/

export class MainController {
  constructor ($http) {
      'ngInject';
      this.$http = $http;
      
  }

  postMessage (){
      this.$http.post('http://localhost:8080/api/message', {
          msg: 'hello'
      });
  }
}
