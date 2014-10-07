import DS from 'ember-data';
import ENV from 'tallyup/config/environment';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase(ENV.firebaseUrl)
});
