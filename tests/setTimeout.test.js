import { setTimeout as wait } from 'node:timers/promises'

describe('Timers', () => {
  test.failing('throwing errors with test.failing marks tests as passing', () => {
    throw new Error()
  })

  test.failing('throwing errors in setTimeout with test.failing marks tests as passing', async () => {
    setTimeout(() => { throw new Error() }, 5)
    await wait(10) 
  })
})
