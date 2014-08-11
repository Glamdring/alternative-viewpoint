var data                  	= require("sdk/self").data;
var widgets 				= require("sdk/widget");
var tabs 					= require("sdk/tabs");

var widget = widgets.Widget({
  id: "alternative-viewpoint-link",
  label: "Read about this story from another source",
  contentURL: data.url("icon.png"),
  onClick: function() {
    var tab = tabs.activeTab;
	tab.attach({
		contentScript: "var h1s = document.getElementsByTagName('h1'); if (h1s.length > 0) self.postMessage(h1s[h1s.length - 1].innerHTML);",
		onMessage: function(headline) {
			tabs.open({
				url: "https://www.google.com/search?tbm=nws&q=" + headline
			});
		}
	});
  }
});