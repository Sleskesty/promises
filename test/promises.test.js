import * as Exercise from '../src'

describe('Promises', () => {

  it(`resolving a promise from a value`, async () => {
    const value = Exercise.resolvingValues()
    expect(value).to.be.an.instanceof(Promise)
    expect(await value).to.be.a.string()
  })

})
