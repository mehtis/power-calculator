/*
** Default link stations
** This can be moved to it's own file if there's need to be able to override it easily
*/
export const defaultLinkStations = [
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

export const calculateDistanceBetweenPoints = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))

export const calculatePowerOverGivenDistance = (reach, distance) => reach >= distance
  ? Math.pow(reach - distance, 2)
  : 0

/**
 * Finds the linkstation closest to the given x,y coordinates
 * @param {int} x X-coordinate
 * @param {int} y Y-coordinate
 * @returns Coordinates and power of closest link station to the given coordinates.
 */
export const calculateLinkStationWithMostPowerForGivenCoordinates = (x, y, linkStations = defaultLinkStations) => {
  let result = { x: -1, y: -1, power: 0 }
  linkStations.forEach(linkStation => {
    const distanceToLinkStation = calculateDistanceBetweenPoints(linkStation.x, linkStation.y, x, y)
    const power = calculatePowerOverGivenDistance(linkStation.reach, distanceToLinkStation)
    if (power > result.power) {
      result = { ...linkStation, power }
    }
  })
  if (result.power > 0) {
    return result
  } else {
    return null
  }
}

export default defaultLinkStations
