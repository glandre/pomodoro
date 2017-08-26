'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pomodoro = require('./pomodoro');

var _pomodoro2 = _interopRequireDefault(_pomodoro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// Executes the command line interface for the program
//
function run() {
  console.log('Welcome to Pomodoro\n');

  // handle stdin read line events
  process.stdin.pipe(require('split')()).on('data', function (line) {
    try {
      var command = line.trim().toLowerCase();
      switch (command) {
        case 'start':
          console.log('starting...');
          _pomodoro2.default.start();
          break;
        case 'quit':
          console.log('\nBye!');
          process.exit(0);
      }
    } catch (error) {
      console.log('\nI\'m  sorry, I didn\'t understand that...');
      console.log(error.message || error);
    } finally {
      console.log('\n------\nType \'quit\' to stop the program...\n>');
    }
  });
}

exports.default = run;