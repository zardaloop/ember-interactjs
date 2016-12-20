
/* jshint node: true */
'use strict';

module.exports = {
  name: 'interactjs',
  included: function included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/interactjs/dist/interact.min.js');
    app.import(app.bowerDirectory + '/chartist/dist/interact.min.js.map');
    app.import('vendor/interact.min.js', {
      exports: {
        Interact: ['default']
      }
    });
  }
};