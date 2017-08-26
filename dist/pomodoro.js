'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = require('child_process');

// const MINUTES = 60 * 1000
var MINUTES = 1 * 1000;

var WORK_CYCLE = 25 * MINUTES;
var BREAK_CYCLE = 5 * MINUTES;
var LONG_CYCLE = 15 * MINUTES;

var MAX_CONSECUTIVE_WORK = 4;

var messages = {
  WORK: 'Time to Work!',
  BREAK: 'Time to take a break!',
  LONG: 'Time to take a long break...'
};

var WORKING = 'WORKING';
var BREAKING = 'BREAKING';
var LONG = 'LONG';

function logSeconds(str, miliseconds) {
  console.log(str + ' ' + miliseconds / 1000 + ' seconds');
}

function notifySend(str) {
  (0, _child_process.exec)('notify-send "POMODORO: ' + str + '"', function (error, stdout, stderror) {
    if (error) {
      console.log('error: ', error);
      console.log('stdout: ', stdout);
      console.log('stderror: ', stderror);
    }
  });
}

function setupNext(_ref) {
  var workCount = _ref.workCount,
      status = _ref.status;

  console.log('setupNext - workCount: ' + workCount + ', status: ' + status);
  var next = {};
  var countDown = WORK_CYCLE;
  switch (status) {
    case WORKING:
      if (workCount % MAX_CONSECUTIVE_WORK === 0) {
        next.status = LONG;
        countDown = LONG_CYCLE;
        notifySend(messages.LONG);
      } else {
        next.status = BREAKING;
        countDown = BREAK_CYCLE;
        notifySend(messages.BREAK);
      }
      break;
    case BREAKING:
    case LONG:
      next.status = WORKING;
      next.workCount = workCount + 1;
      countDown = WORK_CYCLE;
      notifySend(messages.WORK);
      break;
  }
  console.log('NEXT SETUP:', next);
  logSeconds('NEXT COUNT DOWN:', countDown);
  setTimeout(function () {
    setupNext({
      workCount: next.workCount || workCount,
      status: next.status || status
    });
  }, countDown);
}

function start() {
  console.log('STARTING POMODORO...');
  setTimeout(function () {
    setupNext({
      workCount: 1,
      status: WORKING
    });
  }, WORK_CYCLE);
}

exports.default = {
  start: start
};