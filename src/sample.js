const fs = require('fs')

function someAsyncOperation(callback) {
  fs.readFile(__dirname + '/../README.md', callback)
}

const timeoutScheduled = Date.now()

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled
  console.log(`${delay}ms have passed since I was scheduled`)
}, 10)

someAsyncOperation(() => {
  console.log('starting someAsyncOperation')
  const startCallback = Date.now()
  while(Date.now() - startCallback < 10) {
    // do nothing
  }
  console.log('finishing someAsyncOperation')
})
