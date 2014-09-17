window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function() {
    NewsReader.feeds = new NewsReader.Collections.Feeds();
    
    new NewsReader.Routers.Feeds({
      "$rootEl": $("#sidebar")
    });
    Backbone.history.start();
  },
  
  index: function () {
    NewsReader.feeds.fetch();
    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });
    $('#sidebar').html(indexView.render().$el);
  },
};

$(document).ready(function(){
  NewsReader.initialize();
  NewsReader.index();
});
