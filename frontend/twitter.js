const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');
const TweetCompose = require('./tweet_compose');

$(function () {
    $('form.tweet-compose').each( (i, form) => new TweetCompose(form) );
    $('.users-search').each( (i, search) => new UsersSearch(search) );
    $('button.follow-toggle').each( (i, btn) => new FollowToggle(btn, {}) );
});