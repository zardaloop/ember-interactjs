import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'interact',

  setupXbutton: function() {
    // ...
  }.on('didInsertElement'),

  teardownXbutton: function() {
    this.get('interactjs').destroy();
  }.on('willDestroyElement'),
});