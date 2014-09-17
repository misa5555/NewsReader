NewsReader.Views.EntriesShow = Backbone.View.extend({
  template: JST["entries/show"],
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },
  
  render: function(){
    alert("render");
    var view = this;
    var renderedContent = this.template({
      feed: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
  
});