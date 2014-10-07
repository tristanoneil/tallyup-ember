import Ember from 'ember';

export default Ember.Controller.extend({
  frequencies: ['Daily', 'Weekly', 'Monthly'],
  newGoal: {},
  actions: {
    /*
     * Persist the newGoal to Firebase, reset the newGoal, which will
     * reset the new goal form then redirect back to the goals route.
     */
    save: function() {
      this.store.createRecord('goal', this.get('newGoal')).save();
      this.set('newGoal', {});
      this.transitionTo('goals');
    }
  }
});
