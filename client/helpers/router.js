Router.configure({
	layoutTemplate: 'layout',
  waitOn: function() { 
    return Meteor.subscribe('devices');
  }
});

Router.map( function () {
  
  this.route('accueilTemplate', {
    path: '/'
  });
  this.route('simulationTemplate', {
    path: '/simulation'
  });
  
  
});