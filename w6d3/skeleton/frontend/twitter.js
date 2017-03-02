const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

$(() => {
  $(".follow-toggle").each((index, button) => {
    new FollowToggle(button);
  });
});

$(() => {
  $(".users-search").each((index, nav) => {
    new UsersSearch(nav);
  });
});
