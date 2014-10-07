import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    /*
     * Creates a new Tally and associates it with the current
     * Goal.
     */
    tallyUp: function() {
      var tally = this.store.createRecord('tally');

      this.get('model').get('tallies').then(function(tallies) {
        tallies.addObject(tally);
      });

      this.get('model').save();
      tally.save();
    },
    /*
     * Deletes the last Tally added to the current goal based on
     * the createdAt date of the tally.
     */
    tallyDown: function() {
      var goal = this.get('model');

      goal.get('tallies').then(function(tallies) {
        var lastTally = tallies.sortBy('createdAt').reverse().objectAt(0);

        tallies.removeObject(lastTally);

        Ember.run.debounce(this, function() {
          lastTally.destroyRecord();
        }, 100);

        goal.save();
      });
    }
  }
});
