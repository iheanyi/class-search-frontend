import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('term').then(response => {
      console.log('Successful response!');
      console.log(response);
    });
  }
});
