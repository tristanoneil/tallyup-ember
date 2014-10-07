import Ember from 'ember';
import config from '../../config/environments/test';

export default function stopApp(App) {
  var firebase = new window.Firebase(config.firebaseUrl);

  firebase.remove(function() {
    Ember.run(App, 'destroy');
  });
}
