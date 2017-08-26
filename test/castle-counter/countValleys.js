/* global describe, it */
import assert from 'assert'
import { getDirections, countValleys } from '../../src/castle-counter'

describe('countValleys', () => {
  it('Should return 2 if array is [2, 2, 2, 1, 2, 2, 3, 1, 7, 2]', () => {
    assert.equal(
      countValleys(getDirections([2, 2, 2, 1, 2, 2, 3, 1, 7, 2])),
      2
    )
  })
  // some edge cases:
  it('Should return 0 if array is null', () => {
    assert.equal(
      countValleys(getDirections(null)),
      0
    )
  })
  it('Should return 0 if array is empty', () => {
    assert.equal(
      countValleys(getDirections([])),
      0
    )
  })
  it('Should return 0 if array is contains one element', () => {
    assert.equal(
      countValleys(getDirections([1])),
      0
    )
  })
  it('Should return 1 if array is [2, 1, 2]', () => {
    assert.equal(
      countValleys(getDirections([2, 1, 2])),
      1
    )
  })
})
