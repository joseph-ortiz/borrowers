import Ember from 'ember';
import ArticlesBaseController from './base';

export default Ember.Controller.extend({
	actions:{
		cancel: function(){
			console.log('+= cancel action in friends new controller');
			//this.transitionToRoute('friends.show')//TODO:does this need a context
			return false;
		}
	}
});