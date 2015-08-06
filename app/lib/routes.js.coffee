Router.configure
  layoutTemplate: 'MasterLayout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'

Router.route '/',
  name: 'home'

Router.route 'category',
  name: 'category'
  controller: 'CategoryController'
  action: 'action'
  where: 'client'