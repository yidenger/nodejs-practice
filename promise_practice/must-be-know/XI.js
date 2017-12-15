Promise.resolve()
.then(function success (res) {
  throw new Error('error')
}, function fail1 (e) {
  console.error('fail1: ', e)
})
.catch(function fail2 (e) {
  console.error('fail2: ', e)
})

// output: fail2: error