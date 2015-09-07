import Ember from 'ember';

export default Ember.Controller.extend({
	isValid: Ember.computed(
		'model.description',
		function(){
			return !Ember.isEmpty(this.get('model.description'));
		}
	),
	actions:{
		save: function(){
			console.log('+= save action in friends new controller');
			if(this.get('isValid')){
				var _this = this;
				this.get(model).save().then(function(friend){
					_this.transitionRoute('friends.show');
				});
			}else{
				this.set('errorMessage','you have not set a description');
			}
			return false;
		},
		cance: function(){
			return true;
		}
	}
});