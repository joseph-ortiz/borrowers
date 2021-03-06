import DS from 'ember-data';

export default DS.Model.extend({
  articles:		 DS.hasMany('article'),
  email: 		 DS.attr('string'),
  firstName: 	 DS.attr('string'),
  lastName: 	 DS.attr('string'),
  totalArticles: DS.attr('number'),
  twitter: 		 DS.attr('string'),
  fullName: 	 Ember.computed('fullName', 'lastName', function(){
  	return this.get('firstName') + ' ' + this.get('lastName');
  })
});
