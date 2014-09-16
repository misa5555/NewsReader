NewsReader.Views.FeedsShow = Backbone.View.extend({
  template: JST['feeds/show'],
  
  events:{
    'click .refresh' : 'refresh'
  },
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },
  
  refresh: function () {
    this.model.fetch();
  },
  
  render: function(){
    var view = this;
    var renderedContent = this.template({
      feed: this.model
    });
    
    this.$el.html(renderedContent);
    return this;
  }
});  