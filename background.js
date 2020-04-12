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
var sample_alias = 'http://mm/'
var sample_tabs = ['https://docs.google.com/spreadsheets/d/1njOuKFobhQC4wx9HRTFnE15JoWWatu6BjXdGj3pZh4I/edit#gid=1302233113',
'https://docs.google.com/spreadsheets/d/1hDLL8XsO4-dXWJu1PnZKdMTmIDHWp6EVZJoqVwkgFTc/edit',
'https://docs.google.com/forms/d/1iJvM0GC2O2Cj6FoFdVn7GP6xgopghZeZpjdEv-pzQ04/edit',
'https://docs.google.com/forms/u/1/d/1XcZRkRsSSKftT8r_m3C4CncteA7J7OtqVZiUpNWBr-c/edit?usp=drive_web',
'gmail.com']

    // read changeInfo data and do something with it (like read the url)
    if (changeInfo.url) {
      // alert(changeInfo.url)
      if (changeInfo.url == sample_alias) {
        for(var i = 0; i < sample_tabs.length; i++) {
          if (sample_tabs[i].indexOf('://') < 0) {
            // Add a default protocol
            sample_tabs[i] = "http://" + redirect;
          }
          chrome.tabs.create({url: sample_tabs[i]})
        }
        chrome.tabs.remove(tabId)
      }
    }
  }
);