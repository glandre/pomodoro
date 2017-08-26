/* global describe, it */
import assert from 'assert'
import { countCastles } from '../../src/castle-counter'

describe('countCastles', () => {
  // about valleys
  it('Should return 2 if array is [6,1,4] (first position + one valley)', () => {
    assert.equal(
      countCastles([6, 1, 4]),
      2
    )
  })
  // about peaks
  it('Should return 2 if array is [2,6,6,6,3] (first position + one peak)', () => {
    assert.equal(
      countCastles([2, 6, 6, 6, 3]),
      2
    )
  })
  it('Should return 1 if array is [1, 1, 1] (plain area)', () => {
    assert.equal(
      countCastles([1, 1, 1]),
      1
    )
  })
  // in-depth test
  it('Should return 5 if array is [2, 2, 2, 1, 2, 2, 3, 1, 7, 2]', () => {
    assert.equal(
      countCastles([2, 2, 2, 1, 2, 2, 3, 1, 7, 2]),
      5
    )
  })
  // some edge cases
  it('Should return 0 if array is null or empty', () => {
    assert.equal(
      countCastles([]),
      0
    )
    assert.equal(
      countCastles(null),
      0
    )
  })
  it('Should return 1 if array contains only one element', () => {
    assert.equal(
      countCastles([1]),
      1
    )
  })
})
