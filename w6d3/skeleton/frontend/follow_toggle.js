const APIUtil = require('./api_util');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.$el.on("click", event => {
        event.preventDefault();
        this.handleClick();
      });
  }

  render() {
    if (this.followState === "unfollowed" || this.followState === "following") {
      this.$el.html("Follow!");
    } else if (this.followState === "followed" || this.followState === "unfollowing") {
      this.$el.html("Unfollow!");
    }

    if (this.followState === "unfollowing" || this.followState === "following") {
      this.$el.prop("disabled", true);
    } else {
      this.$el.prop("disabled", false);
    }
  }

  toggleState() {
    if (this.followState === "unfollowed" || this.followState === "following") {
      this.followState = "followed";
    } else {
      this.followState = "unfollowed";
    }
  }

  handleClick() {
    let method = "";
    if (this.followState === "unfollowed") {
      this.followState = "following";
      this.render();
      APIUtil.followUser(this.userId)
        .then(res => this.toggleState(res))
        .then(res => this.render(res))
        .fail(err => console.log(err));
    } else {
      this.followState = "unfollowing";
      this.render();
      APIUtil.unfollowUser(this.userId)
        .then(res => this.toggleState(res))
        .then(res => this.render(res))
        .fail(err => console.log(err));
    }
  }
}

module.exports = FollowToggle;
