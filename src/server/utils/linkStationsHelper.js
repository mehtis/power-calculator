/*
** Default link stations
** This can be moved to it's own file if there's need to be able to override it easily
*/
const linkStations = [
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

/**
 * Finds the linkstation closest to the given x,y coordinates
 * @param {int} x X-coordinate
 * @param {int} y Y-coordinate
 * @returns Coordinates and power of closest link station to the given coordinates.
 */
const calculateMostPower = (x, y) => {
  let result = { x: -1, y: -1, power: 0 }
  linkStations.forEach(linkStation => {
    const distanceToLinkStation = Math.sqrt(Math.pow(linkStation.x - x, 2) + Math.pow(linkStation.y - y, 2))
    const linkStationIsWithinReachOfGivenCoordinates = distanceToLinkStation <= linkStation.reach
    if (linkStationIsWithinReachOfGivenCoordinates) {
      const power = Math.pow(linkStation.reach - distanceToLinkStation, 2)
      if (power > result.power) {
        result = { ...linkStation, power }
      }
    }
  })
  if (result.power > 0) {
    return `Best link station for point ${x},${y} is ${result.x},${result.y} with power ${result.power}`
  }
  return `No link station within reach for point ${x}, ${y}`
}

module.exports.linkStations = linkStations
module.exports.calculateMostPower = calculateMostPower
