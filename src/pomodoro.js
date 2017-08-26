import { exec } from 'child_process'

const MINUTES = 60 * 1000

const WORK_CYCLE = 25 * MINUTES
const BREAK_CYCLE = 5 * MINUTES
const LONG_CYCLE = 15 * MINUTES

const MAX_CONSECUTIVE_WORK = 4

const messages = {
  WORK: 'Time to Work!',
  BREAK: 'Time to take a break!',
  LONG: 'Time to take a long break...'
}

const WORKING = 'WORKING'
const BREAKING = 'BREAKING'
const LONG = 'LONG'

function logSeconds(str, miliseconds) {
  console.log(`${str} ${miliseconds / 1000} seconds`)
}

function notifySend (str) {
  console.log('POMODORO: ' + str)
  exec(`notify-send "POMODORO: ${str}"`, function(error, stdout, stderror) {
    if (error) {
      console.log('error: ', error)
  		console.log('stdout: ', stdout)
  		console.log('stderror: ', stderror)
    }
	});
}

function setupNext ({ workCount, status }) {
  console.log(`setupNext - workCount: ${workCount}, status: ${status}`)
  let next = {}
  let countDown = WORK_CYCLE
  switch(status) {
    case WORKING:
      if (workCount % MAX_CONSECUTIVE_WORK === 0) {
        next.status = LONG
        countDown = LONG_CYCLE
        notifySend(messages.LONG)
      } else {
        next.status = BREAKING
        countDown = BREAK_CYCLE
        notifySend(messages.BREAK)
      }
      break
    case BREAKING:
    case LONG:
      next.status = WORKING
      next.workCount = workCount + 1
      countDown = WORK_CYCLE
      notifySend(messages.WORK)
      break
  }
  console.log('NEXT SETUP:', next)
  logSeconds('NEXT COUNT DOWN:', countDown)
  setTimeout(() => {
    setupNext({
      workCount: next.workCount || workCount,
      status: next.status || status
    })
  }, countDown)
}

function start () {
  console.log('STARTING POMODORO...')
  setTimeout(() => {
    setupNext({
      workCount: 1,
      status: WORKING
    })
  }, WORK_CYCLE)
}

export default {
  start
}
