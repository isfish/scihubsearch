searchSciHub = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "http://sci-hub.io/" + query});
};

chrome.contextMenus.create({
  title: "Search DOI in sci-hub",
  contexts:["selection"],
  onclick: searchSciHub
});
