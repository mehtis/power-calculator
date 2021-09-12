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

const calculateMostPower = (x, y) => {
  let result = { x: -1, y: -1, power: 0 }
  linkStations.forEach(station => {
    const distance = Math.sqrt(Math.pow(station.x - x, 2) + Math.pow(station.y - y, 2))
    const stationTooFar = distance > station.reach
    if (!stationTooFar) {
      const power = Math.pow(station.reach - distance, 2)
      if (power > result.power) {
        result = { ...station, power }
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
