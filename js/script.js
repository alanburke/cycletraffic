/* Author:

*/

$(document).ready(function() {
  var twitter = Tempo.prepare('tweets').notify(function(event) {
    if (event.type === TempoEvent.Types.RENDER_STARTING || event.type === TempoEvent.Types.RENDER_COMPLETE) {
      $('ol').toggleClass('loading');
    }
  });
  twitter.starting();
  $.getJSON("http://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=alanjosephburke&count=6&callback=?", function(data) {
    twitter.render(data);
  });
});
