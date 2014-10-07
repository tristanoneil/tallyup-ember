import Ember from 'ember';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('goal', 'Goal', {
  needs: ['model:tally']
});

test('numberOfTalliesForWeek returns the number of tallies for the current week', function() {
  var model = this.subject();
  var store = this.store();

  Ember.run(function() {
    var tallyOne = store.createRecord('tally');
    var tallyTwo = store.createRecord('tally', {createdAt: window.moment().subtract(3, 'weeks')});

    model.get('tallies').then(function(tallies) {
      tallies.addObject(tallyOne);
      tallies.addObject(tallyTwo);
    });
  });

  andThen(function() {
    equal(model.get('numberOfTalliesForWeek'), 1);
  });
});
