/*jshint node:true*/
module.exports = {
  description: '',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/interactjs/dist/interact.min.js');
    app.import('bower_components/interactjs/dist/interact.min.js.map');
  }
};
