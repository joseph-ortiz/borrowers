import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.modelFor('friends/show').get('articles');
	},
	deactivate: function(){
		var model = this.modelFor('articles/index');
		model.rollback();
	},
	actions: {
		save: function(model){
			model.save();
			return false;
		}
	}
});
