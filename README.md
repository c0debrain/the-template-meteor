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

Install Meteor

     curl https://install.meteor.com/ | sh

Clone the app

    git clone git@github.com:mediatainment/the-template-meteor.git

Configuration
===

Place an empty file in the root folder and name it ``.env``. Put in all the environment variables defined below.
If you wont have some packages enabled simply deinstall it (``meteor remove package:name``)
The app needs at least the following packages to run properly:

* meteor-platform
* iron:router
* coffeescript


iron help


Startup
===

    meteor

or

    iron run

Scaffolding
===

because we use the ``iron-cli`` we are able to scaffold the app like the generators in ruby on rails.

type ``iron help`` and get the commands listed to scaffold your resource:

Usage: ``iron <command> [<args>] [<opts>]``

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

Mobile devices
===

To run the ios or android app use this:

    meteor run ios
    meteor run android

Install SDKs for mobile devices
---

    meteor install-sdk android
    meteor install-sdk ios

Getting started for mobile devices

[http://www.sitepoint.com/beginners-guide-mobile-development-meteor/](http://www.sitepoint.com/beginners-guide-mobile-development-meteor/)

Settings
---

The ``mobile-config.js`` includes device depending settings. Change them to your needs.

Testing
===

Testing comes with karma which is configured in ``karma.conf.js`` which should be modified to your needs.

If you are testing outside your ide try the following packages

 ``meteor add velocity:html-reporter``
 shows your tests within your app
 [https://github.com/meteor-velocity/html-reporter](https://github.com/meteor-velocity/html-reporter)

 ``meteor add velocity:console-reporter``
 puts test results into your console
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

You can have a look over there if you are interested in npm with meteor:

[https://meteorhacks.com/complete-npm-integration-for-meteor](https://meteorhacks.com/complete-npm-integration-for-meteor)
meteor add meteorhacks:npm