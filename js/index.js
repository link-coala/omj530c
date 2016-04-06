var app = angular.module('tabs', []); // initilizing the angular app
  app.controller('PanelController', function(){
  this.tab = 1; // setting the first tab as active to begin with. 
  // changing the content based on what tab is clicked.
  this.selectTab = function(setTab) {
    this.tab = setTab;
  }; 
  // adding the removing the active tab for the tab triggers to change the look of them.
  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };
});