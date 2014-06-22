Router.configure({
	layoutTemplate: 'layout',
  
});

Router.map( function () {
  
  this.route('accueilTemplate', {
    path: '/'
  });
  this.route('simulationTemplate', {
    path: '/simulation'
  });
  
  
});