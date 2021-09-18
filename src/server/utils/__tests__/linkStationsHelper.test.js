/* eslint-env jest */

import {
  calculateDistanceBetweenPoints,
  calculatePowerOverGivenDistance,
  calculateLinkStationWithMostPowerForGivenCoordinates
} from '../linkStationsHelper'

const X1_DEFAULT = 0
const Y1_DEFAULT = 0

const LINK_STATIONS_DEFAULT = [
  {
    x: 0,
    y: 0,
    reach: 10
  },
  {
    x: 20,
    y: 20,
    reach: 5
  },
  {
    x: 10,
    y: 0,
    reach: 12
  }
]

describe('calculateDistanceBetweenPoints', () => {
  test('Point one above to be 1', () => {
    const x2 = 1
    const y2 = 0
    expect(calculateDistanceBetweenPoints(X1_DEFAULT, Y1_DEFAULT, x2, y2)).toBe(1)
  })
  test('Point one and over to the side to be sqr of 2', () => {
    const x2 = 1
    const y2 = 1
    expect(calculateDistanceBetweenPoints(X1_DEFAULT, Y1_DEFAULT, x2, y2)).toBe(1.4142135623730951)
  })
  test('At same point to be 0', () => {
    const x2 = 1
    const y2 = 1
    expect(calculateDistanceBetweenPoints(x2, y2, x2, y2)).toBe(0)
  })
})

describe('calculatePowerOverGivenDistance', () => {
  test('Same point to have power of reach squared', () => {
    const reach = 3
    const distance = 0
    expect(calculatePowerOverGivenDistance(reach, distance)).toBe(9)
  })
  test('Reach equaling distance to have 0 power', () => {
    const reach = 1
    const distance = 1
    expect(calculatePowerOverGivenDistance(reach, distance)).toBe(0)
  })
  test('Reach doubling distance to be half the reach squared', () => {
    const reach = 4
    const distance = 2
    expect(calculatePowerOverGivenDistance(reach, distance)).toBe(4)
  })
  test('Reach being less than distance to be 0', () => {
    const reach = 4
    const distance = 8
    expect(calculatePowerOverGivenDistance(reach, distance)).toBe(0)
  })
})

describe('calculateLinkStationWithMostPowerForGivenCoordinates', () => {
  test('On the first default point to have sam x,y reach and power as square of reach', () => {
    const expectedResult = {
      x: 0,
      y: 0,
      reach: 10,
      power: 100
    }
    expect(calculateLinkStationWithMostPowerForGivenCoordinates(X1_DEFAULT, Y1_DEFAULT, LINK_STATIONS_DEFAULT)).toStrictEqual(expectedResult)
  })
  test('Far away from any reach to be null', () => {
    const x = 100
    const y = 100
    const expectedResult = null
    expect(calculateLinkStationWithMostPowerForGivenCoordinates(x, y, LINK_STATIONS_DEFAULT)).toStrictEqual(expectedResult)
  })
  test('X = 15 and Y = 10 to return closest', () => {
    const x = 15
    const y = 10
    const expectedResult = {
      x: 10,
      y: 0,
      reach: 12,
      power: 0.6718427000252355
    }
    expect(calculateLinkStationWithMostPowerForGivenCoordinates(x, y, LINK_STATIONS_DEFAULT)).toStrictEqual(expectedResult)
  })
  test('X = 18 and Y = 18 to return closest. What else can I say?', () => {
    const x = 18
    const y = 18
    const expectedResult = {
      x: 20,
      y: 20,
      reach: 5,
      power: 4.715728752538098
    }
    expect(calculateLinkStationWithMostPowerForGivenCoordinates(x, y, LINK_STATIONS_DEFAULT)).toStrictEqual(expectedResult)
  })
})
