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
var text = '{"last":"  proximamente voy a publicar la primera edicion de la segunda parte de este proyecto una publicación regular de suscripción que se distribuira unicamente por correo usando mailchimp y todas las herramientas que ofrece, si tu quieres  conocerla cuando este lista por favor llena el siguiente formulario "}';

var obj = JSON.parse(text);

document.getElementById("demo").innerHTML =
obj.last ;


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-78049969-1', 'auto');
  ga('send', 'pageview');


