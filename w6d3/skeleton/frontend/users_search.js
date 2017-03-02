const APIUtil = require('./api_util');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = $("input[type=text][name=users-input]").val();
    this.$ul = $("ul.users");
  }
}
