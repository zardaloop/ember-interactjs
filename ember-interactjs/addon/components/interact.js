import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'interact',

  setupInteractjs: function() {
    // ...
  }.on('didInsertElement'),

  teardownInteractjs: function() {
    this.get('interactjs').destroy();
  }.on('willDestroyElement'),
});