import Ember from 'ember';
import config from '../../config/environments/test';

export default function stopApp(App) {
  stop();
  var firebase = new window.Firebase(config.firebaseUrl);

  firebase.remove(function() {
    start();
    Ember.run(App, 'destroy');
  });
}
