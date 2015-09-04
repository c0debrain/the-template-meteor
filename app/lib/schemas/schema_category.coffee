# Definition of the Main Category Schema

Schema.Category = new SimpleSchema(
  name:
    type: String
    unique: true

  parent_id:
    type: String
    optional: true
)

Category.attachSchema(Schema.Category)
