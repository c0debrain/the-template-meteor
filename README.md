The Template - Meteor
===

This boilerplate is designed to jumpstart meteor projects and
includes the least basic config which is needed nearby by ANY application.

    iron build

> ``autopublish`` and ``insecure`` are implemented and ACTIVE!

Preinstalled Features:
---

* iron-cli based structure ("rails scaffold" for meteor)
* iron-router
* Password Package
* Roles Package
* Rootpage and Route
* Coffeescript
* .dotenv (Variable Management)
* SimpleSchema (validation)
* Collection2 (attach schemas to collections)
* Internationalization (plus already set up for SimpleSchema Messages and translations for database fields)
* Test Environment
  * velocity (the test env for meteor)
    * html-reporter (displays test results in browser)
    * helpers 
    * console-reporter (displays test results in console)
  * jasmine
  * cucumber
  * karma (test runner) prepared for:
      * jasmine
      * cucumber


Installation
===

***

Install Meteor

     curl https://install.meteor.com/ | sh

Clone the app

    git clone git@github.com:mediatainment/the-template-meteor.git

Configuration
---

Place an empty file in the root folder and name it ``.env``. Put in all the environment variables defined below.
If you wont have some packages enabled simply deinstall it (``meteor remove package:name``)
The app needs at least the following packages to run properly:

* meteor-platform
* iron:router
* coffeescript


iron help


Startup
---

from root

    iron run
    
or within the ``/app/`` folder
    
    meteor

Mobile devices
---

To run the ios or android app use this:

    meteor run ios
    meteor run android

Install SDKs for mobile devices
---

    meteor install-sdk android
    meteor install-sdk ios

Getting started for mobile devices

[http://www.sitepoint.com/beginners-guide-mobile-development-meteor/](http://www.sitepoint.com/beginners-guide-mobile-development-meteor/)

Mobile Settings
---

The ``mobile-config.js`` includes device depending settings. Change them to your needs.


Testing
===

***

Testing comes with karma which is configured in ``karma.conf.js`` which should be modified to your needs.

HTML Reporter
--- 

Shows your tests within your app. Enabled by default. If you wanna disable the test reporter in your html view, simply type:

 ``meteor remove velocity:html-reporter``

 [https://github.com/meteor-velocity/html-reporter](https://github.com/meteor-velocity/html-reporter)

Console Reporter

Puts test results into your console. Enabled by default. If you wanna disable it type:

 ``meteor add velocity:console-reporter`` 
 
 [https://github.com/meteor-velocity/console-reporter](https://github.com/meteor-velocity/console-reporter)
 

The Main Testing Frameworks
---

 ``meteor add sanjo:jasmine`` best unit testing framework (syntax like rspec)
[https://github.com/Sanjo/meteor-jasmine](https://github.com/Sanjo/meteor-jasmine)

 ``meteor add xolvio:cucumber`` behaviour driven testing framework
 [https://github.com/xolvio/meteor-cucumber](https://github.com/xolvio/meteor-cucumber)

 ``meteor add velocity:helpers`` adds some test helpers
 [https://github.com/meteor-velocity/velocity-helpers](https://github.com/meteor-velocity/velocity-helpers)
 

Disable Testing
---
 
To disable the testing environment delete the whole ``tests`` folder and run 

    meteor remove sanjo:jasmine && meteor remove velocity:console-reporter && meteor remove velocity:helpers && meteor remove velocity:html-reporter && meteor remove xolvio:cucumber


NPM
===

***

You can have a look over there if you are interested in npm with meteor:

[https://meteorhacks.com/complete-npm-integration-for-meteor](https://meteorhacks.com/complete-npm-integration-for-meteor)

    meteor add meteorhacks:npm


How to use the integrated packages
===

***


Scaffolding
===

Iron-CLI
===

[https://github.com/iron-meteor/iron-cli](https://github.com/iron-meteor/iron-cli)

Because we use the ``iron-cli`` we are able to scaffold the app like the generators do in ruby on rails.

Type ``iron help`` and get the commands listed to scaffold your resource:

    Usage: iron <command> [<args>] [<opts>]
    
    Examples:

    iron generate:scaffold todos
    iron generate:view todos/todo_item

    The default command will run your meteor application.
    
    Commands:

    ┌──────────┬────────────────────────────────────────────────┐
    │ build    │ Build your application into the build folder.  │
    ├──────────┼────────────────────────────────────────────────┤
    │ create   │ Create a new iron meteor project.              │
    ├──────────┼────────────────────────────────────────────────┤
    │ generate │ Generate different scaffolds for your project. │
    ├──────────┼────────────────────────────────────────────────┤
    │ help     │ Get some help.                                 │
    ├──────────┼────────────────────────────────────────────────┤
    │ init     │ Initialize your project structure.             │
    ├──────────┼────────────────────────────────────────────────┤
    │ migrate  │ Migrate to the new iron project structure.     │
    ├──────────┼────────────────────────────────────────────────┤
    │ run      │ Run your app for a given environment.          │
    └──────────┴────────────────────────────────────────────────┘


Iron Generate
---

Iron can generate collections, controllers, routes or whole resources with one single line of code. This template uses the structure of iron so we can use it right out of the box.

    Usage: iron {generate, g}:<generator> <name> [--dir] [--where]
    
    Examples:
      > iron generate:scaffold todos
      > iron g:scaffold todos
      > iron g:template todos/todo_item
      > iron g:controller todos/todo_item --where "server"
    
    Generators:
    ┌────────────┬──────────────────────────────────────────────┐
    │ collection │ Generate scaffolding for a Collection.       │
    ├────────────┼──────────────────────────────────────────────┤
    │ controller │ Generate scaffolding for a RouteController.  │
    ├────────────┼──────────────────────────────────────────────┤
    │ publish    │ Generate scaffolding for a publish function. │
    ├────────────┼──────────────────────────────────────────────┤
    │ route      │ Generate scaffolding for a Route.            │
    ├────────────┼──────────────────────────────────────────────┤
    │ scaffold   │ Generate scaffolding for a resource.         │
    ├────────────┼──────────────────────────────────────────────┤
    │ stylesheet │ Generate a stylesheet                        │
    ├────────────┼──────────────────────────────────────────────┤
    │ template   │ Generate scaffolding for a template.         │
    └────────────┴──────────────────────────────────────────────┘

Validation and Schema
===

SimpleSchema
===

__The Schema Namespace is already defined in ``defineSchemaNamespace.coffee``.__

A simple, reactive schema validation package for Meteor. It's used by the Collection2 and AutoForm packages, but you can use it by itself, too.

Please visit the documentation for detailed usage instructions:
 
[https://github.com/aldeed/meteor-simple-schema/](https://github.com/aldeed/meteor-simple-schema/)

    BookSchema = new SimpleSchema({
      title: {
        type: String,
        label: "Title",
        max: 200
      },
      author: {
        type: String,
        label: "Author"
      },
      copies: {
        type: Number,
        label: "Number of copies",
        min: 0
      },
      lastCheckedOut: {
        type: Date,
        label: "Last date this book was checked out",
        optional: true
      },
      summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
      }
    });


    // Validate an object against the schema
    obj = {title: "Ulysses", author: "James Joyce"};
    
    isValid = BookSchema.namedContext("myContext").validate(obj);
    // OR
    isValid = BookSchema.namedContext("myContext").validateOne(obj, "keyToValidate");
    // OR
    isValid = Match.test(obj, BookSchema);
    // OR
    check(obj, BookSchema);
    
    // Validation errors are available through reactive methods
    if (Meteor.isClient) {
      Meteor.startup(function() {
        Tracker.autorun(function() {
          var context = BookSchema.namedContext("myContext");
          if (!context.isValid()) {
            console.log(context.invalidKeys());
          }
        });
      });
    }

Combining SimpleSchemas
---

If you have schemas that share one or more subproperties, you can define them in a sub-schema to make your code cleaner and more concise. Here's an example:

    AddressSchema = new SimpleSchema({
      street: {
        type: String,
        max: 100
      },
      city: {
        type: String,
        max: 50
      },
      state: {
        type: String,
        regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/
      },
      zip: {
        type: String,
        regEx: /^[0-9]{5}$/
      }
    });
    
    CustomerSchema = new SimpleSchema({
      billingAddress: {
        type: AddressSchema
      },
      shippingAddresses: {
        type: [AddressSchema],
        minCount: 1
      }
    });


Labels
---

label

A string that will be used to refer to this field in validation error messages. The default is an inflected (humanized) derivation of the key name itself. For example, the key "firstName" will have a default label of "First name".

If you require a field that changes its meaning in some circumstances you can provide a callback function as a label.

    MySchema = new SimpleSchema({
      firstName: {
        type: String,
        label: function () {
          return Session.get("lang") == "de"
                ? "Vorname" : "first name";
        }
      }
    });
    
    // Alternatively, you can use the labels method to alter one or more labels on the fly:
    
    MySchema.labels({
        password: "Enter your password"
    });


Save and Validate
===

Collection2
===

[https://github.com/aldeed/meteor-collection2](https://github.com/aldeed/meteor-collection2)

It extends ``Mongo.Collection`` to provide support for specifying a schema and then validating against that schema when inserting and updating.
Attach a schema to a Mongo.Collection. Automatically validates against that schema when inserting and updating from client or server code.

* While adding allow/deny rules ensures that only authorized users can edit a document from the client, adding a schema ensures that only acceptable properties and values can be set within that document from the client. Thus, client side inserts and updates can be allowed without compromising security or data integrity.
* Schema validation for all inserts and updates is reactive, allowing you to easily display customizable validation error messages to the user without any event handling.
* Schema validation for all inserts and updates is automatic on both the client and the server, providing both speed and security.
* The ``aldeed:autoform`` package can take your collection's schema and automatically create HTML5 forms based on it. ``AutoForm`` provides automatic database operations, method calls, validation, and user interface reactivity. You have to write very little markup and no event handling. Refer to the AutoForm documentation for more information.


    // Regular usage
    Books = new Mongo.Collection("books"); 
    Books.attachSchema(Schemas.Book);

    Meteor.users.attachSchema(Schema.User); // Extended docs on Collection2 @ github

Example:
---
    // Meteor.user example
    Schema.UserProfile = new SimpleSchema({
        firstName: {
            type: String,
            regEx: /^[a-zA-Z-]{2,25}$/,
            optional: true
        },
        birthday: {
            type: Date,
            optional: true
        },
        gender: {
            type: String,
            allowedValues: ['Male', 'Female'],
            optional: true
        },
        country: {
            type: Schema.UserCountry,
            optional: true
        },
        "emails.$.address": {
            type: String,
            regEx: SimpleSchema.RegEx.Email
        },
        "emails.$.verified": {
            type: Boolean
        },
        // Add `roles` to your schema if you use the meteor-roles package.
        // Option 1: Object type
        // If you specify that type as Object, you must also specify the
        // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
        // Example:
        // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
        // You can't mix and match adding with and without a group since
        // you will fail validation in some cases.
        roles: {
            type: Object,
            optional: true,
            blackbox: true
        }
    })
    
    Meteor.users.attachSchema(Schema.User);

Translation / Internationalization
===

The combination of more packages provided here affect an application wide translation.

*** 


Translate HTML content
===

tap-i18n
===

A Meteor package that provides a comprehensive i18n solution for Meteor apps and packages.

[https://github.com/TAPevents/tap-i18n/](https://github.com/TAPevents/tap-i18n/)

Example:
---

    # Readable Syntax
    <div class="btn">{{_ "sign_up"}}</div>

    # i18n/en.i18n.json 
    {
      "inbox_status": "Hey, %s! You have received one new message today.",
      "inbox_status_plural": "Hey, %s! You have received %s new messages today."
    }

    # client/messages.html 
    <template name="messages_today">
      <p>{{_ "inbox_status" "Superman" count=18}}</p>
    </template>

    
Usage:
---
    
  1. Add translation helpers to your markup:

        # *.html 
        <div>{{_ "hello"}}</div>
   
  
  2. Define translations in JSON format:
  
        { "hello": "Hey there" } // i18n/en.i18n.json 
        { "hello": "Bonjour" }  // i18n/fr.i18n.json 


Translate Schemas
===

meteor-simple-schema-i18n
===

Internationalization for ``aldeed:simple-schema`` error messages, powered by ``tap:i18n``.

[https://github.com/gwendall/meteor-simple-schema-i18n/](https://github.com/gwendall/meteor-simple-schema-i18n/)

Translate Collections
===

tap-i18n-db
===

[https://github.com/TAPevents/tap-i18n-db](https://github.com/TAPevents/tap-i18n-db)

Internationalization for Meteor Collections
Extends the tap:i18n package to allow the translation of collections.

``tap-i18n-db`` is a Meteor package that extends ``tap-i18n`` to allow the translation of collections. 


### Step 1

Initialize the collection you wish to translate with ``new TAPi18n.Collection`` 

    Inventors = new TAPi18n.Collection("inventors");

### Step 2

Insert translated documents with insertTranslations

    id = Inventors.insertTranslations({born: 1856, name: "Nikola Tesla"}, {
        zh: {
            name: "尼古拉·特斯拉"
        }
    });
    
Any existing documents can be translated with updateTranslations

    Inventors.updateTranslations(id, {
        ru: {
            name: "Ни́кола Те́сла"
        }
    })
    
    
If you are updating from the client, you can use the translate method to translate a document to the session's current language. In the following example, we assume that ``TAPi18n.getLanguage()`` returns ``ru`` (Russian):

    Inventors.translate(id, {name: 'Ни́кола Те́сла'});
    
### Step 3

This is equivalent to the above ``updateTranslations`` example.


***

Translation Helpers
===

tap-i18n-ui
===

Generate a series of select language buttons

[https://github.com/TAPevents/tap-i18n-ui](https://github.com/TAPevents/tap-i18n-ui)

### Language Buttons

        {{> i18n_buttons}}
        
### Language Dropdown

        {{> i18n_dropdown}}     
        
### Helpers

If you want to implement your own UI, tap-i18n-ui facilitates this with handlebars helpers

``i18n_currentLanguage`` Returns an object with and localized name, language ``tag``, and english translation en.

``{{i18n_currentLanguage.name}} - {{i18n_currentLanguage.en}}``

Including the above snippet in your template will yield something like ``Français - (French)``

tap-i18n-ui also provides some other handlebars helpers:

    {{i18n_enabled}}                  // true if languages found
    {{i18n_sortedLanguages}}          // array of available languages
    {{i18n_isCurrentLanguage 'tag'}}  // true if given tag equals current language tag

### Events

You can define a ``TAPi18n._afterUILanguageChange`` function within your project to be called each time the language is changed using a tap-i18n-ui template.


# Friendly Id

``todda00:friendly-slugs`` [https://github.com/todda00/meteor-friendly-slugs/](https://github.com/todda00/meteor-friendly-slugs/)