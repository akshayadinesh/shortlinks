// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// This event is fired each time the user updates the text in the omnibox,
// as long as the extension's keyword mode is still active.
chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    console.log('inputChanged: ' + text);
    suggest([
      {content: text + " one", description: "the first one"},
      {content: text + " number two", description: "the second entry"}
    ]);
  });

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    console.log('inputEntered: ' + text);
    alert('You just typed "' + text + '"');
  });

chrome.tabs.onUpdated.addListener(function
  (tabId, changeInfo, tab) {
    var url = tab.url;

    var url_protocol_stripped = /^http[s]?:\/\/(.*)/g.exec(url);

    if (url_protocol_stripped != null && url_protocol_stripped.length >= 2) {
      var match = url_protocol_stripped[[1]].split("/");
      doRedirectIfSaved(tabId, match[0], match.splice(1));
    }
  }
);