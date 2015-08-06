#
# Meteor.publish 'items', (param1, param2) ->
#   @ready()
#   return
#

Meteor.publish 'category', ->
  Category.find()