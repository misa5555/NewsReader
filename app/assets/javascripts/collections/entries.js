NewsReader.Collections.Entries = Backbone.Collection.extend({
  url: 'api/feeds',
  model: NewsReader.Models.Entry,
  
  url: function () {
    this.feed.url() + '/entries';
  },
  
  initialize: function (models, options) {
    this.feed = options.feed;
  }
});