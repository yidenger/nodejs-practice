const promise = Promise.resolve()
.then(() => {
  return promise;
})
promise.catch(console.error)

// output: nothing