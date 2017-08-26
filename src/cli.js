import pomodoro from './pomodoro'
//
// Executes the command line interface for the program
//
function run () {
  console.log('Welcome to Pomodoro\n')

  // handle stdin read line events
  process.stdin.pipe(require('split')()).on('data', (line) => {
    try {
      const command = line.trim().toLowerCase()
      switch(command) {
        case 'start':
          console.log('starting...')
          pomodoro.start()
          break
        case 'quit':
          console.log('\nBye!')
          process.exit(0)
      }
    } catch (error) {
      console.log('\nI\'m  sorry, I didn\'t understand that...')
      console.log(error.message || error)
    } finally {
      console.log('\n------\nType \'quit\' to stop the program...\n>')
    }
  })
}

export default run
