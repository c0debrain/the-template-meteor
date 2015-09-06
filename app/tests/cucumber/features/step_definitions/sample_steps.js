(function () {

    'use strict';

    // You can include npm dependencies for support files in tests/cucumber/package.json
    var _ = require('underscore');
    var url = require('url');
    var assert = require('assert');

    // this.client and this.browser are aliases (the same).
    // They reference to a WebdriverIO instance.
    // You can find the API here:
    //   http://webdriver.io/api.html
    // this.server is a DDP connection.
    // You can use this.server.call and this.server.apply
    // the same way as Meteor.call and Meteor.apply.
    // You can find all the available documentation here:
    //   https://velocity.readme.io/docs/getting-started-with-cucumber
    //   https://chimp.readme.io/

    module.exports = function () {

        // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
        var url = require('url');

        this.Given(/^I am a visitor$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            callback.pending();
        });

    };

})(); 