/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-interactjs',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/interactjs/dist/interact.min.js');
    app.import(app.bowerDirectory + '/interactjs/dist/interact.min.js.map');
  }
};
