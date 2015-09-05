
# Definition of the Category Schema
Schema.Category = new SimpleSchema(
  name:
    type: String
    unique: true

  parent_id:
    type: String
    optional: true
)

# attach Category schema to the Category collection
Category.attachSchema(Schema.Category)

# frieldlyId field
Category.friendlySlugs('name')