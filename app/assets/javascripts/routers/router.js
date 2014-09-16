NewsReader.Routers.Feeds = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'feeds/:id': 'feedShow'
  },
  
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  index: function () {
    NewsReader.feeds.fetch();
    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });
    this._swapView(indexView);
  },
  
  feedShow: function(id) {
    var feed = NewsReader.feeds.getOrFetch(id);
    var showView = new NewsReader.Views.FeedsShow({
      model: feed
    });
    
    this._swapView(showView);
  },
  
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
    
  }
});