import DS from 'ember-data';

export default DS.Model.extend({
  goal: DS.belongsTo('goal', {async: true}),
  createdAt: DS.attr('date', {
    defaultValue: function() { return new Date(); }
  })
});
