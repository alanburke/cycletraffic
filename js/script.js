/* Author:

*/

$(document).ready(function() {
  var twitter = Tempo.prepare('tweets').notify(function(event) {
    if (event.type === TempoEvent.Types.RENDER_STARTING || event.type === TempoEvent.Types.RENDER_COMPLETE) {
      $('ol').toggleClass('loading');
    }
  });
  twitter.starting();
//  $.getJSON("http://search.twitter.com/search.json?q='alanjosephburke'&rpp=10&callback=?", function(data) {
  $.getJSON("http://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=alanjosephburke&count=5&callback=?", function(data) {
    twitter.render(data);
    console.log(data);
  });
});




