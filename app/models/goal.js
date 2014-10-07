import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  frequency: DS.attr('string'),
  target: DS.attr('string')
});
