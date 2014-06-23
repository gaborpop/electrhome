Meteor.startup ->
  AccountsEntry.config
    
    homeRoute: '/'
    dashboardRoute: '/simulation'
    profileRoute: 'profile'
    passwordSignupFields: 'EMAIL_ONLY'