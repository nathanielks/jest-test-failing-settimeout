import { jest } from '@jest/globals'

jest.useFakeTimers()
describe('Timers', () => {
  test.failing('throwing errors in setTimeout with test.failing marks tests as passing with fake timers', async () => {
    setTimeout(() => { throw new Error() }, 5)
    jest.runAllTimers()
  })
})
