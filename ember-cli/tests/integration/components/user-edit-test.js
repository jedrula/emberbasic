  import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-edit', 'Integration | Component | user edit', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{user-edit}}`);

  assert.ok(this.$().text().includes('Save'));

  //No template block usage:" + EOL +
  this.render(hbs`
    {{#user-edit}}
      template block text
    {{/user-edit}}
  `);

  assert.notOk(this.$().text().includes('template block text'));
});
