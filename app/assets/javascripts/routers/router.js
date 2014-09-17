NewsReader.Routers.Feeds = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'feeds/:id': 'feedShow',
    'entry/:id': 'entryShow'
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
    $("body div#content").html(showView.render().$el)
    //this._swapView(showView);
  },
  
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    console.log(this._currentView);
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  
  }
});