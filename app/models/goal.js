import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  target: DS.attr('string'),
  tallies: DS.hasMany('tally', {async: true}),
  /*
   * Returns the number of tallies for the current week.
   */
  numberOfTalliesForWeek: function() {
    var range = window.moment().range(
      window.moment().startOf('week'),
      window.moment().endOf('week')
    );

    return this.get('tallies').filter(function(tally) {
      return range.contains(tally.get('createdAt'));
    }).length;
  }.property('tallies.@each')
});
