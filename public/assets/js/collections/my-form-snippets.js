define([
       "jquery" , "underscore" , "backbone"
       , "models/snippet"
       , "collections/snippets" 
       , "views/my-form-snippet"
], function(
  $, _, Backbone
  , SnippetModel
  , SnippetsCollection
  , MyFormSnippetView
){
  return SnippetsCollection.extend({
    model: SnippetModel
    , renderAll: function(){
      return this.map(function(snippet){
        return new MyFormSnippetView({model: snippet}).render(true);
      })
    }
    , renderAllClean: function(){
      return this.map(function(snippet){
        return new MyFormSnippetView({model: snippet}).render(false);
      });
    }
	
		//NEW
		//function to get the user-chosen values for all snippets --> the form model
		, getFormModel: function() {
			return this.map(function(snippet) {
				return snippet.getValues();
			});
		}
  });
});
