NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: 'api/feeds',
  model: NewsReader.Models.Feed,
  
  getOrFetch: function (id) {
    var feed = NewsReader.feeds.get(id);
    if (feed) {
      feed.fetch();
    } else {
      feed = new NewsReader.Models.Feed({ id: id });
      feed.fetch({ 
        success: function () {
          NewsReader.feeds.add(feed);
        }
      });
      
    }
    return feed;
  }
});