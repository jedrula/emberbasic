import Ember from 'ember';

export default Ember.Component.extend({
  // extraPickadateOptionsFrom: Ember.computed('maxDate', function() {
  //   debugger;
  //   return {
  //     max: this.get('maxDate')
  //   };
  // }),

  // extraPickadateOptionsTo: Ember.computed('minDate', function() {
  //   return {
  //     min: this.get('minDate')
  //   };
  // }),

  didReceiveAttrs() {
    this._super(...arguments);

    this.set('extraPickadateOptionsFrom', {
        max: this.get('maxDate')
    });

    this.set('extraPickadateOptionsTo', {
        min: this.get('minDate')
    });
  },

  actions: {
    minDatePicked(newDate) {
      if(newDate) {  //only assign a value if its actually meaningful.
        newDate.setHours(0,0,0,0);
        this.set('minDate', newDate);
      }
      else {
        this.set(element, undefined);  //make sure date is set to undefined when it does not exist. We do not want null. This way it wont get posted in the form submit
      }
    },
    maxDatePicked(newDate) {
      if(newDate) {  //only assign a value if its actually meaningful.
        newDate.setHours(23,59,59,999);
        this.set('maxDate', newDate);
      }
      else {
        this.set(element, undefined);  //make sure date is set to undefined when it does not exist. We do not want null. This way it wont get posted in the form submit
      }
    },
    filter() {
      let data = this.getProperties(['minDate','maxDate','description','amount']);
      this.getAttr('filter')(data);
    }
  }
});
