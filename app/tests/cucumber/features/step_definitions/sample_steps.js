(function () {

    'use strict';

    // You can include npm dependencies for support files in tests/cucumber/package.json
    var _ = require('underscore');

    module.exports = function () {

        // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
        var url = require('url');

        this.Given(/^I am a visitor$/, function (callback) {
            // Write code here that turns the phrase above into concrete actions
            callback.pending();
        });

    };

})(); 