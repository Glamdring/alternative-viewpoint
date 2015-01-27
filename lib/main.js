var data                  	= require("sdk/self").data;
var tabs 					= require("sdk/tabs");
var ui = require("sdk/ui");

var actionButton = ui.ActionButton({
  id: "alternative-viewpoint-link",
  label: "Read about this story from another source",
  icon: data.url("icon.png"),
  onClick: function() {
    var tab = tabs.activeTab;
	tab.attach({
		contentScript: "var h1s = document.getElementsByTagName('h1'); var biggest = ''; for (i = 0; i < h1s.length; i++) {if (h1s[i].textContent.trim().length > biggest.length) {biggest = h1s[i].textContent.trim();}}; self.postMessage(biggest);",
		onMessage: function(headline) {
			tabs.open({
				url: "https://www.google.com/search?tbm=nws&q=" + headline
			});
		}
	});
  }
});