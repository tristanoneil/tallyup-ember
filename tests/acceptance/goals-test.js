import Ember from 'ember';
import startApp from '../helpers/start-app';
import stopApp from '../helpers/stop-app';
import config from '../../config/environments/test';

var App;

module('Acceptance: GoalsTest', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    stopApp(App);
  }
});

test('adding a new goal', function() {
  visit('/goals/new');
  fillIn('form .name', 'Run More');
  fillIn('form .target', '5');
  click('form input[type=submit]');

  andThen(function() {
    equal(find('.goals .goal').length, 1, 'There should be 1 goal');
  });
});

test('tallying up a goal', function() {
  visit('/goals/new');
  fillIn('form .name', 'Run More');
  fillIn('form .target', '5');
  click('form input[type=submit]');
  click('.up');

  andThen(function() {
    equal(find('.goals .goal:first .stats h3').text(), '1 of 5', 'There should be 1 tally');
  });
});

test('tallying down a goal', function() {
  visit('/goals/new');
  fillIn('form .name', 'Run More');
  fillIn('form .target', '5');
  click('form input[type=submit]');
  click('.up');
  click('.up');
  click('.down');

  andThen(function() {
    equal(find('.goals .goal:first .stats h3').text(), '1 of 5', 'There should be 1 tally');
  });
});
