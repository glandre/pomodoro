'use strict';

var fs = require('fs');

function someAsyncOperation(callback) {
  fs.readFile(__dirname + '/../README.md', callback);
}

var timeoutScheduled = Date.now();

setTimeout(function () {
  var delay = Date.now() - timeoutScheduled;
  console.log(delay + 'ms have passed since I was scheduled');
}, 10);

someAsyncOperation(function () {
  console.log('starting someAsyncOperation');
  var startCallback = Date.now();
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
  console.log('finishing someAsyncOperation');
});